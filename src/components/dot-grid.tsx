"use client";

import { useEffect, useRef } from "react";

type DotGridProps = {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
};

type Dot = {
  x: number;
  y: number;
};

function hexToRgb(hex: string) {
  const match = hex.replace("#", "").match(/^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

  if (!match) {
    return { r: 103, g: 232, b: 249 };
  }

  return {
    r: parseInt(match[1], 16),
    g: parseInt(match[2], 16),
    b: parseInt(match[3], 16)
  };
}

export function DotGrid({
  dotSize = 4,
  gap = 28,
  baseColor = "#67e8f9",
  activeColor = "#a5f3fc",
  proximity = 140,
  className = ""
}: DotGridProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;

    if (!wrapper || !canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const baseRgb = hexToRgb(baseColor);
    const activeRgb = hexToRgb(activeColor);
    const proximitySq = proximity * proximity;
    let frameId = 0;

    const buildGrid = () => {
      const rect = wrapper.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const columns = Math.floor((rect.width + gap) / gap);
      const rows = Math.floor((rect.height + gap) / gap);
      const dots: Dot[] = [];

      for (let row = 0; row <= rows; row += 1) {
        for (let column = 0; column <= columns; column += 1) {
          dots.push({
            x: column * gap + gap / 2,
            y: row * gap + gap / 2
          });
        }
      }

      dotsRef.current = dots;
    };

    const draw = () => {
      const rect = wrapper.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const dot of dotsRef.current) {
        const dx = dot.x - pointerRef.current.x;
        const dy = dot.y - pointerRef.current.y;
        const distanceSq = dx * dx + dy * dy;

        let alpha = 0.16;
        let fill = `rgba(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b}, ${alpha})`;

        if (pointerRef.current.active && distanceSq < proximitySq) {
          const distance = Math.sqrt(distanceSq);
          const strength = 1 - distance / proximity;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * strength);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * strength);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * strength);
          alpha = 0.16 + strength * 0.48;
          fill = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }

        ctx.beginPath();
        ctx.fillStyle = fill;
        ctx.arc(dot.x, dot.y, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true
      };
    };

    const clearPointer = () => {
      pointerRef.current.active = false;
    };

    buildGrid();
    draw();

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(wrapper);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", clearPointer);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", clearPointer);
      window.cancelAnimationFrame(frameId);
    };
  }, [activeColor, baseColor, dotSize, gap, proximity]);

  return (
    <div ref={wrapperRef} className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full opacity-80" />
    </div>
  );
}
