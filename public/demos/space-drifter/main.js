import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.166.1/build/three.module.js";

const STORAGE_KEYS = {
  bestScore: "neon-rift-runner-best-score",
  soundEnabled: "neon-rift-runner-sound-enabled",
  qualityHigh: "neon-rift-runner-quality-high",
};

const LEVELS = [
  { name: "Warmup Drift", target: 16, spawnBase: 2, spawnJitter: 1, spawnDelay: 2.2, speed: 0.9, drifter: 0.18, heavy: 0.04, starter: "spread", powerLevel: 2, powerDuration: 10, asteroidPalette: [0x54d8ff, 0x7a95ff, 0x58f2ff], theme: { top: "#020816", mid: "#0a2552", glowA: "hsla(198, 100%, 66%, 0.24)", glowB: "hsla(220, 100%, 60%, 0.18)", glowC: "hsla(248, 100%, 74%, 0.14)", fog: 0x091d40, nebulaHue: 0.58, rift: 0x4eb8ff } },
  { name: "Shard Rain", target: 18, spawnBase: 3, spawnJitter: 1, spawnDelay: 2.0, speed: 1, drifter: 0.24, heavy: 0.05, starter: "burst", powerLevel: 2, powerDuration: 10, asteroidPalette: [0xff6cd8, 0xc778ff, 0x6f8fff], theme: { top: "#0f0618", mid: "#35156f", glowA: "hsla(284, 95%, 70%, 0.22)", glowB: "hsla(232, 100%, 64%, 0.15)", glowC: "hsla(318, 100%, 74%, 0.14)", fog: 0x24104f, nebulaHue: 0.77, rift: 0xa06fff } },
  { name: "Blue Tunnel", target: 20, spawnBase: 3, spawnJitter: 2, spawnDelay: 1.85, speed: 1.06, drifter: 0.26, heavy: 0.08, starter: "lance", powerLevel: 2, powerDuration: 11, asteroidPalette: [0x66efff, 0x4bb4ff, 0x88f0ff], theme: { top: "#02111c", mid: "#0b3975", glowA: "hsla(194, 100%, 72%, 0.26)", glowB: "hsla(212, 100%, 62%, 0.2)", glowC: "hsla(236, 100%, 76%, 0.11)", fog: 0x0c2c5d, nebulaHue: 0.54, rift: 0x67dfff } },
  { name: "Split Wave", target: 22, spawnBase: 4, spawnJitter: 1, spawnDelay: 1.72, speed: 1.1, drifter: 0.3, heavy: 0.1, starter: "spread", powerLevel: 3, powerDuration: 11, asteroidPalette: [0xff6fd9, 0x9d7cff, 0x5ad7ff], theme: { top: "#110d1b", mid: "#421d56", glowA: "hsla(316, 95%, 68%, 0.2)", glowB: "hsla(262, 100%, 64%, 0.18)", glowC: "hsla(202, 100%, 72%, 0.14)", fog: 0x2b153c, nebulaHue: 0.84, rift: 0xff6dd9 } },
  { name: "Heavy Core", target: 24, spawnBase: 4, spawnJitter: 2, spawnDelay: 1.62, speed: 1.15, drifter: 0.24, heavy: 0.18, starter: "burst", powerLevel: 3, powerDuration: 12, asteroidPalette: [0xff8f3f, 0xffc04e, 0xff6750], theme: { top: "#1b0c05", mid: "#5e2d12", glowA: "hsla(24, 100%, 64%, 0.22)", glowB: "hsla(8, 100%, 58%, 0.18)", glowC: "hsla(44, 100%, 70%, 0.14)", fog: 0x4d220d, nebulaHue: 0.06, rift: 0xff8b44 } },
  { name: "Rift Surge", target: 27, spawnBase: 5, spawnJitter: 1, spawnDelay: 1.48, speed: 1.2, drifter: 0.34, heavy: 0.14, starter: "lance", powerLevel: 3, powerDuration: 12, asteroidPalette: [0x55ffc0, 0x4fe5ff, 0x92ff73], theme: { top: "#04160e", mid: "#0c5640", glowA: "hsla(154, 100%, 64%, 0.2)", glowB: "hsla(190, 100%, 62%, 0.18)", glowC: "hsla(104, 100%, 74%, 0.13)", fog: 0x0d4132, nebulaHue: 0.42, rift: 0x50ffc0 } },
  { name: "Final Rush", target: 32, spawnBase: 5, spawnJitter: 2, spawnDelay: 1.34, speed: 1.28, drifter: 0.36, heavy: 0.2, starter: "spread", powerLevel: 3, powerDuration: 13, asteroidPalette: [0x77a8ff, 0xbc7bff, 0xff67dc], theme: { top: "#02040d", mid: "#351d6d", glowA: "hsla(218, 100%, 68%, 0.2)", glowB: "hsla(284, 100%, 68%, 0.22)", glowC: "hsla(332, 100%, 72%, 0.14)", fog: 0x24154a, nebulaHue: 0.68, rift: 0x8c8dff } },
  { name: "Solar Veil", target: 35, spawnBase: 5, spawnJitter: 2, spawnDelay: 1.26, speed: 1.34, drifter: 0.3, heavy: 0.22, starter: "burst", powerLevel: 3, powerDuration: 13, asteroidPalette: [0xffab50, 0xff7b61, 0xffdf72], theme: { top: "#1c0905", mid: "#7c2f15", glowA: "hsla(18, 100%, 64%, 0.24)", glowB: "hsla(42, 100%, 66%, 0.16)", glowC: "hsla(2, 100%, 70%, 0.14)", fog: 0x5b210f, nebulaHue: 0.03, rift: 0xff9458 } },
  { name: "Ion Bloom", target: 38, spawnBase: 6, spawnJitter: 2, spawnDelay: 1.22, speed: 1.38, drifter: 0.36, heavy: 0.18, starter: "lance", powerLevel: 4, powerDuration: 14, asteroidPalette: [0x6efff4, 0x65c9ff, 0x7affc6], theme: { top: "#04141a", mid: "#0e5f74", glowA: "hsla(184, 100%, 62%, 0.22)", glowB: "hsla(206, 100%, 62%, 0.18)", glowC: "hsla(164, 100%, 70%, 0.14)", fog: 0x104a5a, nebulaHue: 0.49, rift: 0x5df7ff } },
  { name: "Royal Rift", target: 41, spawnBase: 6, spawnJitter: 2, spawnDelay: 1.18, speed: 1.42, drifter: 0.34, heavy: 0.22, starter: "spread", powerLevel: 4, powerDuration: 14, asteroidPalette: [0xc684ff, 0xff6ee7, 0x7f83ff], theme: { top: "#090514", mid: "#472082", glowA: "hsla(274, 100%, 70%, 0.22)", glowB: "hsla(316, 100%, 68%, 0.18)", glowC: "hsla(234, 100%, 72%, 0.15)", fog: 0x31185c, nebulaHue: 0.8, rift: 0xc58cff } },
  { name: "Emerald Run", target: 44, spawnBase: 6, spawnJitter: 2, spawnDelay: 1.14, speed: 1.46, drifter: 0.4, heavy: 0.2, starter: "burst", powerLevel: 4, powerDuration: 15, asteroidPalette: [0x72ff89, 0x58ffc9, 0x9cff6e], theme: { top: "#041208", mid: "#16613f", glowA: "hsla(138, 100%, 62%, 0.2)", glowB: "hsla(168, 100%, 62%, 0.16)", glowC: "hsla(102, 100%, 72%, 0.14)", fog: 0x124731, nebulaHue: 0.36, rift: 0x5cff98 } },
  { name: "Eventide Flux", target: 47, spawnBase: 7, spawnJitter: 2, spawnDelay: 1.08, speed: 1.5, drifter: 0.4, heavy: 0.24, starter: "lance", powerLevel: 4, powerDuration: 15, asteroidPalette: [0xff8f68, 0x8ea2ff, 0xff6fc0], theme: { top: "#090a1b", mid: "#53307d", glowA: "hsla(328, 100%, 68%, 0.2)", glowB: "hsla(222, 100%, 68%, 0.18)", glowC: "hsla(18, 100%, 66%, 0.14)", fog: 0x33214f, nebulaHue: 0.72, rift: 0xff7dbd } },
  { name: "Shatter Zone", target: 50, spawnBase: 7, spawnJitter: 3, spawnDelay: 1.04, speed: 1.56, drifter: 0.38, heavy: 0.26, starter: "spread", powerLevel: 4, powerDuration: 16, asteroidPalette: [0x74d4ff, 0xffb263, 0xd16eff], theme: { top: "#060b17", mid: "#214b7d", glowA: "hsla(204, 100%, 68%, 0.22)", glowB: "hsla(32, 100%, 66%, 0.18)", glowC: "hsla(286, 100%, 70%, 0.14)", fog: 0x1a3153, nebulaHue: 0.57, rift: 0x73d8ff } },
  { name: "Nova Crown", target: 54, spawnBase: 7, spawnJitter: 3, spawnDelay: 1.0, speed: 1.62, drifter: 0.42, heavy: 0.25, starter: "burst", powerLevel: 5, powerDuration: 16, asteroidPalette: [0xffde7b, 0xff7fa0, 0xff9c52], theme: { top: "#180c05", mid: "#7f3d17", glowA: "hsla(45, 100%, 68%, 0.24)", glowB: "hsla(16, 100%, 66%, 0.18)", glowC: "hsla(340, 100%, 72%, 0.14)", fog: 0x5f2b11, nebulaHue: 0.09, rift: 0xffbf64 } },
  { name: "Hyperion Gate", target: 58, spawnBase: 8, spawnJitter: 3, spawnDelay: 0.96, speed: 1.68, drifter: 0.42, heavy: 0.28, starter: "lance", powerLevel: 5, powerDuration: 17, asteroidPalette: [0x80f8ff, 0x93a8ff, 0x7fffcc], theme: { top: "#031019", mid: "#165678", glowA: "hsla(191, 100%, 70%, 0.24)", glowB: "hsla(226, 100%, 68%, 0.18)", glowC: "hsla(156, 100%, 72%, 0.14)", fog: 0x13445e, nebulaHue: 0.52, rift: 0x7cefff } },
  { name: "Omega Drift", target: 64, spawnBase: 8, spawnJitter: 3, spawnDelay: 0.92, speed: 1.76, drifter: 0.46, heavy: 0.3, starter: "spread", powerLevel: 5, powerDuration: 18, asteroidPalette: [0xff71ea, 0x88d8ff, 0xc69bff], theme: { top: "#050611", mid: "#3b1d74", glowA: "hsla(302, 100%, 68%, 0.22)", glowB: "hsla(208, 100%, 70%, 0.18)", glowC: "hsla(262, 100%, 74%, 0.15)", fog: 0x28144f, nebulaHue: 0.75, rift: 0xe67cff } },
];

const state = {
  mode: "playing",
  settingsReturn: "menu",
  time: 0,
  score: 0,
  bestScore: Number(localStorage.getItem(STORAGE_KEYS.bestScore) || 0),
  health: 100,
  difficulty: 1,
  soundEnabled: localStorage.getItem(STORAGE_KEYS.soundEnabled) !== "false",
  qualityHigh: localStorage.getItem(STORAGE_KEYS.qualityHigh) !== "false",
  canFire: true,
  fireHold: false,
  fireCooldown: 0,
  waveTimer: 0,
  spawnTimer: 0,
  damageFlash: 0,
  shake: 0,
  toastTimer: 0,
  lastAsteroidZ: -120,
  combo: 0,
  comboTimer: 0,
  dodgeTimer: 0,
  exhaustTimer: 0,
  weaponTimer: 0,
  weaponModeTimer: 0,
  lowHealthFxTimer: 0,
  deathTransitionTimer: 0,
  imminentDanger: false,
  lastShotCooldown: 0.14,
  fireRhythm: 0,
  levelIndex: 0,
  levelKills: 0,
  totalKills: 0,
  levelIntroTimer: 0,
  shotsFired: 0,
  shotsHit: 0,
  pickupsCollected: 0,
  nearMisses: 0,
  bestCombo: 0,
  runWon: false,
};

const scene = new THREE.Scene();
scene.background = createSpaceBackdropTexture(LEVELS[0].theme);
scene.fog = new THREE.FogExp2(LEVELS[0].theme.fog, 0.0046);

const canvas = document.getElementById("game-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: "high-performance",
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.22;

const camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 2.7, 10.1);

const clock = new THREE.Clock();
const root = new THREE.Group();
scene.add(root);

const starFieldFar = createStarField(2200, 220, 0.58);
const starFieldMid = createStarField(900, 140, 0.88);
const starFieldNear = createStarField(380, 88, 1.16);
root.add(starFieldFar, starFieldMid, starFieldNear);
const speedLines = createSpeedLines(28);
root.add(speedLines);

