1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable `Authentication` and turn on `Anonymous` sign-in.
3. Create a `Cloud Firestore` database in production mode.
4. Replace the values in [firebase-config.js](/C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/firebase-config.js) and set `enabled: true`.
5. Publish the rules from [firestore.rules](/C:/Users/d_dad/Documents/Codex/2026-07-09/build-a-perfect-polished-web-based/firestore.rules).
6. Deploy the site to Vercel.

Notes:
- The app uses Firestore room documents whose document ID is the room code.
- Host is always Yellow. The friend who joins becomes Red.
- `Create Room` makes a shareable code. `Start Game` enters the active room.
- If a friend pastes a room code and presses `Start Game`, they join that room.
