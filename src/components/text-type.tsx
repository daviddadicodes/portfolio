"use client";

import { ElementType, useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type TextTypeProps = {
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  startOnVisible?: boolean;
};

export function TextType({
  text,
  as: Component = "div",
  typingSpeed = 55,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName,
  startOnVisible = false
}: TextTypeProps) {
  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(!startOnVisible);

  useEffect(() => {
    if (!startOnVisible) {
      return;
    }

    setIsVisible(true);
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const currentText = textArray[currentTextIndex] ?? "";
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, displayedText.length === 0 ? initialDelay : typingSpeed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      if (!loop && currentTextIndex === textArray.length - 1) {
        return;
      }

      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
    }

    return () => clearTimeout(timeoutId);
  }, [
    currentTextIndex,
    deletingSpeed,
    displayedText,
    initialDelay,
    isDeleting,
    isVisible,
    loop,
    pauseDuration,
    textArray,
    typingSpeed
  ]);

  const currentText = textArray[currentTextIndex] ?? "";
  const isTyping = displayedText.length < currentText.length && !isDeleting;
  const shouldHideCursor = hideCursorWhileTyping && isTyping;

  return (
    <Component className={cn("inline-block whitespace-pre-wrap", className)}>
      <span>{displayedText}</span>
      {showCursor ? (
        <span
          aria-hidden="true"
          className={cn(
            "ml-1 inline-block animate-[pulse_1s_ease-in-out_infinite]",
            shouldHideCursor && "hidden",
            cursorClassName
          )}
        >
          {cursorCharacter}
        </span>
      ) : null}
    </Component>
  );
}