const backgroundAsteroids = createBackdropAsteroids(22, "far");
const foregroundAsteroids = createBackdropAsteroids(12, "near");
backgroundAsteroids.forEach((mesh) => root.add(mesh));
foregroundAsteroids.forEach((mesh) => root.add(mesh));

const nebulaPlanes = createNebulaClouds(LEVELS[0].theme);
nebulaPlanes.forEach((cloud) => root.add(cloud));
const riftGlow = createGlowSprite(LEVELS[0].theme.rift, 24, 0.07);
riftGlow.position.set(0, -0.8, -86);
root.add(riftGlow);

const lights = setupLights();
scene.add(lights.ambient, lights.directional, lights.rim, lights.fill, lights.playerGlow);

const playerStart = new THREE.Vector3(0, 0, 0);
const player = {
  group: createPlayerShip(),
  velocity: new THREE.Vector3(),
  position: playerStart.clone(),
  targetPosition: playerStart.clone(),
  moveBounds: { x: 6, y: 3.6 },
  speed: 9.2,
  weaponLevel: 1,
  weaponMode: "normal",
  invuln: 0,
  bob: 0,
  recoil: 0,
  shotPulse: 0,
};
root.add(player.group);

const engineTrail = createEngineTrail();
player.group.add(engineTrail);

const asteroids = [];
const asteroidFragments = [];
const bullets = [];
const pickups = [];
const particles = [];

const input = {
  left: false,
  right: false,
  up: false,
  down: false,
  fire: false,
  pausePressed: false,
  moveVector: new THREE.Vector2(),
  joystickActive: false,
};

const ui = {
  healthFill: document.getElementById("health-fill"),
  damageFlash: document.getElementById("damage-flash"),
  timer: document.getElementById("timer"),
  levelLabel: document.getElementById("level-label"),
  levelObjective: document.getElementById("level-objective"),
  score: document.getElementById("score"),
  bestScore: document.getElementById("best-score"),
  shieldFill: document.getElementById("shield-fill"),
  abilityFill: document.getElementById("ability-fill"),
  chargeFill: document.getElementById("charge-fill"),
  radarBlips: document.getElementById("radar-blips"),
  weaponState: document.getElementById("weapon-state"),
  powerState: document.getElementById("power-state"),
  powerTimer: document.getElementById("power-timer"),
  comboState: document.getElementById("combo-state"),
  waveAnnouncement: document.getElementById("wave-announcement"),
  dangerWarning: document.getElementById("danger-warning"),
  menuBest: document.getElementById("menu-best-score"),
  finalScore: document.getElementById("final-score"),
  finalBest: document.getElementById("final-best-score"),
  finalTime: document.getElementById("final-time"),
  finalRank: document.getElementById("final-rank"),
  finalLevel: document.getElementById("final-level"),
  finalAccuracy: document.getElementById("final-accuracy"),
  finalPickups: document.getElementById("final-pickups"),
  finalDodges: document.getElementById("final-dodges"),
  finalCombo: document.getElementById("final-combo"),
  finalHits: document.getElementById("final-hits"),
  gameoverEyebrow: document.getElementById("gameover-eyebrow"),
  gameoverTitle: document.getElementById("gameover-title"),
  toast: document.getElementById("toast"),
  menuSoundState: document.getElementById("menu-sound-state"),
  soundToggleLabel: document.getElementById("sound-toggle-label"),
  qualityToggleLabel: document.getElementById("quality-toggle-label"),
  overlays: {
    menu: document.getElementById("menu-overlay"),
    pause: document.getElementById("pause-overlay"),
    gameover: document.getElementById("gameover-overlay"),
    settings: document.getElementById("settings-overlay"),
  },
};

const audio = setupAudio();

wireButtons();
wireKeyboard();
wireTouchControls();
syncUI();
returnToMenu();
animate();

function setupLights() {
  const ambient = new THREE.AmbientLight(0x5564b9, 0.86);
  const directional = new THREE.DirectionalLight(0xe0f1ff, 1.76);
  directional.position.set(9, 11, 14);
  const rim = new THREE.PointLight(0x5d72ff, 42, 110, 2);
  rim.position.set(-16, 8, -22);
  const fill = new THREE.PointLight(0x36d9ff, 15, 54, 2);
  fill.position.set(12, -1.2, -9);
  const playerGlow = new THREE.PointLight(0x9feeff, 9, 24, 2);
  playerGlow.position.set(0, 1, 6);
  return { ambient, directional, rim, fill, playerGlow };
}

function createSpaceBackdropTexture(theme = LEVELS[0].theme) {
  const canvasEl = document.createElement("canvas");
  canvasEl.width = 1024;
  canvasEl.height = 1024;
  const ctx = canvasEl.getContext("2d");

  const base = ctx.createLinearGradient(0, 0, 0, 1024);
  base.addColorStop(0, theme.top);
  base.addColorStop(0.26, "#050914");
  base.addColorStop(0.46, theme.mid);
  base.addColorStop(0.72, "#081126");
  base.addColorStop(1, "#02050c");
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, 1024, 1024);

  const cinematicGlow = ctx.createRadialGradient(510, 540, 40, 510, 540, 520);
  cinematicGlow.addColorStop(0, "rgba(126, 214, 255, 0.18)");
  cinematicGlow.addColorStop(0.22, "rgba(84, 120, 255, 0.08)");
  cinematicGlow.addColorStop(0.56, "rgba(124, 84, 255, 0.06)");
  cinematicGlow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = cinematicGlow;
  ctx.fillRect(0, 0, 1024, 1024);

  const swirls = [
    { x: 220, y: 300, r: 280, color: theme.glowA },
    { x: 470, y: 700, r: 360, color: theme.glowB },
    { x: 800, y: 210, r: 260, color: theme.glowC },
    { x: 820, y: 690, r: 340, color: theme.glowB },
    { x: 560, y: 470, r: 310, color: theme.glowA },
  ];
  swirls.forEach(({ x, y, r, color }) => {
    const glow = ctx.createRadialGradient(x, y, 0, x, y, r);
    glow.addColorStop(0, color);
    glow.addColorStop(0.38, color.replace(/0\.\d+\)/, "0.11)"));
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  });

  for (let i = 0; i < 620; i += 1) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const radius = Math.random() * 1.6 + 0.35;
    const alpha = Math.random() * 0.7 + 0.25;
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < 34; i += 1) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const radius = 2 + Math.random() * 5;
    const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 4);
    glow.addColorStop(0, "rgba(255,255,255,0.8)");
    glow.addColorStop(0.22, "rgba(147,208,255,0.3)");
    glow.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(x - radius * 4, y - radius * 4, radius * 8, radius * 8);
  }

  ctx.strokeStyle = "rgba(127, 187, 255, 0.08)";
  ctx.lineWidth = 1;
  for (let i = 0; i < 22; i += 1) {
    const startX = Math.random() * 1024;
    const startY = Math.random() * 1024;
    const len = 40 + Math.random() * 120;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + len * 0.18, startY + len);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createGlowSprite(color, size, opacity = 1) {
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: createGlowTexture(color),
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  sprite.scale.setScalar(size);
  return sprite;
}

function createGlowTexture(color) {
  const canvasEl = document.createElement("canvas");
  canvasEl.width = 128;
  canvasEl.height = 128;
  const ctx = canvasEl.getContext("2d");
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  const c = new THREE.Color(color);
  gradient.addColorStop(0, `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, 1)`);
  gradient.addColorStop(0.3, `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, 0.55)`);
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createAsteroidSurfaceTexture() {
  const canvasEl = document.createElement("canvas");
  canvasEl.width = 256;
  canvasEl.height = 256;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "#0f1218";
  ctx.fillRect(0, 0, 256, 256);

  for (let i = 0; i < 1200; i += 1) {
    const shade = 18 + Math.floor(Math.random() * 28);
    const alpha = 0.05 + Math.random() * 0.12;
    ctx.fillStyle = `rgba(${shade}, ${shade + 2}, ${shade + 8}, ${alpha})`;
    ctx.fillRect(Math.random() * 256, Math.random() * 256, 2 + Math.random() * 3, 2 + Math.random() * 3);
  }

  for (let i = 0; i < 42; i += 1) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const radius = 10 + Math.random() * 34;
    const dent = ctx.createRadialGradient(x, y, 0, x, y, radius);
    dent.addColorStop(0, "rgba(0,0,0,0.24)");
    dent.addColorStop(0.7, "rgba(22,26,34,0.08)");
    dent.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = dent;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1.2, 1.2);
  return texture;
}

const asteroidSurfaceTexture = createAsteroidSurfaceTexture();

function createStarTexture() {
  const canvasEl = document.createElement("canvas");
  canvasEl.width = 128;
  canvasEl.height = 128;
  const ctx = canvasEl.getContext("2d");
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.18, "rgba(220,244,255,0.95)");
  grad.addColorStop(0.34, "rgba(156,214,255,0.45)");
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);

  ctx.strokeStyle = "rgba(220,245,255,0.42)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(64, 14);
  ctx.lineTo(64, 114);
  ctx.moveTo(14, 64);
  ctx.lineTo(114, 64);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createPlayerShip() {
  const ship = new THREE.Group();

  const coreMat = new THREE.MeshStandardMaterial({
    color: 0xc9d7e8,
    metalness: 0.94,
    roughness: 0.18,
    emissive: 0x08111b,
    emissiveIntensity: 0.16,
  });
  const darkMat = new THREE.MeshStandardMaterial({
    color: 0x111722,
    metalness: 0.82,
    roughness: 0.28,
  });
  const glowMat = new THREE.MeshStandardMaterial({
    color: 0xeaf6ff,
    emissive: 0x2f91d7,
    emissiveIntensity: 1.16,
    metalness: 0.78,
    roughness: 0.12,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x5fe2ff,
    emissive: 0x2db8ff,
    emissiveIntensity: 1.4,
    metalness: 0.7,
    roughness: 0.2,
  });

  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.52, 1.82, 6), coreMat);
  nose.rotation.x = Math.PI / 2;
  nose.position.z = 0.98;
  ship.add(nose);

  const noseBlade = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.22, 1.28), glowMat);
  noseBlade.position.set(0, 0.1, 0.74);
  ship.add(noseBlade);

  const centerBody = new THREE.Mesh(new THREE.BoxGeometry(1.26, 0.5, 3.18), darkMat);
  centerBody.position.set(0, 0, -0.1);
  ship.add(centerBody);

  const dorsal = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.42, 1.74), coreMat);
  dorsal.position.set(0, 0.36, -0.06);
  ship.add(dorsal);

  const cockpit = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 0), glowMat);
  cockpit.position.set(0, 0.46, 0.28);
  cockpit.scale.set(0.9, 0.45, 1.4);
  ship.add(cockpit);

  const canopyGlow = createGlowSprite(0x84f4ff, 1.02, 0.14);
  canopyGlow.position.set(0, 0.45, 0.24);
  ship.add(canopyGlow);

  const cockpitHalo = createGlowSprite(0xc8f7ff, 1.28, 0.08);
  cockpitHalo.position.set(0, 0.38, 0.05);
  ship.add(cockpitHalo);

  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.34, 1.92), coreMat);
  spine.position.set(0, 0.5, -0.46);
  ship.add(spine);

  const dorsalAccent = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 1.54), accentMat);
  dorsalAccent.position.set(0, 0.6, -0.36);
  ship.add(dorsalAccent);

  const wingRootGeo = new THREE.BoxGeometry(2.28, 0.12, 0.32);
  const wingEdgeGeo = new THREE.BoxGeometry(1.44, 0.07, 0.12);
  for (const side of [-1, 1]) {
    const wingRoot = new THREE.Mesh(wingRootGeo, coreMat);
    wingRoot.position.set(1.38 * side, -0.04, -0.04);
    wingRoot.rotation.z = -0.1 * side;
    ship.add(wingRoot);

    const wingMid = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.34, 1.58), darkMat);
    wingMid.position.set(1.98 * side, 0.02, -0.42);
    wingMid.rotation.z = -0.06 * side;
    ship.add(wingMid);

    const wingEdge = new THREE.Mesh(wingEdgeGeo, coreMat);
    wingEdge.position.set(2.78 * side, -0.08, -0.62);
    wingEdge.rotation.z = 0.22 * side;
    ship.add(wingEdge);

    const wingProng = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.08, 1.82), coreMat);
    wingProng.position.set(3.12 * side, -0.08, -0.74);
    wingProng.rotation.z = 0.18 * side;
    ship.add(wingProng);

    const wingUpper = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.08, 0.18), coreMat);
    wingUpper.position.set(2.38 * side, 0.18, -0.58);
    wingUpper.rotation.z = 0.28 * side;
    ship.add(wingUpper);

    const canard = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.06, 0.18), coreMat);
    canard.position.set(0.78 * side, 0.04, 0.72);
    canard.rotation.z = -0.38 * side;
    ship.add(canard);

    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.86, 0.18), coreMat);
    fin.position.set(0.76 * side, 0.38, -0.82);
    fin.rotation.z = -0.22 * side;
    ship.add(fin);

    const sideIntake = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.32, 1.02), darkMat);
    sideIntake.position.set(0.9 * side, -0.02, -1.1);
    ship.add(sideIntake);

    const sideCap = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.2, 0.44), coreMat);
    sideCap.position.set(0.98 * side, 0.1, -0.72);
    ship.add(sideCap);

    const sideAccent = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 1.12), accentMat);
    sideAccent.position.set(1.16 * side, 0.14, -0.48);
    ship.add(sideAccent);

    const wingGlow = createGlowSprite(0x79dfff, 0.64, 0.08);
    wingGlow.position.set(2.1 * side, 0.08, -0.56);
    ship.add(wingGlow);
  }

  const tailBridge = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.22, 1.02), darkMat);
  tailBridge.position.set(0, 0.02, -1.28);
  ship.add(tailBridge);

  const ventStrips = [];
  for (const x of [-0.26, 0.26]) {
    const vent = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 1.24), accentMat);
    vent.position.set(x, -0.06, -0.62);
    ship.add(vent);
    ventStrips.push(vent);
  }

  const engineGeo = new THREE.CylinderGeometry(0.2, 0.26, 0.98, 12);
  const nozzleGlows = [];
  for (const x of [-0.62, 0, 0.62]) {
    const engine = new THREE.Mesh(engineGeo, darkMat);
    engine.rotation.x = Math.PI / 2;
    engine.position.set(x, -0.12, -1.66);
    ship.add(engine);

    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.12, 12), coreMat);
    collar.rotation.x = Math.PI / 2;
    collar.position.set(x, -0.12, -1.18);
    ship.add(collar);

    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.18, 12), glowMat);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(x, -0.12, -2.18);
    ship.add(nozzle);

    const nozzleGlow = createGlowSprite(0xe9fbff, x === 0 ? 1.18 : 0.88, 0.3);
    nozzleGlow.position.set(x, -0.12, -2.34);
    ship.add(nozzleGlow);
    nozzleGlows.push(nozzleGlow);
  }

  const bellyBlade = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 1.78), coreMat);
  bellyBlade.position.set(0, -0.18, -0.24);
  ship.add(bellyBlade);

  const tailRim = createGlowSprite(0x7ce9ff, 3.2, 0.06);
  tailRim.position.set(0, 0.02, -1.94);
  ship.add(tailRim);

  const shieldShell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.3, 1),
    new THREE.MeshBasicMaterial({
      color: 0x8be8ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      wireframe: true,
      depthWrite: false,
    })
  );
  shieldShell.scale.set(1.1, 0.52, 1.34);
  shieldShell.position.set(0, 0.06, -0.2);
  ship.add(shieldShell);

  ship.userData = {
    canopyGlow,
    cockpitHalo,
    nozzleGlows,
    ventStrips,
    tailRim,
    shieldShell,
    materials: [coreMat, darkMat, glowMat, accentMat],
  };

  ship.position.copy(playerStart);
  ship.scale.setScalar(0.98);
  ship.rotation.order = "YXZ";
  return ship;
}

