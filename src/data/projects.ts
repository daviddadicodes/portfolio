import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "connect4",
    title: "Connect 4",
    year: "2026",
    tagline: "A browser Connect 4 game with AI opponents and online room matches.",
    summary:
      "A browser Connect 4 game with local play, three AI modes, online rooms, and score tracking.",
    description:
      "This project combines gameplay logic, browser audio, persistence, and real-time syncing in one web game.",
    repo: "https://github.com/daviddadicodes/connect4",
    demo: "https://connect4web.vercel.app/",
    stack: ["HTML5", "CSS3", "JavaScript", "Firebase Auth", "Cloud Firestore", "Vercel-ready static hosting"],
    role: "Game developer and frontend engineer",
    status: "Live demo available",
    featured: true,
    screenshots: [
      {
        src: "/screenshots/connect4.png",
        alt: "Connect 4 gameplay board with score panels and match HUD",
        caption: "Active match view showing the full board, player score panels, and game-state HUD."
      }
    ],
    highlights: [
      "Three AI difficulty levels from random play to minimax-style decisions",
      "Online room creation and join flow backed by Firestore sync",
      "Keyboard support, responsive UI, sound controls, and persistent scoreboard"
    ],
    metrics: ["7x6 board system", "3 AI modes", "Online room sync", "Local score persistence"],
    problem:
      "Many browser Connect 4 projects stop at simple local play. I wanted to build one that felt more complete, with AI difficulty, better UI, and online matches.",
    solution:
      "The app separates the menu from gameplay, uses different AI logic by difficulty, syncs room state with Firestore, and still works locally without Firebase.",
    architecture: [
      {
        title: "Presentation Layer",
        points: ["Main menu and settings flow", "Animated 7x6 board UI", "HUD, timer, move counter, result state"]
      },
      {
        title: "Game Systems",
        points: ["Turn management and win detection", "AI difficulty modules", "Audio, restart, and local score handling"]
      },
      {
        title: "Sync and Persistence",
        points: ["Firebase anonymous auth", "Firestore room documents", "localStorage scoreboard and settings"]
      }
    ],
    challenges: [
      "Balancing AI difficulty so harder modes feel intentional without making the UI sluggish",
      "Keeping the local experience resilient when Firebase is not configured",
      "Synchronizing room state cleanly for host and guest players"
    ],
    aiWorkflow: [
      "Used AI-assisted iteration to compare move-evaluation strategies and refine the difficulty ladder",
      "Used AI to accelerate UI copy, edge-case brainstorming, and rule-check validation paths",
      "Reviewed generated suggestions manually to keep gameplay behavior and code intent consistent"
    ],
    testing: [
      "Manual regression passes across local multiplayer, AI modes, and reset flows",
      "Validation of column input, draw states, win highlighting, and room join logic",
      "Responsive checks for desktop and touch-first layouts"
    ],
    lessons: [
      "Small games feel much better when setup, settings, and feedback are handled well.",
      "Online features should fail gracefully so the local game still works.",
      "AI tools help most when they support decisions instead of making them for you."
    ],
    videoNote:
      "There is no walkthrough video yet, but the live demo is playable directly from this portfolio."
  },
  {
    slug: "royalchess",
    title: "Royal Chess",
    year: "2026",
    tagline: "A browser chess game with match setup, computer play, and a polished HUD.",
    summary:
      "A chess game with match setup, computer play, local matches, promotion, and undo.",
    description:
      "This project focuses on making a rules-heavy game easier to play through clear UI and better game feedback.",
    repo: "https://github.com/daviddadicodes/Royalchess",
    demo: "/demos/royalchess/index.html",
    stack: ["HTML5", "CSS3", "JavaScript", "DOM state management"],
    role: "Frontend game developer",
    status: "Live demo available",
    featured: true,
    screenshots: [
      {
        src: "/screenshots/royalchess.png",
        alt: "Royal Chess board in an active match with side panel status UI",
        caption: "In-game board state with premium HUD treatment for turn status, timer, and captured material."
      }
    ],
    highlights: [
      "Computer and local two-player modes with side and difficulty selection",
      "Promotion modal, undo flow, timer display, and captured-piece tracking",
      "Strong premium menu treatment rather than dropping players directly onto the board"
    ],
    metrics: ["Match setup menu", "3 difficulty presets", "Undo support", "Promotion handling"],
    problem:
      "Chess projects often focus only on move rules, but players also need clear setup, status feedback, and controls.",
    solution:
      "Royal Chess adds a full setup flow and a clearer in-game interface with status, captured pieces, promotion, timers, and reset actions.",
    architecture: [
      {
        title: "Match Setup",
        points: ["Mode selection", "Color selection", "Difficulty and menu summary"]
      },
      {
        title: "Board Engine",
        points: ["Move validation", "Turn switching", "Check, result, and promotion state"]
      },
      {
        title: "Player Experience",
        points: ["Captured-piece displays", "Sound and settings drawer", "Undo and restart controls"]
      }
    ],
    challenges: [
      "Keeping a rules-heavy board game understandable through UI feedback",
      "Managing promotion and result-state modals without interrupting game clarity",
      "Organizing large DOM-driven game state in a maintainable way"
    ],
    aiWorkflow: [
      "Used AI to compare state-shape options for menu flow, board state, and control overlays",
      "Used AI-generated test prompts to probe difficult chess interactions like promotion and undo",
      "Refined every suggestion manually to preserve legal move behavior and player readability"
    ],
    testing: [
      "Scenario testing for setup combinations, move legality, captures, promotion, and restarts",
      "Keyboard and pointer interaction checks around modal and control elements",
      "Responsive layout passes for mobile-sized boards and stacked HUD panels"
    ],
    lessons: [
      "For strategy games, UI matters almost as much as rules.",
      "Clear status text makes check, captures, and endgame states easier to follow.",
      "A strong opening menu can improve the whole feel of the game."
    ],
    videoNote:
      "There is no walkthrough video yet, but the live demo in this portfolio shows the full setup and game interface."
  },
  {
    slug: "neonmazerunner",
    title: "Neon Maze Runner",
    year: "2026",
    tagline: "A Three.js maze game with enemy behaviors, power-ups, and mobile-friendly controls.",
    summary:
      "A 3D arcade maze game built with TypeScript and Three.js, with touch controls and level scaling.",
    description:
      "This project combines a typed codebase, rendering systems, settings persistence, and a clean build pipeline.",
    repo: "https://github.com/daviddadicodes/NeonMazeRunner",
    demo: "/demos/neonmazerunner/index.html",
    stack: ["TypeScript", "Three.js", "Vite", "Web Audio API", "localStorage"],
    role: "TypeScript gameplay engineer",
    status: "Live demo available",
    featured: true,
    screenshots: [
      {
        src: "/screenshots/neonmazerunner.png",
        alt: "Neon Maze Runner active stage with HUD and glowing maze paths",
        caption: "Live run view showing the maze, scoring HUD, lives, and the fast arcade pacing of the core loop."
      }
    ],
    highlights: [
      "3D neon maze rendering with bloom, lighting, and animated collectibles",
      "Distinct enemy behaviors including Hunter, Ambusher, Roamer, and Guardian",
      "Touch steering, difficulty scaling, audio settings, and procedural variation"
    ],
    metrics: ["Three handcrafted mazes", "4 enemy personalities", "Touch controls", "TypeScript + Vite pipeline"],
    problem:
      "The goal was to keep the clarity of classic maze games while adding better visuals, modern controls, and more replay value.",
    solution:
      "The game uses Three.js for the 3D scene, TypeScript for structure, touch controls for mobile play, and saved settings between sessions.",
    architecture: [
      {
        title: "Rendering Layer",
        points: ["Three.js scene and camera", "Lighting, bloom, and collectible animation", "HUD and overlay screens"]
      },
      {
        title: "Gameplay Systems",
        points: ["Grid-aware movement", "Enemy behavior profiles", "Scoring, lives, power surge, and level scaling"]
      },
      {
        title: "App Shell",
        points: ["Vite build pipeline", "TypeScript validation", "Settings and high-score persistence"]
      }
    ],
    challenges: [
      "Maintaining smooth movement and readability in a 3D maze layout",
      "Designing enemy personalities that feel different without becoming unpredictable",
      "Supporting both keyboard and mobile gesture control cleanly"
    ],
    aiWorkflow: [
      "Used AI to explore enemy-behavior tuning ideas and edge-case movement scenarios",
      "Used AI-assisted refactoring passes to keep TypeScript modules organized during iteration",
      "Validated performance-sensitive suggestions manually to protect gameplay feel"
    ],
    testing: [
      "Local build validation with TypeScript and Vite",
      "Manual gameplay passes across control methods, pause states, scoring, and difficulty escalation",
      "Responsive checks on touch-first layouts and audio-start restrictions"
    ],
    lessons: [
      "Typed gameplay code helps when many systems interact at once.",
      "Touch controls work best when designed early, not added late.",
      "Good visuals work better when movement and HUD feedback stay clear."
    ],
    videoNote:
      "There is no walkthrough video yet, but the portfolio includes a live build you can play."
  },
  {
    slug: "space-drifter",
    title: "Space Drifter",
    year: "2026",
    tagline: "A browser arcade shooter with Three.js, wave progression, and a detailed HUD.",
    summary:
      "A space shooter with wave progression, special abilities, and a cockpit-style HUD.",
    description:
      "This project focuses on atmosphere, game feedback, and a strong arcade presentation.",
    repo: "https://github.com/daviddadicodes/Space-Drifter",
    demo: "/demos/space-drifter/index.html",
    stack: ["JavaScript", "Three.js", "HTML5 Canvas", "CSS HUD composition"],
    role: "Game developer",
    status: "Live demo available",
    featured: true,
    screenshots: [
      {
        src: "/screenshots/space-drifter.png",
        alt: "Space Drifter live gameplay with ship view and wave HUD",
        caption: "In-game combat view with shield, combo, wave, radar, and targeting HUD all active on screen."
      }
    ],
    highlights: [
      "Three.js-powered space scene with themed level palettes and environmental effects",
      "Hull, shield, score, combo, wave, timer, and special ability systems in the HUD",
      "Structured level configuration that drives pacing, spawn cadence, and theme variation"
    ],
    metrics: ["Wave-based progression", "Theme-driven level configs", "Special ability loop", "HUD-rich arcade presentation"],
    problem:
      "Arcade shooters can feel flat on the web if the feedback, pacing, and visuals do not work together.",
    solution:
      "Space Drifter uses level config data, layered HUD panels, and scene effects to make progression and combat easier to read.",
    architecture: [
      {
        title: "Scene and Effects",
        points: ["Three.js scene setup", "Nebula and fog themes", "Damage flash, vignette, and scanline overlays"]
      },
      {
        title: "Combat Loop",
        points: ["Enemy and obstacle spawning", "Wave targets and timers", "Special ability and combo tracking"]
      },
      {
        title: "Presentation Shell",
        points: ["Responsive HUD panels", "Pause and overlay controls", "Persistent preferences"]
      }
    ],
    challenges: [
      "Keeping a dense HUD readable on smaller screens",
      "Balancing spectacle with the frame budget of browser rendering",
      "Using level config data to scale challenge without making the rules opaque"
    ],
    aiWorkflow: [
      "Used AI to compare pacing configurations and refine wave-based progression ideas",
      "Used AI as a thought partner for HUD copy, accessibility labels, and balancing checklists",
      "Reviewed outputs critically to ensure combat readability stayed high"
    ],
    testing: [
      "Playtesting around timer pressure, combo resets, wave completion, and pause behavior",
      "Visual checks across HUD density, text scaling, and scanline overlays",
      "Runtime validation of level config changes and preference persistence"
    ],
    lessons: [
      "Configuration-driven design makes balancing faster.",
      "Dense HUDs need clear hierarchy or players stop reading them.",
      "A strong visual theme can make a solo project feel much more complete."
    ],
    videoNote:
      "There is no walkthrough video yet, but the project is playable directly from the portfolio."
  },
  {
    slug: "snakegame",
    title: "Neon Snake Reactor",
    year: "2026",
    tagline: "A mobile-friendly Snake game with clean UI, persistent scoring, and responsive controls.",
    summary:
      "A modern Snake game with keyboard and swipe input, pause states, and simple static deployment.",
    description:
      "This smaller project still shows strong controls, dependable movement rules, and good mobile behavior.",
    repo: "https://github.com/daviddadicodes/snakegame",
    demo: "/demos/snakegame/index.html",
    stack: ["HTML5", "CSS3", "JavaScript", "Canvas 2D API", "Vercel static hosting"],
    role: "Frontend game developer",
    status: "Live demo available",
    featured: false,
    screenshots: [
      {
        src: "/screenshots/snakegame.png",
        alt: "Neon Snake Reactor active board with the snake moving toward food",
        caption: "Active play state showing the snake, food placement, and the mobile-friendly board presentation."
      }
    ],
    highlights: [
      "Reverse-direction prevention and empty-cell food spawning",
      "Swipe controls and on-screen direction pad for mobile play",
      "Persistent best score and polished start/pause/game-over overlays"
    ],
    metrics: ["Canvas rendering", "Mobile swipe controls", "Best-score persistence", "Static deployment ready"],
    problem:
      "Snake is simple, so the challenge is making it responsive, clear, and smooth on both desktop and mobile.",
    solution:
      "The project focuses on solid grid logic, saved score feedback, and easy controls on keyboard and touch.",
    architecture: [
      {
        title: "Input and UI",
        points: ["Keyboard mapping", "Swipe handling", "Start, pause, and restart overlays"]
      },
      {
        title: "Game Loop",
        points: ["Grid updates", "Collision checks", "Food generation and score tracking"]
      },
      {
        title: "Persistence and Hosting",
        points: ["localStorage best score", "Tiny preview server", "Vercel deployment config"]
      }
    ],
    challenges: [
      "Preventing accidental reverse turns while keeping controls responsive",
      "Making touch input feel natural on a constrained grid",
      "Maintaining presentation polish in a deliberately lightweight codebase"
    ],
    aiWorkflow: [
      "Used AI to brainstorm mobile control affordances and edge-case logic checks",
      "Used AI to tighten implementation notes and deployment readiness steps",
      "Manually verified all movement rules and persistence behavior"
    ],
    testing: [
      "Manual gameplay tests for collisions, pause/resume, restart, and score persistence",
      "Touch-input checks on mobile-sized viewports",
      "Static deployment validation using the included Vercel config"
    ],
    lessons: [
      "Small games are useful because every interaction matters.",
      "Mobile input still needs careful testing, even in simple projects.",
      "Smaller projects still benefit from onboarding and good failure states."
    ],
    videoNote:
      "There is no walkthrough video yet, but the demo is available directly from this portfolio."
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export const siteLinks = {
  github: "https://github.com/daviddadicodes",
  linkedin: "https://ca.linkedin.com/in/david-dadi-4bba85255?trk=people-guest_people_search-card",
  email: "mailto:daviddadicodes@gmail.com",
  resume: "/David-Dadi-Resume-2026.pdf"
};
