# Connect 4

Premium browser-based Connect 4 built with plain HTML, CSS, and JavaScript.

This project is designed to feel like a polished mini-game instead of a basic demo, with a cinematic main menu, premium in-game UI, local AI opponents, sound design, persistent score tracking, and Firebase-powered online room matches.

## Highlights

- Separate main menu and game screens
- Premium animated UI with responsive desktop and mobile layouts
- Player vs AI with `Easy`, `Medium`, and `Hard`
- Online friend matches with room codes
- Smooth disc drop animation, win detection, draw detection, and highlighted winning pieces
- Scoreboard with `localStorage` persistence
- Sound effects, mute toggle, settings, and polished UI transitions
- Keyboard support with number keys `1-7`

## Screens and Modes

### Main Menu

- Start Game
- Player vs AI
- Online Match
- AI difficulty selection
- How to Play
- Settings
- Online room creation and join flow

### Game Screen

- 7x6 Connect 4 board
- Turn indicator
- Timer and move counter
- Scoreboard
- Restart Game
- Back to Menu
- Win/draw result flow

## AI Difficulty

- `Easy`: random legal moves
- `Medium`: takes immediate wins, blocks obvious threats, and prefers stronger columns
- `Hard`: minimax-style play with stronger positional decisions

## Online Match

Online multiplayer uses Firebase and Firestore room syncing.

- Create a room code and share it with a friend
- Host plays as `Yellow`
- Friend joins as `Red`
- Room state syncs moves, turn state, and match status

If Firebase is not configured, local game modes still work.

## Project Files

- [`index.html`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/index.html) - app structure
- [`styles.css`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/styles.css) - full visual design and responsive layout
- [`script.js`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/script.js) - gameplay, UI flow, AI, audio, and online sync
- [`firebase-config.js`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/firebase-config.js) - Firebase config toggle and credentials
- [`firestore.rules`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/firestore.rules) - Firestore room rules
- [`FIREBASE_SETUP.md`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/FIREBASE_SETUP.md) - Firebase setup notes

## Run Locally

This project is framework-free and does not require a build step.

### Option 1

Open [`index.html`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/index.html) directly in a browser.

### Option 2

Serve the folder with a simple local server for the most reliable browser behavior.

Example:

```powershell
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## Firebase Setup

To enable online friend matches:

1. Create a Firebase project.
2. Enable `Anonymous` authentication.
3. Create a `Cloud Firestore` database.
4. Add your Firebase web app config in [`firebase-config.js`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/firebase-config.js).
5. Make sure `enabled: true` is set.
6. Publish the rules from [`firestore.rules`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/firestore.rules).
7. Deploy the project to Vercel or another static host.

More detail is available in [`FIREBASE_SETUP.md`](C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/FIREBASE_SETUP.md).

## Controls

- Click or tap a column to drop a disc
- Press number keys `1` through `7` to play by keyboard
- Use menu and settings controls for sound, restart, and navigation

## Deployment

This project works well as a static deployment.

Good options:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/) for local-only modes

For online multiplayer, use a deployed site together with Firebase.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Authentication
- Cloud Firestore

## Repository

GitHub repo:

[daviddadicodes/connect4](https://github.com/daviddadicodes/connect4)