function createEngineTrail() {
  const group = new THREE.Group();
  group.userData.cores = [];
  group.userData.halos = [];
  for (const x of [-0.58, 0, 0.58]) {
    const trail = new THREE.Mesh(
      new THREE.ConeGeometry(0.13, 1.45, 10, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x7ce9ff,
        transparent: true,
        opacity: 0.68,
      })
    );
    trail.rotation.x = -Math.PI / 2;
    trail.scale.set(1.15, 1.95, 1.15);
    trail.position.set(x, -0.12, 1.64);
    group.add(trail);
    group.userData.cores.push(trail);

    const sheath = new THREE.Mesh(
      new THREE.ConeGeometry(0.22, 1.9, 12, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x6675ff,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    sheath.rotation.x = -Math.PI / 2;
    sheath.scale.set(1.05, 2.25, 1.05);
    sheath.position.set(x, -0.12, 1.82);
    group.add(sheath);

    const halo = createGlowSprite(0xdffcff, x === 0 ? 1.68 : 1.24, 0.2);
    halo.position.set(x, -0.12, 1.38);
    group.add(halo);
    group.userData.halos.push(halo);
  }
  return group;
}

function spawnEngineExhaust(position, velocity, color = 0x7ce9ff) {
  const material = new THREE.PointsMaterial({
    size: 0.16,
    transparent: true,
    opacity: 0.48,
    color,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const geometry = new THREE.BufferGeometry();
  const count = state.qualityHigh ? 3 : 2;
  const positions = new Float32Array(count * 3);
  const velocities = [];
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = position.x + THREE.MathUtils.randFloatSpread(0.06);
    positions[i * 3 + 1] = position.y + THREE.MathUtils.randFloatSpread(0.06);
    positions[i * 3 + 2] = position.z;
    velocities.push(new THREE.Vector3(
      velocity.x + THREE.MathUtils.randFloatSpread(0.24),
      velocity.y + THREE.MathUtils.randFloatSpread(0.24),
      velocity.z - Math.random() * 2.4
    ));
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(geometry, material);
  root.add(points);
  particles.push({
    points,
    flash: null,
    velocities,
    life: 0.24,
    drag: 1.8,
  });
}

function createPickupGlow(type) {
  const color =
    type === "health"
      ? 0x7dffac
      : type === "weapon_spread"
        ? 0x9d8cff
        : type === "weapon_burst"
          ? 0xffc76a
          : type === "weapon_lance"
            ? 0x76f3ff
            : 0x7ce9ff;
  return createGlowSprite(color, type === "weapon" ? 1.1 : 0.9, 0.22);
}

function createStarField(count, spread, size) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();

  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * spread * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread * 1.2;
    positions[i * 3 + 2] = -Math.random() * 300;
    color.setHSL(0.56 + Math.random() * 0.12, 0.88, 0.76 + Math.random() * 0.2);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      map: createStarTexture(),
      size,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.98,
      vertexColors: true,
      depthWrite: false,
      alphaTest: 0.06,
      blending: THREE.AdditiveBlending,
    })
  );
}

function createBackdropAsteroids(count, layer = "far") {
  const meshes = [];
  for (let i = 0; i < count; i += 1) {
    const size =
      layer === "near"
        ? THREE.MathUtils.randFloat(0.12, 0.4)
        : THREE.MathUtils.randFloat(0.35, 1.15);
    const geometry = new THREE.DodecahedronGeometry(size, 0);
    const positions = geometry.attributes.position;
    const temp = new THREE.Vector3();
    for (let p = 0; p < positions.count; p += 1) {
      temp.fromBufferAttribute(positions, p);
      temp.multiplyScalar(THREE.MathUtils.randFloat(0.82, 1.18));
      positions.setXYZ(p, temp.x, temp.y, temp.z);
    }
    geometry.computeVertexNormals();
    const material = new THREE.MeshStandardMaterial({
      color: layer === "near" ? 0x171c26 : 0x12161d,
      roughness: 0.86,
      metalness: 0.08,
      flatShading: true,
      transparent: true,
      opacity: layer === "near" ? 0.34 : 0.22,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      THREE.MathUtils.randFloatSpread(layer === "near" ? 24 : 120),
      THREE.MathUtils.randFloat(layer === "near" ? -6.2 : -10.5, layer === "near" ? 6.8 : 8.8),
      layer === "near" ? -12 - Math.random() * 30 : -90 - Math.random() * 260
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    mesh.userData.layer = layer;
    mesh.userData.speed = layer === "near" ? 9 + Math.random() * 5 : 1.8 + Math.random() * 1.6;
    mesh.userData.spin = new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(layer === "near" ? 0.2 : 0.05),
      THREE.MathUtils.randFloatSpread(layer === "near" ? 0.2 : 0.05),
      THREE.MathUtils.randFloatSpread(layer === "near" ? 0.2 : 0.05)
    );
    meshes.push(mesh);
  }
  return meshes;
}

function createSpeedLines(count) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 6);
  const colors = new Float32Array(count * 6);
  const color = new THREE.Color();

  for (let i = 0; i < count; i += 1) {
    const x = THREE.MathUtils.randFloatSpread(18);
    const y = THREE.MathUtils.randFloat(-7, 5.5);
    const z = -Math.random() * 180;
    const len = THREE.MathUtils.randFloat(1.6, 3.6);

    positions[i * 6] = x;
    positions[i * 6 + 1] = y;
    positions[i * 6 + 2] = z;
    positions[i * 6 + 3] = x;
    positions[i * 6 + 4] = y;
    positions[i * 6 + 5] = z + len;

    color.setHSL(0.55 + Math.random() * 0.08, 0.95, 0.72);
    colors.set([color.r, color.g, color.b, color.r, color.g, color.b], i * 6);
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
}

function createNebulaClouds(theme = LEVELS[0].theme) {
  const clouds = [];
  for (let i = 0; i < 8; i += 1) {
    const spriteMat = new THREE.SpriteMaterial({
      map: createNebulaTexture(i, theme),
      color: new THREE.Color().setHSL(theme.nebulaHue + Math.random() * 0.06, 0.85, 0.7),
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.set((Math.random() - 0.5) * 58, (Math.random() - 0.5) * 18, -40 - i * 38);
    const scale = 34 + Math.random() * 34;
    sprite.scale.set(scale, scale * 0.7, 1);
    clouds.push(sprite);
  }
  return clouds;
}

function createNebulaTexture(seed, theme = LEVELS[0].theme) {
  const canvasEl = document.createElement("canvas");
  canvasEl.width = 256;
  canvasEl.height = 256;
  const ctx = canvasEl.getContext("2d");
  const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 120);
  const baseHue = Math.round(theme.nebulaHue * 360);
  const hues = [baseHue, baseHue + 16, baseHue + 38, baseHue + 60];
  grad.addColorStop(0, `hsla(${hues[seed % hues.length]}, 100%, 72%, 0.72)`);
  grad.addColorStop(0.32, `hsla(${hues[(seed + 1) % hues.length]}, 100%, 62%, 0.3)`);
  grad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 24; i += 1) {
    const x = Math.random() * 256;
    const y = Math.random() * 256;
    const radius = 18 + Math.random() * 52;
    const puff = ctx.createRadialGradient(x, y, 0, x, y, radius);
    puff.addColorStop(0, `hsla(${220 + Math.random() * 70}, 100%, 70%, 0.18)`);
    puff.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = puff;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvasEl);
}

function spawnAsteroidCluster(count) {
  const level = LEVELS[state.levelIndex] || LEVELS[LEVELS.length - 1];
  for (let i = 0; i < count; i += 1) {
    const roll = Math.random();
    const archetype =
      roll > 0.988
        ? "massive"
        : roll > 1 - level.heavy
          ? "heavy"
          : roll > 1 - (level.heavy + level.drifter)
            ? "drifter"
            : "normal";
    const size =
      archetype === "massive"
        ? THREE.MathUtils.randFloat(1.7, 2.45 + state.difficulty * 0.05)
        : archetype === "heavy"
        ? THREE.MathUtils.randFloat(1.05, 1.55 + state.difficulty * 0.05)
        : archetype === "drifter"
          ? THREE.MathUtils.randFloat(0.42, 0.88 + state.difficulty * 0.03)
          : THREE.MathUtils.randFloat(0.62, 1.16 + state.difficulty * 0.05);
    const asteroid = createAsteroid(size, archetype);
    asteroid.group.position.set(
      THREE.MathUtils.randFloatSpread(14),
      THREE.MathUtils.randFloat(-4.4, 4.1),
      archetype === "massive" ? -112 - Math.random() * 82 : -78 - Math.random() * 78
    );
    const forwardSpeed =
      archetype === "massive"
        ? (8.8 + state.difficulty * 0.65 + Math.random() * 1.8) * level.speed
        : archetype === "heavy"
        ? (11.5 + state.difficulty * 1.1 + Math.random() * 3) * level.speed
        : archetype === "drifter"
          ? (16 + state.difficulty * 1.8 + Math.random() * 5) * level.speed
          : (13.5 + state.difficulty * 1.35 + Math.random() * 4) * level.speed;
    asteroid.velocity.set(
      archetype === "drifter" ? THREE.MathUtils.randFloatSpread(1.15) : THREE.MathUtils.randFloatSpread(archetype === "massive" ? 0.16 : 0.35),
      archetype === "drifter" ? THREE.MathUtils.randFloatSpread(0.45) : THREE.MathUtils.randFloatSpread(archetype === "massive" ? 0.1 : 0.2),
      forwardSpeed
    );
    asteroid.rotationSpeed.set(
      THREE.MathUtils.randFloatSpread(archetype === "massive" ? 0.16 : 0.52),
      THREE.MathUtils.randFloatSpread(archetype === "massive" ? 0.16 : 0.52),
      THREE.MathUtils.randFloatSpread(archetype === "massive" ? 0.16 : 0.52)
    );
    asteroids.push(asteroid);
    root.add(asteroid.group);
    const spawnFlash = createGlowSprite(asteroid.crackColor, asteroid.size * 2.8, 0.12);
    spawnFlash.position.copy(asteroid.group.position);
    root.add(spawnFlash);
    particles.push({
      points: new THREE.Points(
        new THREE.BufferGeometry().setAttribute(
          "position",
          new THREE.BufferAttribute(new Float32Array([
            asteroid.group.position.x,
            asteroid.group.position.y,
            asteroid.group.position.z,
          ]), 3)
        ),
        new THREE.PointsMaterial({
          size: asteroid.size * 1.2,
          color: asteroid.crackColor,
          transparent: true,
          opacity: 0.55,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        })
      ),
      flash: spawnFlash,
      velocities: [new THREE.Vector3(0, 0, 0)],
      life: 0.35,
      drag: 0,
    });
    root.add(particles[particles.length - 1].points);
  }
}

function seedOpeningField(count) {
  for (let i = 0; i < count; i += 1) {
    const size = THREE.MathUtils.randFloat(0.28, 0.96);
    const asteroid = createAsteroid(size, "normal");
    const depth = THREE.MathUtils.lerp(-46, -128, i / Math.max(1, count - 1));
    asteroid.group.position.set(
      THREE.MathUtils.randFloatSpread(18),
      THREE.MathUtils.randFloat(-4.2, 3.9),
      depth + THREE.MathUtils.randFloatSpread(5)
    );
    asteroid.velocity.set(
      THREE.MathUtils.randFloatSpread(0.12),
      THREE.MathUtils.randFloatSpread(0.08),
      6.2 + Math.random() * 4.2
    );
    asteroid.rotationSpeed.set(
      THREE.MathUtils.randFloatSpread(0.35),
      THREE.MathUtils.randFloatSpread(0.35),
      THREE.MathUtils.randFloatSpread(0.35)
    );
    asteroids.push(asteroid);
    root.add(asteroid.group);
  }
}

function createAsteroid(size, archetype = "normal") {
  const level = LEVELS[state.levelIndex] || LEVELS[0];
  const palette = level.asteroidPalette || [0x2ef2ff, 0xff5fd8, 0xff9f40, 0x88ff5a, 0x8f7cff];
  const crackColor = palette[Math.floor(Math.random() * palette.length)];
  const group = new THREE.Group();
  const lightDir = new THREE.Vector3(-0.55, 0.35, 0.85).normalize();
  const tonePalette = [0x20242b, 0x2c2926, 0x252c35, 0x35302d, 0x2b3139];
  const mineralRich = Math.random() < (archetype === "massive" ? 0.28 : archetype === "heavy" ? 0.2 : 0.12);
  const rockMat = new THREE.MeshStandardMaterial({
    color: tonePalette[Math.floor(Math.random() * tonePalette.length)],
    map: asteroidSurfaceTexture,
    roughness: archetype === "massive" ? 0.84 : 0.76,
    metalness: 0.18,
    emissive: 0x06080d,
    emissiveIntensity: 0.12,
    flatShading: true,
  });
  const chunkCount = archetype === "massive" ? 6 : archetype === "heavy" ? 5 : 3;
  let primaryMesh = null;
  const craterCenters = Array.from({ length: archetype === "massive" ? 6 : archetype === "heavy" ? 4 : 3 }, () =>
    new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()
  );
  for (let c = 0; c < chunkCount; c += 1) {
    const chunkScale =
      c === 0 ? 1 : THREE.MathUtils.randFloat(archetype === "massive" ? 0.42 : 0.4, archetype === "massive" ? 0.82 : 0.7);
    const geometry = new THREE.IcosahedronGeometry(size * chunkScale, c === 0 ? 2 : 1);
    const positions = geometry.attributes.position;
    const temp = new THREE.Vector3();
    for (let i = 0; i < positions.count; i += 1) {
      temp.fromBufferAttribute(positions, i);
      const baseNoise =
        archetype === "massive"
          ? THREE.MathUtils.randFloat(0.74, 1.26)
          : archetype === "heavy"
            ? THREE.MathUtils.randFloat(0.78, 1.2)
            : THREE.MathUtils.randFloat(0.82, 1.18);
      temp.multiplyScalar(baseNoise);

      craterCenters.forEach((center) => {
        const alignment = temp.clone().normalize().dot(center);
        if (alignment > 0.72) {
          temp.multiplyScalar(1 - (alignment - 0.72) * 0.22);
        }
      });

      temp.x *= 1 + THREE.MathUtils.randFloat(-0.08, 0.12);
      temp.y *= 1 + THREE.MathUtils.randFloat(-0.16, 0.08);
      temp.z *= 1 + THREE.MathUtils.randFloat(-0.1, 0.14);
      positions.setXYZ(i, temp.x, temp.y, temp.z);
    }
    geometry.computeVertexNormals();
    const chunk = new THREE.Mesh(geometry, rockMat);
    chunk.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    if (c > 0) {
      chunk.position.set(
        THREE.MathUtils.randFloatSpread(size * 0.7),
        THREE.MathUtils.randFloatSpread(size * 0.55),
        THREE.MathUtils.randFloatSpread(size * 0.6)
      );
    }
    if (c === 0) primaryMesh = chunk;
    group.add(chunk);

    const rimShell = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({
        color: 0x8dbdff,
        transparent: true,
        opacity: archetype === "massive" ? 0.07 : 0.05,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    rimShell.scale.setScalar(1.028);
    chunk.add(rimShell);

    const shadowShell = new THREE.Mesh(
      geometry.clone(),
      new THREE.MeshBasicMaterial({
        color: 0x05070b,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
        depthWrite: false,
      })
    );
    shadowShell.scale.setScalar(1.012);
    shadowShell.position.copy(lightDir).multiplyScalar(-size * 0.06);
    chunk.add(shadowShell);
  }

  const craterMat = new THREE.MeshStandardMaterial({
    color: 0x090b10,
    roughness: 0.92,
    metalness: 0.02,
  });
  const craterCount = archetype === "massive" ? 6 : archetype === "heavy" ? 4 : 2;
  for (let i = 0; i < craterCount; i += 1) {
    const crater = new THREE.Mesh(
      new THREE.SphereGeometry(size * THREE.MathUtils.randFloat(0.12, 0.22), 10, 10),
      craterMat
    );
    const normal = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    crater.position.copy(normal.multiplyScalar(size * THREE.MathUtils.randFloat(0.5, 0.82)));
    crater.scale.set(1.2, 0.45, 1.2);
    crater.lookAt(crater.position.clone().add(lightDir));
    group.add(crater);
  }

  const detailRockCount = archetype === "massive" ? 8 : archetype === "heavy" ? 5 : 3;
  for (let i = 0; i < detailRockCount; i += 1) {
    const nodule = new THREE.Mesh(
      new THREE.DodecahedronGeometry(size * THREE.MathUtils.randFloat(0.06, 0.13), 0),
      rockMat
    );
    const offset = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    nodule.position.copy(offset.multiplyScalar(size * THREE.MathUtils.randFloat(0.78, 1.02)));
    nodule.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    group.add(nodule);
  }

  const crackPoints = [];
  for (let i = 0; i < 34; i += 1) {
    crackPoints.push(new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(size * 1.5),
      THREE.MathUtils.randFloatSpread(size * 1.5),
      THREE.MathUtils.randFloatSpread(size * 1.5)
    ));
  }

  const crackGeo = new THREE.BufferGeometry().setFromPoints(crackPoints);
  const crackLine = new THREE.Line(
    crackGeo,
    new THREE.LineBasicMaterial({
      color: crackColor,
      transparent: true,
      opacity: mineralRich ? 0.72 : 0.22,
    })
  );
  group.add(crackLine);

  const glow = createGlowSprite(
    crackColor,
    size * (archetype === "massive" ? 2.2 : 1.75),
    mineralRich ? (archetype === "massive" ? 0.11 : archetype === "heavy" ? 0.08 : 0.05) : 0.018
  );
  glow.position.copy(lightDir.clone().multiplyScalar(size * 0.22));
  group.add(glow);

  if (mineralRich) {
    const shardCount = archetype === "massive" ? 6 : archetype === "heavy" ? 4 : 2;
    for (let i = 0; i < shardCount; i += 1) {
      const shard = new THREE.Mesh(
        new THREE.OctahedronGeometry(size * THREE.MathUtils.randFloat(0.045, 0.08), 0),
        new THREE.MeshStandardMaterial({
          color: 0xdbe9ff,
          emissive: crackColor,
          emissiveIntensity: 0.55,
          roughness: 0.18,
          metalness: 0.42,
        })
      );
      const offset = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      shard.position.copy(offset.multiplyScalar(size * THREE.MathUtils.randFloat(0.72, 0.95)));
      shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      group.add(shard);
    }
  }

  return {
    group,
    mesh: primaryMesh,
    crackLine,
    glow,
    archetype,
    size,
    value:
      archetype === "massive"
        ? Math.round(size * 28)
        : archetype === "heavy"
        ? Math.round(size * 18)
        : archetype === "drifter"
          ? Math.round(size * 14)
          : Math.round(size * 10),
    health:
      archetype === "massive"
        ? Math.max(5, Math.round(size * 4))
        : archetype === "heavy"
        ? Math.max(3, Math.round(size * 3))
        : archetype === "drifter"
          ? 1
          : Math.max(1, Math.round(size * 2)),
    nearMissed: false,
    mineralRich,
    velocity: new THREE.Vector3(),
    rotationSpeed: new THREE.Vector3(),
    crackColor,
  };
}

function createBullet(offsetX = 0, options = {}) {
  const {
    color = 0x7cf3ff,
    glowColor = 0x8ff7ff,
    speed = -58,
    scale = 1,
    xVelocity = 0,
    yOffset = 0.08,
    trailColor = glowColor,
    style = "pulse",
    heavy = false,
  } = options;
  const bullet = new THREE.Group();
  bullet.position.copy(player.group.position);
  bullet.position.x += offsetX;
  bullet.position.y += yOffset;
  bullet.position.z -= 1.5;

  const shell = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.11 * scale, 0.78 * scale, 4, 10),
    new THREE.MeshBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: style === "beam" ? 0.46 : 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  shell.rotation.x = Math.PI / 2;
  bullet.add(shell);

  const core = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.05 * scale, 0.58 * scale, 4, 8),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.98,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  core.rotation.x = Math.PI / 2;
  bullet.add(core);
  root.add(bullet);

  const glow = createGlowSprite(glowColor, (style === "beam" ? 0.8 : 0.55) * scale, 0.26);
  glow.position.copy(bullet.position);
  root.add(glow);

  const trail = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02 * scale, 0.08 * scale, 0.95 * scale, 8, 1, true),
    new THREE.MeshBasicMaterial({
      color: trailColor,
      transparent: true,
      opacity: style === "beam" ? 0.46 : 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  trail.rotation.x = Math.PI / 2;
  trail.position.copy(bullet.position);
  trail.position.z += 0.5;
  root.add(trail);

  const trailGlow = createGlowSprite(trailColor, (style === "beam" ? 0.72 : 0.5) * scale, 0.11);
  trailGlow.position.copy(trail.position);
  root.add(trailGlow);
  bullets.push({
    mesh: bullet,
    glow,
    trail,
    trailGlow,
    velocity: new THREE.Vector3(xVelocity, 0, speed),
    style,
    heavy,
    born: state.time,
  });
}

function spawnMuzzleFlash(offsetX = 0, options = {}) {
  const { color = 0x8ff7ff, scale = 1 } = options;
  const flash = createGlowSprite(color, 0.92 * scale, 0.24);
  flash.position.copy(player.group.position);
  flash.position.x += offsetX;
  flash.position.y += 0.1;
  flash.position.z -= 1.46;
  root.add(flash);
  particles.push({
    points: new THREE.Points(
      new THREE.BufferGeometry().setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array([flash.position.x, flash.position.y, flash.position.z]), 3)
      ),
      new THREE.PointsMaterial({
        size: 0.01,
        transparent: true,
        opacity: 0,
        depthWrite: false,
      })
    ),
    flash,
    velocities: [new THREE.Vector3(0, 0, 0)],
    life: 0.12,
    drag: 0,
  });
  root.add(particles[particles.length - 1].points);
}

function fireWeapon() {
  if (state.fireCooldown > 0 || state.mode !== "playing") return;
  let shotsFired = 0;
  if (player.weaponMode === "spread") {
    [-0.36, -0.12, 0.12, 0.36].forEach((offset, idx) => {
      createBullet(offset, {
        color: 0xb18cff,
        glowColor: 0xcfb8ff,
        trailColor: 0x8d7bff,
        xVelocity: (-0.75 + idx * 0.5) * 2.1,
        speed: -54,
        scale: 0.95,
        style: "fan",
      });
      spawnMuzzleFlash(offset, { color: 0xc8b6ff, scale: 0.75 });
    });
    shotsFired = 4;
    player.recoil = Math.max(player.recoil, 0.09);
    player.shotPulse = 0.18;
  } else if (player.weaponMode === "burst") {
    [-0.22, 0, 0.22].forEach((offset) => {
      createBullet(offset, {
        color: 0xffbf68,
        glowColor: 0xffdf9d,
        trailColor: 0xff954d,
        speed: -62,
        scale: 1.05,
        style: "plasma",
      });
      spawnMuzzleFlash(offset, { color: 0xffcf8c, scale: 0.84 });
    });
    shotsFired = 3;
    player.recoil = Math.max(player.recoil, 0.12);
    player.shotPulse = 0.22;
    state.shake = Math.min(1, state.shake + 0.025);
  } else if (player.weaponMode === "lance") {
    createBullet(0, {
      color: 0x84f4ff,
      glowColor: 0xc7fbff,
      trailColor: 0x6dd7ff,
      speed: -74,
      scale: 1.35,
      yOffset: 0.1,
      style: "beam",
      heavy: true,
    });
    spawnMuzzleFlash(0, { color: 0xd7fbff, scale: 1.18 });
    shotsFired = 1;
    player.recoil = Math.max(player.recoil, 0.17);
    player.shotPulse = 0.3;
    state.shake = Math.min(1, state.shake + 0.05);
  } else {
    const spreadLevel = player.weaponLevel > 2 ? [-0.34, 0, 0.34] : player.weaponLevel > 1 ? [-0.28, 0.28] : [0];
    spreadLevel.forEach((offset) => {
      createBullet(offset, {
        style: player.weaponLevel > 2 ? "beam" : "pulse",
        heavy: player.weaponLevel > 2 && offset === 0,
      });
      spawnMuzzleFlash(offset, { color: 0xaef6ff, scale: player.weaponLevel > 1 ? 0.82 : 0.68 });
    });
    shotsFired = spreadLevel.length;
    player.recoil = Math.max(player.recoil, player.weaponLevel > 2 ? 0.11 : 0.075);
    player.shotPulse = player.weaponLevel > 2 ? 0.18 : 0.12;
  }
  state.shotsFired += shotsFired;
  const rateBoost = Math.min(0.05, Math.floor(state.score / 180) * 0.008);
  const baseCooldown =
    player.weaponMode === "spread"
      ? 0.16
      : player.weaponMode === "burst"
        ? 0.11
        : player.weaponMode === "lance"
          ? 0.075
          : player.weaponLevel > 2
            ? 0.082
            : player.weaponLevel > 1
              ? 0.1
              : 0.135;
  state.fireCooldown = Math.max(0.075, baseCooldown - rateBoost);
  audio.playLaser();
}

function spawnPickup(position) {
  if (Math.random() > 0.14) return;
  const level = LEVELS[state.levelIndex] || LEVELS[0];
  const roll = Math.random();
  const type =
    roll > 0.93
      ? level.starter === "lance"
        ? "weapon_lance"
        : level.starter === "burst"
          ? "weapon_burst"
          : "weapon_spread"
      : roll > 0.88
        ? "weapon_lance"
        : roll > 0.82
          ? "weapon_burst"
          : roll > 0.76
            ? "weapon_spread"
          : roll > 0.62
            ? "health"
            : "score";
  const mesh = new THREE.Mesh(
    new THREE.OctahedronGeometry(type === "health" ? 0.34 : type.startsWith("weapon_") ? 0.32 : 0.28, 0),
    new THREE.MeshStandardMaterial({
      color:
        type === "health"
          ? 0xa8ffca
          : type === "weapon_spread"
            ? 0xb8a8ff
            : type === "weapon_burst"
              ? 0xffca7d
              : type === "weapon_lance"
                ? 0x8defff
                : 0x89f2ff,
      emissive:
        type === "health"
          ? 0x1eea67
          : type === "weapon_spread"
            ? 0x7c62ff
            : type === "weapon_burst"
              ? 0xff8b2d
              : type === "weapon_lance"
                ? 0x27cfff
                : 0x36d8ff,
      emissiveIntensity: 1.7,
      roughness: 0.15,
      metalness: 0.45,
    })
  );
  mesh.position.copy(position);
  root.add(mesh);
  const glow = createPickupGlow(type);
  glow.position.copy(position);
  root.add(glow);
  pickups.push({
    mesh,
    glow,
    type,
    value:
      type === "health"
        ? 20
        : type.startsWith("weapon_")
          ? 10 + (level.powerDuration || 10)
          : 24 + Math.floor(state.difficulty * 3),
    velocity: new THREE.Vector3(THREE.MathUtils.randFloatSpread(0.5), 0, 12 + Math.random() * 3),
  });
}

function spawnExplosion(position, color = 0xff8c66, count = state.qualityHigh ? 22 : 12, speed = 12) {
  const material = new THREE.PointsMaterial({
    size: 0.24,
    transparent: true,
    opacity: 0.95,
    color,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];

  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = position.x;
    positions[i * 3 + 1] = position.y;
    positions[i * 3 + 2] = position.z;
    velocities.push(new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(speed),
      THREE.MathUtils.randFloatSpread(speed),
      THREE.MathUtils.randFloatSpread(speed)
    ));
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(geometry, material);
  root.add(points);
  const flash = createGlowSprite(color, state.qualityHigh ? 3.8 : 2.8, 0.28);
  flash.position.copy(position);
  root.add(flash);
  particles.push({
    points,
    flash,
    velocities,
    life: 0.96,
    drag: 2.1,
  });
}

function spawnRockDebris(position, count = state.qualityHigh ? 12 : 7, speed = 6) {
  const material = new THREE.PointsMaterial({
    size: 0.16,
    transparent: true,
    opacity: 0.72,
    color: 0x5e6778,
    depthWrite: false,
  });
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = position.x;
    positions[i * 3 + 1] = position.y;
    positions[i * 3 + 2] = position.z;
    velocities.push(new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(speed),
      THREE.MathUtils.randFloatSpread(speed),
      THREE.MathUtils.randFloatSpread(speed)
    ));
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(geometry, material);
  root.add(points);
  particles.push({
    points,
    flash: null,
    velocities,
    life: 0.52,
    drag: 3.8,
  });
}

function spawnImpactSparks(position, color, count = state.qualityHigh ? 10 : 6, speed = 5) {
  const material = new THREE.PointsMaterial({
    size: 0.18,
    transparent: true,
    opacity: 0.88,
    color,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = [];
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = position.x;
    positions[i * 3 + 1] = position.y;
    positions[i * 3 + 2] = position.z;
    velocities.push(new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(speed),
      THREE.MathUtils.randFloatSpread(speed),
      THREE.MathUtils.randFloatSpread(speed)
    ));
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const points = new THREE.Points(geometry, material);
  root.add(points);
  particles.push({
    points,
    flash: null,
    velocities,
    life: 0.28,
    drag: 4.4,
  });
}

function spawnAsteroidFragments(asteroid, count) {
  const fragmentCount = Math.min(count, state.qualityHigh ? 7 : 4);
  for (let i = 0; i < fragmentCount; i += 1) {
    const size = asteroid.size * THREE.MathUtils.randFloat(0.12, asteroid.archetype === "massive" ? 0.24 : 0.18);
    const geometry = new THREE.DodecahedronGeometry(size, 0);
    const positions = geometry.attributes.position;
    const temp = new THREE.Vector3();
    for (let p = 0; p < positions.count; p += 1) {
      temp.fromBufferAttribute(positions, p);
      temp.multiplyScalar(THREE.MathUtils.randFloat(0.82, 1.18));
      positions.setXYZ(p, temp.x, temp.y, temp.z);
    }
    geometry.computeVertexNormals();
    const material = new THREE.MeshStandardMaterial({
      color: 0x242a33,
      roughness: 0.84,
      metalness: 0.08,
      flatShading: true,
      transparent: true,
      opacity: 0.94,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(asteroid.group.position);
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    root.add(mesh);
    asteroidFragments.push({
      mesh,
      velocity: new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(asteroid.archetype === "massive" ? 4.8 : 3.2),
        THREE.MathUtils.randFloatSpread(asteroid.archetype === "massive" ? 4.8 : 3.2),
        THREE.MathUtils.randFloatSpread(asteroid.archetype === "massive" ? 4.8 : 3.2)
      ),
      spin: new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(2.2),
        THREE.MathUtils.randFloatSpread(2.2),
        THREE.MathUtils.randFloatSpread(2.2)
      ),
      life: THREE.MathUtils.randFloat(0.45, 0.8),
    });
  }
}

function damagePlayer(amount) {
  if (player.invuln > 0 || state.mode !== "playing") return;
  state.health = Math.max(0, state.health - amount);
  state.combo = 0;
  state.comboTimer = 0;
  player.invuln = 0.75;
  state.shake = Math.min(1, state.shake + 0.45);
  state.damageFlash = 0.3;
  audio.playDamage();
  syncUI();
  if (state.health <= 0) {
    endGame();
  }
}

function healPlayer(amount) {
  state.health = Math.min(100, state.health + amount);
  syncUI();
}

function addScore(amount) {
  state.score += amount;
  if (state.score > state.bestScore) {
    state.bestScore = state.score;
    localStorage.setItem(STORAGE_KEYS.bestScore, String(state.bestScore));
  }
  syncUI();
}

function destroyAsteroid(index) {
  const asteroid = asteroids[index];
  spawnExplosion(asteroid.group.position, asteroid.crackColor, state.qualityHigh ? 26 : 14, 11);
  spawnRockDebris(asteroid.group.position, asteroid.archetype === "massive" ? 22 : asteroid.archetype === "heavy" ? 16 : 10, asteroid.archetype === "massive" ? 8 : 6);
  spawnImpactSparks(asteroid.group.position, asteroid.crackColor, asteroid.mineralRich ? 12 : 8, asteroid.mineralRich ? 7 : 5);
  spawnAsteroidFragments(asteroid, asteroid.archetype === "massive" ? 8 : asteroid.archetype === "heavy" ? 6 : 4);
  audio.playExplosion();
  state.combo += 1;
  state.bestCombo = Math.max(state.bestCombo, state.combo);
  state.comboTimer = 1.8;
  state.levelKills += 1;
  state.totalKills += 1;
  const comboBonus = state.combo >= 4 ? Math.min(20, (state.combo - 3) * 2) : 0;
  addScore(asteroid.value + comboBonus);
  if (comboBonus > 0 && state.combo % 3 === 0) showToast(`COMBO +${comboBonus}`);
  state.shake = Math.min(1, state.shake + (asteroid.archetype === "massive" ? 0.32 : asteroid.archetype === "heavy" ? 0.18 : 0.12));
  spawnPickup(asteroid.group.position.clone());
  root.remove(asteroid.group);
  asteroids.splice(index, 1);
}

function collectPickup(index) {
  const pickup = pickups[index];
  state.pickupsCollected += 1;
  if (pickup.type === "health") {
    healPlayer(pickup.value);
    showToast("+HEALTH");
  } else if (pickup.type === "weapon_spread") {
    player.weaponMode = "spread";
    state.weaponModeTimer = pickup.value;
    player.weaponLevel = Math.max(player.weaponLevel, 2);
    state.weaponTimer = Math.max(state.weaponTimer, pickup.value);
    showToast("SPREAD SHOT");
  } else if (pickup.type === "weapon_burst") {
    player.weaponMode = "burst";
    state.weaponModeTimer = pickup.value;
    player.weaponLevel = Math.max(player.weaponLevel, 2);
    state.weaponTimer = Math.max(state.weaponTimer, pickup.value);
    showToast("BURST CANNON");
  } else if (pickup.type === "weapon_lance") {
    player.weaponMode = "lance";
    state.weaponModeTimer = pickup.value;
    player.weaponLevel = Math.max(player.weaponLevel, 2);
    state.weaponTimer = Math.max(state.weaponTimer, pickup.value);
    showToast("LANCE SHOT");
  } else {
    addScore(pickup.value);
    showToast(`+${pickup.value} BONUS`);
  }
  audio.playCollect();
  spawnExplosion(pickup.mesh.position, pickup.type === "health" ? 0x7dffac : 0x7ce9ff, 12, 5);
  root.remove(pickup.mesh);
  root.remove(pickup.glow);
  pickups.splice(index, 1);
}

function removeBullet(index) {
  root.remove(bullets[index].mesh);
  root.remove(bullets[index].glow);
  root.remove(bullets[index].trail);
  if (bullets[index].trailGlow) root.remove(bullets[index].trailGlow);
  bullets.splice(index, 1);
}

function getRunAccuracy() {
  if (state.shotsFired <= 0) return 0;
  return Math.round((state.shotsHit / state.shotsFired) * 100);
}

function getRunRank() {
  const accuracy = getRunAccuracy();
  const clearedLevels = state.runWon ? LEVELS.length : Math.min(state.levelIndex + 1, LEVELS.length);
  const progress = clearedLevels / LEVELS.length;
  let rankScore = 0;
  rankScore += Math.min(45, state.score / 260);
  rankScore += accuracy * 0.28;
  rankScore += progress * 22;
  rankScore += Math.min(10, state.bestCombo);
  rankScore += Math.min(10, state.nearMisses * 1.2);
  if (state.runWon) rankScore += 12;
  if (rankScore >= 90) return "S";
  if (rankScore >= 72) return "A";
  if (rankScore >= 54) return "B";
  if (rankScore >= 36) return "C";
  return "D";
}

function updateRunSummary() {
  const reachedLevel = state.runWon ? LEVELS.length : Math.min(state.levelIndex + 1, LEVELS.length);
  ui.finalScore.textContent = String(state.score);
  ui.finalBest.textContent = String(state.bestScore);
  ui.finalTime.textContent = formatTime(state.time);
  ui.finalRank.textContent = getRunRank();
  ui.finalLevel.textContent = `${reachedLevel} / ${LEVELS.length}`;
  ui.finalAccuracy.textContent = `${getRunAccuracy()}%`;
  ui.finalPickups.textContent = String(state.pickupsCollected);
  ui.finalDodges.textContent = String(state.nearMisses);
  ui.finalCombo.textContent = `x${state.bestCombo}`;
  ui.finalHits.textContent = String(state.shotsHit);
}

function removeParticle(index) {
  root.remove(particles[index].points);
  if (particles[index].flash) root.remove(particles[index].flash);
  particles[index].points.geometry.dispose();
  particles[index].points.material.dispose();
  particles.splice(index, 1);
}

function updateGame(dt) {
  state.time += dt;
  state.difficulty = 1 + state.time * 0.05;
  state.spawnTimer -= dt;
  state.levelIntroTimer = Math.max(0, state.levelIntroTimer - dt);
  state.fireCooldown = Math.max(0, state.fireCooldown - dt);
  state.comboTimer = Math.max(0, state.comboTimer - dt);
  state.dodgeTimer = Math.max(0, state.dodgeTimer - dt);
  state.exhaustTimer = Math.max(0, state.exhaustTimer - dt);
  state.weaponTimer = Math.max(0, state.weaponTimer - dt);
  state.weaponModeTimer = Math.max(0, state.weaponModeTimer - dt);
  player.invuln = Math.max(0, player.invuln - dt);
  player.recoil = Math.max(0, player.recoil - dt * 0.85);
  player.shotPulse = Math.max(0, player.shotPulse - dt * 1.6);
  state.damageFlash = Math.max(0, state.damageFlash - dt);
  state.shake = Math.max(0, state.shake - dt * 1.7);
  state.toastTimer = Math.max(0, state.toastTimer - dt);

  if (state.toastTimer <= 0) ui.toast.classList.remove("visible");
  if (state.comboTimer <= 0) state.combo = 0;
  if (state.weaponTimer <= 0) player.weaponLevel = 1;
  if (state.weaponModeTimer <= 0) player.weaponMode = "normal";

  updatePlayer(dt);
  updateStars(dt);
  updateBullets(dt);
  updateAsteroids(dt);
  updatePickups(dt);
  updateParticles(dt);
  updateAsteroidFragments(dt);
  handleCollisions();

  const level = LEVELS[state.levelIndex];
  if (level && state.levelKills >= level.target) {
    completeLevel();
    return;
  }

  if (state.levelIntroTimer <= 0 && state.spawnTimer <= 0) {
    const levelBase = level?.spawnBase ?? 3;
    const jitter = level?.spawnJitter ?? 1;
    spawnAsteroidCluster(levelBase + Math.floor(Math.random() * (jitter + 1)));
    state.spawnTimer = Math.max(0.92, (level?.spawnDelay ?? 1.9) - state.difficulty * 0.018);
  }

  if ((input.fire || state.fireHold) && state.mode === "playing") {
    fireWeapon();
  }

  syncUI();
}

function updatePlayer(dt) {
  const moveX = (input.right ? 1 : 0) - (input.left ? 1 : 0) + input.moveVector.x;
  const moveY = (input.up ? 1 : 0) - (input.down ? 1 : 0) + input.moveVector.y;
  const desiredVelocity = new THREE.Vector3(moveX, moveY, 0);
  if (desiredVelocity.lengthSq() > 1) desiredVelocity.normalize();
  desiredVelocity.multiplyScalar(player.speed);
  const accelBlend = 1 - Math.exp(-dt * 8.5);
  player.velocity.lerp(desiredVelocity, accelBlend);
  if (desiredVelocity.lengthSq() < 0.001) {
    player.velocity.multiplyScalar(Math.exp(-dt * 4.8));
  }
  player.position.addScaledVector(player.velocity, dt);
  player.position.x = THREE.MathUtils.clamp(player.position.x, -player.moveBounds.x, player.moveBounds.x);
  player.position.y = THREE.MathUtils.clamp(player.position.y, -player.moveBounds.y, player.moveBounds.y);
  player.targetPosition.copy(player.position);
  player.bob += dt * 4.4;
  player.group.position.copy(player.position);
  const speedRatio = Math.min(1, player.velocity.length() / player.speed);
  player.group.position.y += Math.sin(player.bob) * (0.035 + speedRatio * 0.03);
  player.group.position.z += player.recoil;

  player.group.rotation.z = THREE.MathUtils.lerp(player.group.rotation.z, -desiredVelocity.x / player.speed * 0.42, 1 - Math.exp(-dt * 10));
  player.group.rotation.x = THREE.MathUtils.lerp(player.group.rotation.x, desiredVelocity.y / player.speed * 0.16 - player.recoil * 0.6, 1 - Math.exp(-dt * 8));
  player.group.rotation.y = THREE.MathUtils.lerp(player.group.rotation.y, -desiredVelocity.x / player.speed * 0.22, 1 - Math.exp(-dt * 8));

  const thrust = Math.min(1, speedRatio * 0.82 + (state.fireHold || input.fire ? 0.28 : 0.12) + player.shotPulse * 0.65);
  const pulse = 0.82 + Math.sin(state.time * 18) * 0.08 + thrust * 0.38;
  const coreTrails = engineTrail.userData.cores || [];
  const trailHalos = engineTrail.userData.halos || [];
  coreTrails.forEach((trail, index) => {
    trail.scale.set(
      0.95 + thrust * 0.28,
      (index === 1 ? 1.95 : 1.72) + thrust * 0.82,
      0.95 + thrust * 0.28
    );
    trail.material.opacity = 0.42 + Math.sin(state.time * 20 + index) * 0.05 + thrust * 0.1;
  });
  trailHalos.forEach((halo, index) => {
    halo.scale.setScalar((index === 1 ? 1.14 : 0.96) + thrust * 0.18);
    halo.material.opacity = 0.08 + thrust * 0.08 + Math.sin(state.time * 12 + index) * 0.02;
  });
  lights.playerGlow.intensity = 7.8 + Math.sin(state.time * 10) * 1.1 + thrust * 3 + player.shotPulse * 2.2;
  lights.playerGlow.position.set(player.group.position.x, player.group.position.y + 0.3, player.group.position.z + 3.4);

  const shipFx = player.group.userData || {};
  shipFx.nozzleGlows?.forEach((glow, index) => {
    glow.scale.setScalar((index === 1 ? 1.2 : 0.95) + thrust * 0.46);
    glow.material.opacity = 0.2 + thrust * 0.18 + Math.sin(state.time * 18 + index) * 0.03;
  });
  shipFx.ventStrips?.forEach((vent, index) => {
    vent.material.emissiveIntensity = 0.9 + thrust * 0.6 + Math.sin(state.time * 12 + index) * 0.08;
  });
  if (shipFx.canopyGlow) shipFx.canopyGlow.material.opacity = 0.08 + player.shotPulse * 0.08 + speedRatio * 0.04;
  if (shipFx.cockpitHalo) shipFx.cockpitHalo.material.opacity = 0.04 + speedRatio * 0.03 + player.shotPulse * 0.08;
  if (shipFx.tailRim) shipFx.tailRim.material.opacity = 0.04 + thrust * 0.05;

  if (state.mode === "playing" && state.exhaustTimer <= 0 && (speedRatio > 0.14 || state.fireHold || input.fire)) {
    const exhaustColor =
      player.weaponMode === "burst"
        ? 0xffc86c
        : player.weaponMode === "spread"
          ? 0xb699ff
          : 0x7ce9ff;
    for (const x of [-0.58, 0, 0.58]) {
      const worldPos = player.group.localToWorld(new THREE.Vector3(x, -0.12, 1.95));
      spawnEngineExhaust(
        worldPos,
        new THREE.Vector3(player.velocity.x * 0.05, player.velocity.y * 0.04, 6.6 + thrust * 3.2),
        exhaustColor
      );
    }
    state.exhaustTimer = state.qualityHigh ? 0.05 : 0.075;
  }
}

function updateStars(dt) {
  [starFieldFar, starFieldMid, starFieldNear].forEach((field, idx) => {
    const positions = field.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] += dt * (idx === 0 ? 4.8 : idx === 1 ? 8.6 : 13.2);
      if (positions[i + 2] > 20) {
        positions[i + 2] = -320;
        positions[i] = THREE.MathUtils.randFloatSpread(idx === 0 ? 220 : idx === 1 ? 160 : 110);
        positions[i + 1] = THREE.MathUtils.randFloatSpread(idx === 0 ? 110 : idx === 1 ? 96 : 70);
      }
    }
    field.geometry.attributes.position.needsUpdate = true;
    field.material.opacity = idx === 0 ? 0.56 : idx === 1 ? 0.78 : 0.98;
  });

  backgroundAsteroids.forEach((mesh) => {
    mesh.position.z += dt * mesh.userData.speed;
    mesh.rotation.x += mesh.userData.spin.x * dt;
    mesh.rotation.y += mesh.userData.spin.y * dt;
    mesh.rotation.z += mesh.userData.spin.z * dt;
    if (mesh.position.z > -18) {
      mesh.position.z = -220 - Math.random() * 140;
      mesh.position.x = THREE.MathUtils.randFloatSpread(120);
      mesh.position.y = THREE.MathUtils.randFloat(-10.5, 8.8);
    }
  });

  foregroundAsteroids.forEach((mesh) => {
    mesh.position.z += dt * mesh.userData.speed;
    mesh.rotation.x += mesh.userData.spin.x * dt;
    mesh.rotation.y += mesh.userData.spin.y * dt;
    mesh.rotation.z += mesh.userData.spin.z * dt;
    mesh.position.x += Math.sin(state.time * 0.8 + mesh.id) * dt * 0.08;
    if (mesh.position.z > 9) {
      mesh.position.z = -36 - Math.random() * 18;
      mesh.position.x = THREE.MathUtils.randFloatSpread(24);
      mesh.position.y = THREE.MathUtils.randFloat(-6.2, 6.8);
    }
  });

  nebulaPlanes.forEach((cloud, idx) => {
    cloud.position.z += dt * (2.4 + idx * 0.12);
    cloud.material.rotation += dt * 0.012 * (idx % 2 === 0 ? 1 : -1);
    cloud.material.opacity = 0.16 + Math.sin(state.time * 0.22 + idx) * 0.03;
    if (cloud.position.z > 15) {
      cloud.position.z = -210;
      cloud.position.x = THREE.MathUtils.randFloatSpread(50);
      cloud.position.y = THREE.MathUtils.randFloat(-8, 8);
    }
  });

  const speedPositions = speedLines.geometry.attributes.position.array;
  for (let i = 0; i < speedPositions.length; i += 6) {
    const speed = 24 + state.difficulty * 2.2;
    speedPositions[i + 2] += dt * speed;
    speedPositions[i + 5] += dt * speed;
    if (speedPositions[i + 2] > 16) {
      const x = THREE.MathUtils.randFloatSpread(18);
      const y = THREE.MathUtils.randFloat(-7, 5.5);
      const z = -180;
      const len = THREE.MathUtils.randFloat(1.6, 3.6);
      speedPositions[i] = x;
      speedPositions[i + 1] = y;
      speedPositions[i + 2] = z;
      speedPositions[i + 3] = x;
      speedPositions[i + 4] = y;
      speedPositions[i + 5] = z + len;
    }
  }
  speedLines.geometry.attributes.position.needsUpdate = true;
  speedLines.material.opacity = state.mode === "playing" ? 0.025 + Math.min(0.06, Math.abs(player.group.rotation.z) * 0.16) : 0.02;
}

function updateBullets(dt) {
  for (let i = bullets.length - 1; i >= 0; i -= 1) {
    const bullet = bullets[i];
    bullet.mesh.position.addScaledVector(bullet.velocity, dt);
    const age = state.time - bullet.born;
    const pulse = bullet.style === "beam" ? 1.1 : bullet.style === "plasma" ? 1.06 : 1.02;
    bullet.mesh.scale.setScalar(pulse + Math.sin(state.time * 35 + i) * 0.05);
    bullet.glow.position.copy(bullet.mesh.position);
    bullet.glow.material.opacity = (bullet.style === "beam" ? 0.22 : 0.15) + Math.sin(state.time * 24 + i) * 0.03;
    bullet.trail.position.copy(bullet.mesh.position);
    bullet.trail.position.z += bullet.style === "beam" ? 0.62 : 0.48;
    bullet.trail.scale.y = bullet.style === "beam" ? 1.3 : bullet.style === "plasma" ? 1.1 : 1;
    bullet.trail.material.opacity = (bullet.style === "beam" ? 0.22 : 0.13) + Math.sin(state.time * 18 + i) * 0.03;
    if (bullet.trailGlow) {
      bullet.trailGlow.position.copy(bullet.trail.position);
      bullet.trailGlow.material.opacity = 0.06 + Math.sin(state.time * 20 + i) * 0.02 + Math.max(0, 0.08 - age * 0.02);
    }
    if (bullet.mesh.position.z < -100) {
      removeBullet(i);
    }
  }
}

function updateAsteroids(dt) {
  for (let i = asteroids.length - 1; i >= 0; i -= 1) {
    const asteroid = asteroids[i];
    asteroid.group.position.addScaledVector(asteroid.velocity, dt);
    asteroid.hitFlash = Math.max(0, (asteroid.hitFlash || 0) - dt * 5.4);
    if (asteroid.archetype === "drifter") {
      asteroid.group.position.x += Math.sin(state.time * 1.6 + i) * dt * 1.15;
    }
    asteroid.group.rotation.x += asteroid.rotationSpeed.x * dt;
    asteroid.group.rotation.y += asteroid.rotationSpeed.y * dt;
    asteroid.group.rotation.z += asteroid.rotationSpeed.z * dt;
    asteroid.crackLine.material.opacity = 0.52 + Math.sin(state.time * 4 + i) * 0.12 + asteroid.hitFlash * 0.35;
    asteroid.glow.material.opacity =
      0.03 +
      Math.sin(state.time * 5 + i) * 0.025 +
      asteroid.hitFlash * 0.2 +
      (asteroid.archetype === "massive" ? 0.05 : asteroid.archetype === "heavy" ? 0.03 : 0);
    asteroid.glow.scale.setScalar(1 + asteroid.hitFlash * 0.2);
    if (asteroid.mesh?.material) {
      asteroid.mesh.material.emissiveIntensity = 0.12 + asteroid.hitFlash * 0.7;
    }
    if (!asteroid.nearMissed && asteroid.group.position.z > -0.45 && asteroid.group.position.z < 1.4) {
      const planarDistance = Math.hypot(
        asteroid.group.position.x - player.group.position.x,
        asteroid.group.position.y - player.group.position.y
      );
      const safeInner = asteroid.size + 0.42;
      const safeOuter = asteroid.size + 1.18;
      if (planarDistance > safeInner && planarDistance < safeOuter) {
        asteroid.nearMissed = true;
        state.dodgeTimer = 1.6;
        state.nearMisses += 1;
        state.combo = Math.max(state.combo, 1);
        state.comboTimer = Math.max(state.comboTimer, 1.3);
        player.weaponLevel = Math.max(player.weaponLevel, Math.min(5, 2 + Math.floor(state.levelIndex / 4)));
        state.weaponTimer = Math.max(state.weaponTimer, 2.8);
        addScore(10 + state.levelIndex * 2);
        showToast("NEAR MISS");
      }
    }
    if (asteroid.group.position.z > 18) {
      root.remove(asteroid.group);
      asteroids.splice(i, 1);
    }
  }
}

function updatePickups(dt) {
  for (let i = pickups.length - 1; i >= 0; i -= 1) {
    const pickup = pickups[i];
    pickup.mesh.position.addScaledVector(pickup.velocity, dt);
    pickup.mesh.rotation.x += dt * 1.2;
    pickup.mesh.rotation.y += dt * 1.8;
    pickup.mesh.position.y += Math.sin(state.time * 5 + i) * dt * 0.25;
    pickup.glow.position.copy(pickup.mesh.position);
    pickup.glow.material.opacity = 0.1 + Math.sin(state.time * 6 + i) * 0.04;
    if (pickup.mesh.position.z > 16) {
      root.remove(pickup.mesh);
      root.remove(pickup.glow);
      pickups.splice(i, 1);
    }
  }
}

function applyLevelTheme(index) {
  const level = LEVELS[index] || LEVELS[0];
  const theme = level.theme;
  scene.background = createSpaceBackdropTexture(theme);
  scene.fog.color.setHex(theme.fog);
  scene.fog.density = 0.0046 + index * 0.00012;
  riftGlow.material.color.setHex(theme.rift);
  nebulaPlanes.forEach((cloud, i) => {
    cloud.material.map = createNebulaTexture(i, theme);
    cloud.material.color.setHSL(theme.nebulaHue + (i % 3) * 0.03, 0.85, 0.7);
    cloud.material.needsUpdate = true;
  });
}

function starterLabel(type) {
  return type === "burst" ? "BURST CANNON" : type === "lance" ? "LANCE SHOT" : "SPREAD SHOT";
}

function grantLevelPower(level) {
  player.weaponMode = level.starter === "burst" ? "burst" : level.starter === "lance" ? "lance" : "spread";
  player.weaponLevel = level.powerLevel || 2;
  state.weaponModeTimer = level.powerDuration || 10;
  state.weaponTimer = level.powerDuration || 10;
}

function beginLevel(index) {
  state.levelIndex = index;
  state.levelKills = 0;
  state.levelIntroTimer = 1.1;
  state.spawnTimer = 0.9;
  const level = LEVELS[index];
  applyLevelTheme(index);
  grantLevelPower(level);
  showToast(`LEVEL ${index + 1}: ${level.name}  •  ${starterLabel(level.starter)}`);
}

function completeLevel() {
  if (state.levelIndex >= LEVELS.length - 1) {
    winRun();
    return;
  }
  clearAsteroidsOnly();
  state.levelIndex += 1;
  state.levelKills = 0;
  state.levelIntroTimer = 1.6;
  state.spawnTimer = 1.2;
  const level = LEVELS[state.levelIndex];
  applyLevelTheme(state.levelIndex);
  grantLevelPower(level);
  healPlayer(10);
  showToast(`LEVEL ${state.levelIndex + 1}: ${level.name}  •  ${starterLabel(level.starter)}`);
}

function clearAsteroidsOnly() {
  asteroids.splice(0).forEach((asteroid) => root.remove(asteroid.group));
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const particle = particles[i];
    particle.life -= dt;
    const positions = particle.points.geometry.attributes.position.array;
    particle.velocities.forEach((velocity, idx) => {
      velocity.multiplyScalar(Math.max(0, 1 - particle.drag * dt * 0.15));
      positions[idx * 3] += velocity.x * dt;
      positions[idx * 3 + 1] += velocity.y * dt;
      positions[idx * 3 + 2] += velocity.z * dt;
    });
    particle.points.geometry.attributes.position.needsUpdate = true;
    particle.points.material.opacity = Math.max(0, particle.life * 1.2);
    if (particle.flash) {
      particle.flash.material.opacity = Math.max(0, particle.life * 0.55);
      particle.flash.scale.setScalar((1.05 - particle.life) * 3.2);
    }
    if (particle.life <= 0) {
      removeParticle(i);
    }
  }
}

function updateAsteroidFragments(dt) {
  for (let i = asteroidFragments.length - 1; i >= 0; i -= 1) {
    const fragment = asteroidFragments[i];
    fragment.life -= dt;
    fragment.mesh.position.addScaledVector(fragment.velocity, dt);
    fragment.velocity.multiplyScalar(Math.max(0, 1 - dt * 2.2));
    fragment.mesh.rotation.x += fragment.spin.x * dt;
    fragment.mesh.rotation.y += fragment.spin.y * dt;
    fragment.mesh.rotation.z += fragment.spin.z * dt;
    fragment.mesh.material.opacity = Math.max(0, fragment.life * 1.15);
    if (fragment.life <= 0) {
      root.remove(fragment.mesh);
      fragment.mesh.geometry.dispose();
      fragment.mesh.material.dispose();
      asteroidFragments.splice(i, 1);
    }
  }
}

function handleCollisions() {
  for (let a = asteroids.length - 1; a >= 0; a -= 1) {
    const asteroid = asteroids[a];
    const asteroidPos = asteroid.group.position;

    for (let b = bullets.length - 1; b >= 0; b -= 1) {
      const bullet = bullets[b];
      if (bullet.mesh.position.distanceToSquared(asteroidPos) < (asteroid.size * 0.9 + 0.22) ** 2) {
        asteroid.health -= 1;
        asteroid.hitFlash = Math.max(asteroid.hitFlash || 0, bullet.heavy ? 1 : 0.65);
        state.shotsHit += 1;
        removeBullet(b);
        spawnExplosion(bullet.mesh.position.clone(), asteroid.crackColor, 8, 4);
        spawnRockDebris(bullet.mesh.position.clone(), state.qualityHigh ? 5 : 3, 2.6);
        spawnImpactSparks(bullet.mesh.position.clone(), asteroid.crackColor, bullet.heavy ? 10 : 6, bullet.heavy ? 7 : 4.5);
        state.shake = Math.min(1, state.shake + (bullet.heavy ? 0.04 : 0.012));
        if (asteroid.health <= 0) {
          destroyAsteroid(a);
        }
        break;
      }
    }

    if (a >= asteroids.length) continue;

    const dx = Math.abs(player.group.position.x - asteroid.group.position.x);
    const dy = Math.abs(player.group.position.y - asteroid.group.position.y);
    const dz = Math.abs(player.group.position.z - asteroid.group.position.z);
    const hitRadius = asteroid.size + 0.42;
    const inHitWindow = dx < hitRadius && dy < hitRadius * 0.9 && dz < asteroid.size + 0.72;
    if (inHitWindow && player.group.position.distanceToSquared(asteroid.group.position) < hitRadius ** 2) {
      destroyAsteroid(a);
      damagePlayer(18);
    }
  }

  for (let i = pickups.length - 1; i >= 0; i -= 1) {
    if (pickups[i].mesh.position.distanceToSquared(player.group.position) < 1.2) {
      collectPickup(i);
    }
  }
}

function updateCamera(dt) {
  const desired = new THREE.Vector3(
    player.group.position.x * 0.23,
    1.64 + player.group.position.y * 0.12,
    player.group.position.z + 11.05
  );
  const shakeAmount = state.shake * 0.22;
  desired.x += (Math.random() - 0.5) * shakeAmount;
  desired.y += (Math.random() - 0.5) * shakeAmount;
  desired.z += (Math.random() - 0.5) * shakeAmount;
  camera.position.lerp(desired, 1 - Math.exp(-dt * 6));

  const lookAt = new THREE.Vector3(
    player.group.position.x * 0.28,
    player.group.position.y * 0.06,
    player.group.position.z - 19
  );
  camera.lookAt(lookAt);
  camera.rotation.z += player.group.rotation.z * 0.05;
}

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(0.033, clock.getDelta());

  if (state.mode === "playing") {
    updateGame(dt);
  } else {
    updateStars(dt * 0.35);
  }

  updateCamera(dt);
  renderer.render(scene, camera);
}

function startGame() {
  clearWorld();
  state.mode = "playing";
  state.time = 0;
  state.score = 0;
  state.health = 100;
  state.difficulty = 1;
  state.spawnTimer = 1.3;
  state.fireCooldown = 0;
  state.shake = 0;
  state.damageFlash = 0;
  state.combo = 0;
  state.comboTimer = 0;
  state.dodgeTimer = 0;
  state.exhaustTimer = 0;
  state.weaponTimer = 0;
  state.weaponModeTimer = 0;
  state.levelIndex = 0;
  state.levelKills = 0;
  state.totalKills = 0;
  state.levelIntroTimer = 0;
  state.shotsFired = 0;
  state.shotsHit = 0;
  state.pickupsCollected = 0;
  state.nearMisses = 0;
  state.bestCombo = 0;
  state.runWon = false;
  player.position.set(0, 0, 0);
  player.targetPosition.set(0, 0, 0);
  player.group.position.set(0, 0, 0);
  player.bob = 0;
  player.weaponLevel = 1;
  player.weaponMode = "normal";
  player.invuln = 0;
  player.velocity.set(0, 0, 0);
  player.recoil = 0;
  player.shotPulse = 0;
  seedOpeningField(18);
  beginLevel(0);
  syncUI();
  hideAllOverlays();
  resumeAudioContext();
}

function pauseGame() {
  if (state.mode !== "playing") return;
  state.mode = "paused";
  showOverlay("pause");
}

function resumeGame() {
  if (state.mode !== "paused") return;
  state.mode = "playing";
  hideAllOverlays();
  resumeAudioContext();
}

function endGame() {
  state.mode = "gameover";
  state.runWon = false;
  audio.playGameOver();
  updateRunSummary();
  ui.gameoverEyebrow.textContent = "MISSION ENDED";
  ui.gameoverTitle.textContent = "Game Over";
  showOverlay("gameover");
}

function winRun() {
  state.mode = "gameover";
  state.runWon = true;
  updateRunSummary();
  ui.gameoverEyebrow.textContent = `${LEVELS.length} LEVELS CLEARED`;
  ui.gameoverTitle.textContent = "You Win";
  showOverlay("gameover");
}

function returnToMenu() {
  clearWorld();
  state.mode = "menu";
  showOverlay("menu");
  syncUI();
}

function clearWorld() {
  asteroids.splice(0).forEach((asteroid) => root.remove(asteroid.group));
  asteroidFragments.splice(0).forEach((fragment) => {
    root.remove(fragment.mesh);
    fragment.mesh.geometry.dispose();
    fragment.mesh.material.dispose();
  });
  bullets.splice(0).forEach((bullet) => root.remove(bullet.mesh));
  pickups.splice(0).forEach((pickup) => root.remove(pickup.mesh));
  while (particles.length) {
    removeParticle(particles.length - 1);
  }
}

function wireButtons() {
  const openSettings = () => {
    state.settingsReturn = state.mode === "playing" ? "resume" : state.mode === "paused" ? "pause" : "menu";
    if (state.mode === "playing") {
      state.mode = "paused";
    }
    showOverlay("settings");
  };
  const showSoon = (label) => showToast(`${label} COMING SOON`);

  document.getElementById("start-button").addEventListener("click", startGame);
  document.getElementById("resume-button").addEventListener("click", resumeGame);
  document.getElementById("restart-button").addEventListener("click", startGame);
  document.getElementById("pause-restart-button").addEventListener("click", startGame);
  document.getElementById("return-menu-button").addEventListener("click", returnToMenu);
  document.getElementById("pause-button").addEventListener("click", () => {
    if (state.mode === "playing") pauseGame();
  });
  document.getElementById("settings-button").addEventListener("click", openSettings);
  document.getElementById("menu-settings-button").addEventListener("click", openSettings);
  document.getElementById("menu-settings-shortcut").addEventListener("click", openSettings);
  document.getElementById("pause-settings-button").addEventListener("click", () => {
    state.settingsReturn = "pause";
    showOverlay("settings");
  });
  document.getElementById("close-settings-button").addEventListener("click", () => {
    if (state.settingsReturn === "resume") {
      resumeGame();
    } else if (state.settingsReturn === "pause") {
      showOverlay("pause");
    } else {
      showOverlay("menu");
    }
  });

  document.getElementById("sound-toggle").addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem(STORAGE_KEYS.soundEnabled, String(state.soundEnabled));
    syncUI();
  });

  document.getElementById("quality-toggle").addEventListener("click", () => {
    state.qualityHigh = !state.qualityHigh;
    localStorage.setItem(STORAGE_KEYS.qualityHigh, String(state.qualityHigh));
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, state.qualityHigh ? 2 : 1.3));
    syncUI();
  });

  document.getElementById("menu-audio-button").addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem(STORAGE_KEYS.soundEnabled, String(state.soundEnabled));
    syncUI();
  });

  document.getElementById("menu-controls-button").addEventListener("click", () => {
    showToast("WASD OR ARROWS TO DRIFT / SPACE TO FIRE / TOUCH READY");
  });
  document.getElementById("menu-credits-button").addEventListener("click", () => {
    showToast("SPACE DRIFTER / UI CONCEPT / THREE.JS ARCADE SHOOTER");
  });

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("pointerenter", () => audio.playUiHover());
    button.addEventListener("click", () => audio.playUiClick());
  });
}

function wireKeyboard() {
  window.addEventListener("keydown", (event) => {
    if (event.repeat) return;
    setKeyState(event.code, true);
    if (event.code === "Space") event.preventDefault();
    if (event.code === "Escape") {
      if (state.mode === "playing") pauseGame();
      else if (state.mode === "paused") resumeGame();
    }
  });

  window.addEventListener("keyup", (event) => {
    setKeyState(event.code, false);
  });
}

function setKeyState(code, pressed) {
  switch (code) {
    case "KeyA":
    case "ArrowLeft":
      input.left = pressed;
      break;
    case "KeyD":
    case "ArrowRight":
      input.right = pressed;
      break;
    case "KeyW":
    case "ArrowUp":
      input.up = pressed;
      break;
    case "KeyS":
    case "ArrowDown":
      input.down = pressed;
      break;
    case "Space":
      input.fire = pressed;
      if (pressed) fireWeapon();
      break;
    default:
      break;
  }
}

function wireTouchControls() {
  const shell = document.getElementById("joystick-shell");
  const knob = document.getElementById("joystick-knob");
  const fireButton = document.getElementById("fire-button");
  let activeId = null;

  const updateJoystick = (clientX, clientY) => {
    const rect = shell.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const radius = rect.width * 0.28;
    const vec = new THREE.Vector2(dx, dy);
    if (vec.length() > radius) vec.setLength(radius);
    input.moveVector.set(vec.x / radius, -vec.y / radius);
    knob.style.transform = `translate(${vec.x}px, ${vec.y}px)`;
  };

  const resetJoystick = () => {
    input.moveVector.set(0, 0);
    input.joystickActive = false;
    knob.style.transform = "translate(0px, 0px)";
  };

  shell.addEventListener("pointerdown", (event) => {
    activeId = event.pointerId;
    input.joystickActive = true;
    shell.setPointerCapture(event.pointerId);
    updateJoystick(event.clientX, event.clientY);
  });
  shell.addEventListener("pointermove", (event) => {
    if (event.pointerId === activeId) updateJoystick(event.clientX, event.clientY);
  });
  shell.addEventListener("pointerup", (event) => {
    if (event.pointerId === activeId) {
      activeId = null;
      resetJoystick();
    }
  });
  shell.addEventListener("pointercancel", resetJoystick);

  fireButton.addEventListener("pointerdown", () => {
    state.fireHold = true;
    fireWeapon();
  });
  const releaseFire = () => {
    state.fireHold = false;
  };
  fireButton.addEventListener("pointerup", releaseFire);
  fireButton.addEventListener("pointercancel", releaseFire);
  fireButton.addEventListener("pointerleave", releaseFire);
}

function syncUI() {
  ui.healthFill.style.transform = `scaleX(${state.health / 100})`;
  ui.healthFill.style.filter = state.health < 35 ? "saturate(1.1) brightness(1.05) hue-rotate(-35deg)" : "";
  const shieldLevel = Math.min(1, Math.max(player.invuln / 0.75, state.dodgeTimer / 1.6, state.weaponTimer / 18));
  const abilityLevel = Math.min(1, state.combo * 0.14 + Math.max(state.weaponTimer / 18, state.dodgeTimer / 1.6) * 0.6);
  ui.shieldFill.style.transform = `scaleX(${shieldLevel})`;
  ui.abilityFill.style.transform = `scaleX(${abilityLevel})`;
  ui.damageFlash.style.opacity = String(state.damageFlash * 0.95);
  ui.timer.textContent = formatTime(state.time);
  const level = LEVELS[state.levelIndex] || LEVELS[LEVELS.length - 1];
  ui.levelLabel.textContent = `W${Math.min(state.levelIndex + 1, LEVELS.length)}`;
  ui.levelObjective.textContent = `${Math.min(state.levelKills, level.target)} / ${level.target}`;
  ui.score.textContent = String(state.score);
  ui.bestScore.textContent = String(state.bestScore);
  ui.weaponState.textContent =
    player.weaponMode === "burst"
      ? "BURST"
      : player.weaponMode === "spread"
        ? "SPREAD"
        : player.weaponMode === "lance"
          ? "LANCE"
          : "RIFT";
  ui.powerState.textContent = `LV ${player.weaponLevel}`;
  ui.comboState.textContent = `x${state.combo}`;
  ui.menuBest.textContent = String(state.bestScore);
  ui.menuSoundState.textContent = state.soundEnabled ? "On" : "Off";
  ui.soundToggleLabel.textContent = state.soundEnabled ? "On" : "Off";
  ui.qualityToggleLabel.textContent = state.qualityHigh ? "High" : "Boost Off";
  document.getElementById("final-best-score").textContent = String(state.bestScore);
  if (ui.radarBlips) {
    const blips = asteroids
      .slice(0, 10)
      .map((asteroid) => {
        const x = 50 + THREE.MathUtils.clamp(asteroid.group.position.x / 8, -1, 1) * 34;
        const y = 50 + THREE.MathUtils.clamp(asteroid.group.position.z / 90, -1, 1) * 34;
        return `<span class="radar-blip" style="left:${x}%;top:${y}%;"></span>`;
      })
      .join("");
    ui.radarBlips.innerHTML = blips;
  }
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function showOverlay(name) {
  hideAllOverlays();
  if (ui.overlays[name]) ui.overlays[name].classList.add("active");
}

function hideAllOverlays() {
  Object.values(ui.overlays).forEach((overlay) => overlay.classList.remove("active"));
}

function showToast(message) {
  ui.toast.textContent = message;
  ui.toast.classList.add("visible");
  state.toastTimer = 1.2;
}

function resumeAudioContext() {
  if (audio.context && audio.context.state === "suspended") {
    audio.context.resume().catch(() => {});
  }
}

function setupAudio() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const context = AudioCtx ? new AudioCtx() : null;

  const playTone = (type, frequency, duration, volume, curve = "exp", target = context?.destination) => {
    if (!context || !state.soundEnabled) return;
    const now = context.currentTime;
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(volume, now);
    if (curve === "exp") {
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    } else {
      gain.gain.linearRampToValueAtTime(0.0001, now + duration);
    }
    osc.connect(gain);
    gain.connect(target);
    osc.start(now);
    osc.stop(now + duration);
  };

  const playNoiseBurst = (duration, volume, filterFreq) => {
    if (!context || !state.soundEnabled) return;
    const buffer = context.createBuffer(1, context.sampleRate * duration, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    }
    const source = context.createBufferSource();
    source.buffer = buffer;
    const filter = context.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = filterFreq;
    const gain = context.createGain();
    gain.gain.value = volume;
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
    source.connect(filter);
    filter.connect(gain);
    gain.connect(context.destination);
    source.start();
  };

  return {
    context,
    playLaser() {
      playTone("sawtooth", 520, 0.09, 0.04);
      playTone("triangle", 890, 0.06, 0.025);
    },
    playExplosion() {
      playNoiseBurst(0.28, 0.13, 1100);
      playTone("triangle", 150, 0.22, 0.05);
    },
    playCollect() {
      playTone("sine", 780, 0.08, 0.035);
      playTone("sine", 1160, 0.12, 0.028, "linear");
    },
    playDamage() {
      playNoiseBurst(0.18, 0.08, 650);
      playTone("square", 180, 0.14, 0.05, "linear");
    },
    playGameOver() {
      playTone("triangle", 340, 0.18, 0.05, "linear");
      setTimeout(() => playTone("triangle", 220, 0.24, 0.05, "linear"), 120);
      setTimeout(() => playTone("triangle", 140, 0.32, 0.05, "linear"), 240);
    },
    playUiHover() {
      playTone("sine", 880, 0.04, 0.012, "linear");
    },
    playUiClick() {
      playTone("triangle", 620, 0.06, 0.02, "linear");
      playTone("sine", 980, 0.08, 0.012, "linear");
    },
  };
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, state.qualityHigh ? 2 : 1.3));
});
