const firebaseProject = window.firebaseProject || {
  enabled: false,
  config: {},
};

const ROWS = 6;
const COLS = 7;
const EMPTY = 0;
const RED = 1;
const YELLOW = 2;
const SCORE_KEY = "connect4-premium-scoreboard";
const SETTINGS_KEY = "connect4-premium-settings";
const ONLINE_STATUS_KEY = "connect4-online-room";
const AI_DELAY_MS = 520;

const state = {
  board: createEmptyBoard(),
  currentPlayer: YELLOW,
  currentScreen: "menu",
  gameActive: false,
  isAnimating: false,
  isMuted: false,
  mode: "pvp",
  difficulty: "medium",
  scores: { red: 0, yellow: 0, draws: 0 },
  streaks: { red: 0, yellow: 0 },
  winnerCells: [],
  movesMade: 0,
  roundStartedAt: 0,
  timerId: null,
  openPanel: null,
  lastMove: null,
  pendingMomentTimeout: null,
  lastHoverCol: null,
  lastHoverSoundAt: 0,
  sfxVolume: 0.85,
  musicVolume: 0,
  online: {
    enabled: Boolean(firebaseProject?.enabled),
    available: false,
    loading: false,
    app: null,
    auth: null,
    db: null,
    user: null,
    roomId: "",
    role: "",
    roomData: null,
    unsub: null,
    lastResultKey: "",
    lastMoveKey: "",
    lastReactionKey: "",
    sessionWins: { you: 0, friend: 0 },
    sessionStreaks: { you: 0, friend: 0 },
    lastWinnerLabel: "None",
    countdownActive: false,
    countdownTimers: [],
    previousGuestPresent: false,
    connectionLabel: "Offline",
  },
};

const elements = {
  menuScreen: document.getElementById("menuScreen"),
  gameScreen: document.getElementById("gameScreen"),
  gameLayoutShell: document.getElementById("gameLayoutShell"),
  gameLayout: document.getElementById("gameLayout"),
  boardFrame: document.querySelector(".board-frame"),
  board: document.getElementById("board"),
  blockPopup: document.getElementById("blockPopup"),
  hypePopup: document.getElementById("hypePopup"),
  columnButtons: document.getElementById("columnButtons"),
  columnMarkers: document.getElementById("columnMarkers"),
  startButton: document.getElementById("startButton"),
  restartButton: document.getElementById("restartButton"),
  backToMenuButton: document.getElementById("backToMenuButton"),
  resultBackToMenuButton: document.getElementById("resultBackToMenuButton"),
  playAgainButton: document.getElementById("playAgainButton"),
  resetScoreButton: document.getElementById("resetScoreButton"),
  menuResetScoreButton: document.getElementById("menuResetScoreButton"),
  muteButton: document.getElementById("muteButton"),
  gameMuteButton: document.getElementById("gameMuteButton"),
  muteLabel: document.getElementById("muteLabel"),
  settingsMuteButton: document.getElementById("settingsMuteButton"),
  settingsButton: document.getElementById("settingsButton"),
  gameSettingsButton: document.getElementById("gameSettingsButton"),
  howToPlayButton: document.getElementById("howToPlayButton"),
  modePvpButton: document.getElementById("modePvpButton"),
  modeAiButton: document.getElementById("modeAiButton"),
  modeOnlineButton: document.getElementById("modeOnlineButton"),
  difficultyEasyButton: document.getElementById("difficultyEasyButton"),
  difficultyMediumButton: document.getElementById("difficultyMediumButton"),
  difficultyHardButton: document.getElementById("difficultyHardButton"),
  difficultyDescription: document.getElementById("difficultyDescription"),
  menuModeValue: document.getElementById("menuModeValue"),
  menuDifficultyValue: document.getElementById("menuDifficultyValue"),
  onlineRoomPanel: document.getElementById("onlineRoomPanel"),
  onlineRoomStatus: document.getElementById("onlineRoomStatus"),
  createRoomButton: document.getElementById("createRoomButton"),
  copyRoomButton: document.getElementById("copyRoomButton"),
  joinCodeInput: document.getElementById("joinCodeInput"),
  roomCodeDisplay: document.getElementById("roomCodeDisplay"),
  roomCodeMeta: document.getElementById("roomCodeMeta"),
  redScore: document.getElementById("redScore"),
  yellowScore: document.getElementById("yellowScore"),
  drawScore: document.getElementById("drawScore"),
  yellowStreakBadge: document.getElementById("yellowStreakBadge"),
  yellowStreakValue: document.getElementById("yellowStreakValue"),
  redStreakBadge: document.getElementById("redStreakBadge"),
  redStreakValue: document.getElementById("redStreakValue"),
  yellowPlayerCard: document.getElementById("yellowPlayerCard"),
  redPlayerCard: document.getElementById("redPlayerCard"),
  yellowPlayerName: document.getElementById("yellowPlayerName"),
  redPlayerName: document.getElementById("redPlayerName"),
  yellowPlayerMeta: document.getElementById("yellowPlayerMeta"),
  redPlayerMeta: document.getElementById("redPlayerMeta"),
  turnCard: document.querySelector(".turn-card"),
  turnDot: document.getElementById("turnDot"),
  turnPlayerText: document.getElementById("turnPlayerText"),
  turnColorText: document.getElementById("turnColorText"),
  onlineSessionCard: document.getElementById("onlineSessionCard"),
  onlineConnectionValue: document.getElementById("onlineConnectionValue"),
  onlineRoleValue: document.getElementById("onlineRoleValue"),
  onlineRoundsValue: document.getElementById("onlineRoundsValue"),
  onlineSessionStreakValue: document.getElementById("onlineSessionStreakValue"),
  onlineLastWinnerValue: document.getElementById("onlineLastWinnerValue"),
  onlineReactionBar: document.getElementById("onlineReactionBar"),
  timeElapsed: document.getElementById("timeElapsed"),
  movesMade: document.getElementById("movesMade"),
  statusText: document.getElementById("statusText"),
  tipText: document.getElementById("tipText"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  howToPlayPanel: document.getElementById("howToPlayPanel"),
  settingsPanel: document.getElementById("settingsPanel"),
  resultPanel: document.getElementById("resultPanel"),
  resultTitle: document.getElementById("resultTitle"),
  resultMessage: document.getElementById("resultMessage"),
  resultBadge: document.getElementById("resultBadge"),
  resultBadgeIcon: document.getElementById("resultBadgeIcon"),
  sfxVolumeInput: document.getElementById("sfxVolumeInput"),
  musicVolumeInput: document.getElementById("musicVolumeInput"),
  confettiCanvas: document.getElementById("confettiCanvas"),
};

const audioEngine = {
  ctx: null,
  unlocked: false,
};

let aiTimeoutId = null;
let confettiFrame = 0;
let firestoreApi = null;
let firebaseAuthApi = null;

init();

function init() {
  loadScore();
  loadSettings();
  if (state.mode === "pvp") {
    state.mode = "ai";
  }
  createBoard();
  createColumnMarkers();
  bindEvents();
  updateScoreboard();
  updateStreakUI();
  updateMenuSelections();
  updateAudioUI();
  updateOnlineIdentityUI();
  updateOnlineSessionUI();
  updateTurnUI();
  setStatus("Choose a mode and start playing.");
  setTip(getDefaultTip());
  resizeConfettiCanvas();
  window.addEventListener("resize", resizeConfettiCanvas);
  window.addEventListener("resize", syncGameViewportScale);
  restoreOnlineRoomHint();
}

function bindEvents() {
  elements.startButton.addEventListener("click", handleStartButton);
  elements.restartButton.addEventListener("click", handleRestartButton);
  elements.backToMenuButton.addEventListener("click", handleBackToMenu);
  elements.resultBackToMenuButton.addEventListener("click", handleBackToMenu);
  elements.playAgainButton.addEventListener("click", handlePlayAgain);
  elements.resetScoreButton.addEventListener("click", handleResetScore);
  elements.menuResetScoreButton.addEventListener("click", handleResetScore);

  elements.muteButton.addEventListener("click", toggleMute);
  elements.gameMuteButton.addEventListener("click", toggleMute);
  elements.settingsMuteButton.addEventListener("click", toggleMute);
  elements.sfxVolumeInput.addEventListener("input", handleSfxVolumeChange);
  elements.musicVolumeInput.addEventListener("input", handleMusicVolumeChange);

  elements.settingsButton.addEventListener("click", () => openPanel("settingsPanel"));
  elements.gameSettingsButton.addEventListener("click", () => openPanel("settingsPanel"));
  elements.howToPlayButton.addEventListener("click", () => openPanel("howToPlayPanel"));

  if (elements.modePvpButton) {
    elements.modePvpButton.addEventListener("click", () => setMode("pvp"));
  }
  elements.modeAiButton.addEventListener("click", () => setMode("ai"));
  elements.modeOnlineButton.addEventListener("click", () => setMode("online"));
  elements.difficultyEasyButton.addEventListener("click", () => setDifficulty("easy"));
  elements.difficultyMediumButton.addEventListener("click", () => setDifficulty("medium"));
  elements.difficultyHardButton.addEventListener("click", () => setDifficulty("hard"));

  elements.createRoomButton.addEventListener("click", handleCreateRoom);
  elements.copyRoomButton.addEventListener("click", copyRoomCode);
  elements.joinCodeInput.addEventListener("input", () => {
    elements.joinCodeInput.value = sanitizeRoomCode(elements.joinCodeInput.value);
    saveSettings();
  });
  elements.onlineReactionBar.querySelectorAll("[data-reaction]").forEach((button) => {
    button.addEventListener("click", () => sendReaction(button.dataset.reaction || ""));
  });

  document.querySelectorAll("[data-close-panel]").forEach((button) => {
    button.addEventListener("click", () => {
      primeAudio();
      clickSound();
      closePanels();
    });
  });

  elements.modalBackdrop.addEventListener("click", (event) => {
    if (event.target === elements.modalBackdrop) {
      closePanels();
    }
  });

  elements.columnButtons.addEventListener("click", (event) => {
    const button = event.target.closest(".column-hit");
    if (!button) return;
    handleMove(Number(button.dataset.col));
  });

  elements.columnButtons.addEventListener("pointerover", (event) => {
    const button = event.target.closest(".column-hit");
    if (!button) return;
    playHoverTick(Number(button.dataset.col));
    previewColumn(Number(button.dataset.col));
  });

  elements.columnButtons.addEventListener("pointerout", clearColumnPreview);

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("pointerenter", () => {
      if (!button.disabled && !button.classList.contains("column-hit")) {
        playUiHoverTick();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.openPanel) {
      closePanels();
      return;
    }

    if (state.currentScreen !== "game" || !state.gameActive || state.isAnimating || isAiTurn()) {
      return;
    }

    if (event.key >= "1" && event.key <= "7") {
      handleMove(Number(event.key) - 1);
    }
  });
}

async function handleStartButton() {
  primeAudio();
  clickSound();

  if (state.mode === "online") {
    await startOnlineFlow();
    return;
  }

  showGame();
  resetLocalGame();
}

async function handleCreateRoom() {
  primeAudio();
  clickSound();
  setMode("online");
  await ensureFirebaseReady();
  if (!state.online.available) return;

  if (state.online.roomId) {
    updateOnlineRoomUI("Room already active. Share the code below.");
    return;
  }

  const roomId = generateRoomCode();
  const roomRef = firestoreApi.doc(state.online.db, "rooms", roomId);
  const payload = {
    roomCode: roomId,
    hostId: state.online.user.uid,
    guestId: null,
    board: serializeBoardForFirestore(createEmptyBoard()),
    currentPlayer: YELLOW,
    winner: EMPTY,
    status: "waiting",
    lastMove: null,
    reaction: null,
    updatedAt: firestoreApi.serverTimestamp(),
  };

  try {
    await firestoreApi.setDoc(roomRef, payload);
    state.online.roomId = roomId;
    state.online.role = "host";
    resetOnlineSessionStats();
    rememberOnlineRoom(roomId);
    subscribeToRoom(roomId);
    updateOnlineRoomUI(`Room ${roomId} created. Share it with your friend.`);
  } catch (error) {
    console.error(error);
    updateOnlineRoomUI(`Could not create room. ${getFirebaseErrorMessage(error)}`);
  }
}

async function startOnlineFlow() {
  await ensureFirebaseReady();
  if (!state.online.available) {
    updateOnlineRoomUI("Firebase is not configured yet. Add your config to enable online play.");
    return;
  }

  if (!state.online.roomId) {
    const joinCode = sanitizeRoomCode(elements.joinCodeInput.value);
    if (joinCode) {
      await joinRoom(joinCode);
    } else {
      await handleCreateRoom();
    }
  }

  if (!state.online.roomId) return;
  showGame();
  setStatus("Connecting to online room...");
}

async function joinRoom(roomId) {
  const cleanId = sanitizeRoomCode(roomId);
  if (!cleanId) return;

  try {
    const roomRef = firestoreApi.doc(state.online.db, "rooms", cleanId);
    const roomSnap = await firestoreApi.getDoc(roomRef);
    if (!roomSnap.exists()) {
      updateOnlineRoomUI(`Room ${cleanId} was not found.`);
      return;
    }

    const data = roomSnap.data();
    if (data.guestId && data.guestId !== state.online.user.uid) {
      updateOnlineRoomUI(`Room ${cleanId} is already full.`);
      return;
    }

    if (!data.guestId) {
      await firestoreApi.updateDoc(roomRef, {
        guestId: state.online.user.uid,
        status: "playing",
        updatedAt: firestoreApi.serverTimestamp(),
      });
    }

    state.online.roomId = cleanId;
    state.online.role = data.hostId === state.online.user.uid ? "host" : "guest";
    resetOnlineSessionStats();
    rememberOnlineRoom(cleanId);
    subscribeToRoom(cleanId);
    updateOnlineRoomUI(`Joined room ${cleanId}.`);
  } catch (error) {
    console.error(error);
    updateOnlineRoomUI(`Could not join room. ${getFirebaseErrorMessage(error)}`);
  }
}

async function ensureFirebaseReady() {
  if (!state.online.enabled) {
    updateOnlineRoomUI("Create firebase-config.js and turn enabled on to use online rooms.");
    return;
  }

  if (state.online.available) return;
  if (state.online.loading) return;

  state.online.loading = true;
  updateOnlineRoomUI("Connecting to Firebase...");

  try {
    const firebaseAppApi = await import("https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js");
    firebaseAuthApi = await import("https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js");
    firestoreApi = await import("https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js");

    state.online.app = firebaseAppApi.initializeApp(firebaseProject.config);
    state.online.auth = firebaseAuthApi.getAuth(state.online.app);
    state.online.db = firestoreApi.getFirestore(state.online.app);
    const authResult = await firebaseAuthApi.signInAnonymously(state.online.auth);
    state.online.user = authResult.user;
    state.online.available = true;
    updateOnlineRoomUI("Firebase ready. Create a room or join a friend.");
  } catch (error) {
    console.error(error);
    updateOnlineRoomUI("Could not connect to Firebase. Check your firebase-config.js values.");
  } finally {
    state.online.loading = false;
  }
}

function subscribeToRoom(roomId) {
  if (!state.online.db) return;
  if (state.online.unsub) {
    state.online.unsub();
    state.online.unsub = null;
  }

  const roomRef = firestoreApi.doc(state.online.db, "rooms", roomId);
  state.online.unsub = firestoreApi.onSnapshot(roomRef, (snapshot) => {
    if (!snapshot.exists()) {
      state.online.connectionLabel = "Disconnected";
      updateOnlineRoomUI("Room closed.");
      leaveOnlineRoom(false);
      return;
    }

    const data = snapshot.data();
    state.online.connectionLabel = "Connected";
    const previousData = state.online.roomData;
    state.online.roomData = data;
    state.online.role = getOnlineRole(data);
    syncRoomToGame(data, previousData);
  });
}

function syncRoomToGame(data, previousData = null) {
  const previousStatus = previousData?.status || "";
  const hadGuest = Boolean(previousData?.guestId);
  const hasGuest = Boolean(data.guestId);
  const incomingMoves = countBoardMoves(deserializeBoardFromFirestore(data.board));
  const moveKey = data.lastMove ? `${data.lastMove.player}-${data.lastMove.row}-${data.lastMove.col}-${incomingMoves}` : "";
  const hasNewMove = Boolean(moveKey) && moveKey !== state.online.lastMoveKey;
  const isOpponentMove = hasNewMove && data.lastMove?.player !== getOnlinePlayerToken();

  state.board = deserializeBoardFromFirestore(data.board);
  state.currentPlayer = data.currentPlayer ?? YELLOW;
  state.lastMove = data.lastMove || null;
  state.movesMade = incomingMoves;
  state.winnerCells = [];
  updateMoveInfo();
  if (isOpponentMove && data.lastMove) {
    previewRemoteColumn(data.lastMove.col, data.lastMove.player);
  }
  renderBoard(state.lastMove, hasNewMove);
  if (hasNewMove && data.lastMove) {
    playDropSound(data.lastMove.row);
    state.online.lastMoveKey = moveKey;
  }
  updateTurnUI();
  updateOnlineIdentityUI();
  updateOnlineSessionUI();
  updateOnlineRoomUI(getOnlineRoomMessage(data));
  handleIncomingReaction(data.reaction);

  if (!hadGuest && hasGuest) {
    queueAchievementMoment("Player Connected", "Your friend joined the room.", "blue", 120);
    playConnectionSound();
  }

  if (hadGuest && !hasGuest) {
    clearOnlineCountdown();
    state.gameActive = false;
    setColumnInteractivity(false);
    state.online.connectionLabel = "Friend disconnected";
    updateOnlineSessionUI();
    setStatus("Friend disconnected.");
    setTip("Stay in the room to wait for them, or head back to menu.");
    updateOnlineRoomUI(`Room ${state.online.roomId} waiting. Your friend disconnected.`);
    return;
  }

  if (data.status === "waiting") {
    state.gameActive = false;
    setColumnInteractivity(false);
    setStatus("Waiting for your friend to join.");
    setTip(`Share room code ${state.online.roomId} with your friend.`);
    state.online.connectionLabel = hasGuest ? "Match ready" : "Waiting";
    updateOnlineSessionUI();
    return;
  }

  if (data.status === "playing") {
    if (previousStatus === "waiting") {
      startOnlineCountdown();
      return;
    }
    state.gameActive = true;
    setColumnInteractivity(!state.online.countdownActive);
    const yourTurn = getOnlinePlayerToken() === state.currentPlayer;
    if (yourTurn) {
      queueAchievementMoment("Your Move", "The board is yours.", "blue", 100);
      playYourTurnSound();
    }
    setStatus(getDefaultStatus());
    setTip(yourTurn ? "Your move. Control the center and pressure diagonals." : "Friend is thinking. Watch the drop lane.");
    if (!state.roundStartedAt) {
      state.roundStartedAt = Date.now();
      startRoundTimer();
    }
    state.online.connectionLabel = "Connected";
    updateOnlineSessionUI();
    return;
  }

  state.gameActive = false;
  setColumnInteractivity(false);
  const resultKey = `${data.winner}-${state.movesMade}`;
  if (state.online.lastResultKey !== resultKey) {
    state.online.lastResultKey = resultKey;
    handleRemoteResult(data);
  }
}

function handleRemoteResult(data) {
  stopRoundTimer();
  if (data.winner === YELLOW || data.winner === RED) {
    const winnerName = data.winner === YELLOW ? "Yellow" : "Red";
    const youWon = data.winner === getOnlinePlayerToken();
    const lastMove = data.lastMove;
    if (lastMove) {
      const wins = checkWin(state.board, lastMove.row, lastMove.col, data.winner);
      state.winnerCells = wins;
      highlightWinningPieces(wins);
    }
    if (youWon) {
      state.online.sessionWins.you += 1;
      state.online.sessionStreaks.you += 1;
      state.online.sessionStreaks.friend = 0;
      state.online.lastWinnerLabel = "You";
    } else {
      state.online.sessionWins.friend += 1;
      state.online.sessionStreaks.friend += 1;
      state.online.sessionStreaks.you = 0;
      state.online.lastWinnerLabel = "Friend";
    }
    updateOnlineSessionUI();
    setStatus(youWon ? "You win the online round." : `${winnerName} wins the online round.`);
    launchConfetti(data.winner === YELLOW ? "#ffcb17" : "#ff3b43");
    showResult(youWon ? "You Win!" : `${winnerName} Wins!`, getOnlineRoundSummary(data, lastMove));
  } else {
    state.online.sessionStreaks.you = 0;
    state.online.sessionStreaks.friend = 0;
    state.online.lastWinnerLabel = "Draw";
    updateOnlineSessionUI();
    setStatus("Online round ended in a draw.");
    showResult("Draw Game", "This online room ended in a draw. Hit Play Again to keep the session going.");
  }
}

async function submitOnlineMove(col) {
  if (!state.online.roomId || !state.online.roomData) return;

  const roomRef = firestoreApi.doc(state.online.db, "rooms", state.online.roomId);
  const playerToken = getOnlinePlayerToken();
  if (!playerToken) return;

  try {
    await firestoreApi.runTransaction(state.online.db, async (transaction) => {
      const snapshot = await transaction.get(roomRef);
      if (!snapshot.exists()) throw new Error("Room missing");

      const data = snapshot.data();
      if (data.status !== "playing") throw new Error("Game not active");
      if (data.currentPlayer !== playerToken) throw new Error("Not your turn");

      const board = deserializeBoardFromFirestore(data.board);
      const row = getAvailableRow(board, col);
      if (row === -1) throw new Error("Column full");

      board[row][col] = playerToken;
      const winCells = checkWin(board, row, col, playerToken);
      const draw = checkDraw(board);

      transaction.update(roomRef, {
        board: serializeBoardForFirestore(board),
        currentPlayer: playerToken === YELLOW ? RED : YELLOW,
        winner: winCells.length ? playerToken : EMPTY,
        status: winCells.length || draw ? "finished" : "playing",
        lastMove: { row, col, player: playerToken },
        updatedAt: firestoreApi.serverTimestamp(),
      });
    });
  } catch (error) {
    setStatus(error.message === "Column full" ? "Column is full." : "Move rejected.");
  }
}

async function resetOnlineRoom() {
  if (!state.online.roomId || !state.online.roomData) return;

  try {
    const roomRef = firestoreApi.doc(state.online.db, "rooms", state.online.roomId);
    await firestoreApi.updateDoc(roomRef, {
      board: serializeBoardForFirestore(createEmptyBoard()),
      currentPlayer: YELLOW,
      winner: EMPTY,
      status: state.online.roomData.guestId ? "playing" : "waiting",
      lastMove: null,
      reaction: null,
      updatedAt: firestoreApi.serverTimestamp(),
    });

    state.online.lastResultKey = "";
    state.online.lastMoveKey = "";
    closePanels();
    stopConfetti();
    state.roundStartedAt = Date.now();
    startRoundTimer();
    updateOnlineRoomUI(state.online.roomData.guestId ? "Rematch ready. Launching a fresh round." : "Waiting for your friend to return for a rematch.");
  } catch (error) {
    console.error(error);
    updateOnlineRoomUI(`Could not restart room. ${getFirebaseErrorMessage(error)}`);
  }
}

function getOnlineRole(roomData) {
  if (!state.online.user) return "";
  if (roomData.hostId === state.online.user.uid) return "host";
  if (roomData.guestId === state.online.user.uid) return "guest";
  return "";
}

function getOnlineSideLabels() {
  if (state.mode !== "online") {
    return {
      yellowName: "PLAYER 1",
      yellowMeta: '<span class="dot yellow"></span> Yellow',
      redName: state.mode === "ai" ? "AI" : "PLAYER 2",
      redMeta: `<span class="dot red"></span> ${state.mode === "ai" ? "Red AI" : "Red"}`,
    };
  }

  const youAreYellow = state.online.role !== "guest";
  return {
    yellowName: youAreYellow ? "YOU" : "FRIEND",
    yellowMeta: `<span class="dot yellow"></span> ${youAreYellow ? "Yellow" : "Friend Yellow"}`,
    redName: youAreYellow ? "FRIEND" : "YOU",
    redMeta: `<span class="dot red"></span> ${youAreYellow ? "Friend Red" : "Red"}`,
  };
}

function updateOnlineIdentityUI() {
  const labels = getOnlineSideLabels();
  elements.yellowPlayerName.textContent = labels.yellowName;
  elements.redPlayerName.textContent = labels.redName;
  elements.yellowPlayerMeta.innerHTML = labels.yellowMeta;
  elements.redPlayerMeta.innerHTML = labels.redMeta;
  const onlineMode = state.mode === "online";
  elements.onlineSessionCard.classList.toggle("hidden", !onlineMode);
  elements.onlineReactionBar.classList.toggle("hidden", !onlineMode);
}

function updateOnlineSessionUI() {
  const onlineMode = state.mode === "online" && Boolean(state.online.roomId);
  elements.onlineSessionCard.classList.toggle("hidden", !onlineMode);
  elements.onlineReactionBar.classList.toggle("hidden", !onlineMode);
  if (!onlineMode) return;

  const youAreYellow = state.online.role !== "guest";
  elements.onlineConnectionValue.textContent = state.online.connectionLabel;
  elements.onlineRoleValue.textContent = `You: ${youAreYellow ? "Yellow" : "Red"}`;
  elements.onlineRoundsValue.textContent = `${state.online.sessionWins.you} - ${state.online.sessionWins.friend}`;
  const streak =
    state.online.sessionStreaks.you > 0
      ? `You x${state.online.sessionStreaks.you}`
      : state.online.sessionStreaks.friend > 0
        ? `Friend x${state.online.sessionStreaks.friend}`
        : "Even";
  elements.onlineSessionStreakValue.textContent = streak;
  elements.onlineLastWinnerValue.textContent = state.online.lastWinnerLabel;
}

function getOnlinePlayerToken() {
  if (state.online.role === "host") return YELLOW;
  if (state.online.role === "guest") return RED;
  return EMPTY;
}

function getOnlineRoomMessage(data) {
  if (data.status === "waiting") {
    return `Room ${state.online.roomId} ready. Waiting for your friend.`;
  }
  if (data.status === "playing") {
    return `Room ${state.online.roomId} live. ${state.online.role === "host" ? "You are Yellow." : "You are Red."}`;
  }
  return `Room ${state.online.roomId} finished.`;
}

function startOnlineCountdown() {
  clearOnlineCountdown();
  state.online.countdownActive = true;
  state.gameActive = false;
  setColumnInteractivity(false);
  state.online.connectionLabel = "Match ready";
  updateOnlineSessionUI();
  const steps = [
    { delay: 0, title: "Match Ready", subtitle: "Player connected. Get set.", tone: "blue" },
    { delay: 520, title: "3", subtitle: "Heads up.", tone: "blue" },
    { delay: 1040, title: "2", subtitle: "Board is live soon.", tone: "blue" },
    { delay: 1560, title: "1", subtitle: "Line up the center.", tone: "blue" },
    { delay: 2080, title: "Drop!", subtitle: "Your online match is on.", tone: "yellow" },
  ];

  steps.forEach((step) => {
    const timer = window.setTimeout(() => queueHypeMoment(step.title, step.subtitle, step.tone), step.delay);
    state.online.countdownTimers.push(timer);
  });

  const finalTimer = window.setTimeout(() => {
    state.online.countdownActive = false;
    state.gameActive = true;
    setColumnInteractivity(true);
    const yourTurn = getOnlinePlayerToken() === state.currentPlayer;
    if (yourTurn) {
      queueAchievementMoment("Your Move", "You open the online round.", "blue", 80);
      playYourTurnSound();
    }
    setStatus(yourTurn ? "Your move." : "Friend to move.");
    setTip(yourTurn ? "The match is live. Start with strong central pressure." : "Friend opens the round. Watch their lane.");
  }, 2660);
  state.online.countdownTimers.push(finalTimer);
}

function previewRemoteColumn(col, player) {
  clearAiPreview();
  const button = elements.columnButtons.querySelector(`.column-hit[data-col="${col}"]`);
  if (!button) return;
  button.classList.add("active", player === YELLOW ? "preview-yellow" : "preview-red", "preview-ai");
  setActiveColumnMarker(col);
  const timer = window.setTimeout(() => {
    button.classList.remove("active", "preview-yellow", "preview-red", "preview-ai");
  }, 580);
  state.online.countdownTimers.push(timer);
}

async function sendReaction(text) {
  if (!state.online.roomId || !state.online.db || !text) return;
  primeAudio();
  clickSound();
  try {
    const roomRef = firestoreApi.doc(state.online.db, "rooms", state.online.roomId);
    await firestoreApi.updateDoc(roomRef, {
      reaction: {
        text,
        from: state.online.role,
        id: `${state.online.role}-${Date.now()}`,
      },
      updatedAt: firestoreApi.serverTimestamp(),
    });
    setStatus(`Reaction sent: ${text}`);
  } catch (error) {
    updateOnlineRoomUI(`Could not send reaction. ${getFirebaseErrorMessage(error)}`);
  }
}

function handleIncomingReaction(reaction) {
  if (!reaction?.id || reaction.id === state.online.lastReactionKey) return;
  state.online.lastReactionKey = reaction.id;
  if (reaction.from === state.online.role) return;
  queueAchievementMoment(reaction.text, "From your friend", "blue", 80);
  playReactionSound();
}

function getOnlineRoundSummary(data, lastMove) {
  if (!lastMove) {
    return `${data.winner === getOnlinePlayerToken() ? "You" : "Your friend"} took the round in room ${state.online.roomId}.`;
  }

  const winningCells = checkWin(state.board, lastMove.row, lastMove.col, data.winner);
  if (isDiagonalWin(winningCells)) {
    return `${data.winner === getOnlinePlayerToken() ? "You" : "Your friend"} sealed it on a diagonal.`;
  }

  if (lastMove.col === 3) {
    return `${data.winner === getOnlinePlayerToken() ? "You" : "Your friend"} stole the center and closed the round.`;
  }

  return `${data.winner === getOnlinePlayerToken() ? "You" : "Your friend"} connected four in room ${state.online.roomId}.`;
}

async function handleRestartButton() {
  primeAudio();
  clickSound();
  if (state.mode === "online" && state.online.roomId) {
    await resetOnlineRoom();
    return;
  }
  resetLocalGame();
}

async function handlePlayAgain() {
  primeAudio();
  clickSound();
  closePanels();
  if (state.mode === "online" && state.online.roomId) {
    await resetOnlineRoom();
    return;
  }
  resetLocalGame();
}

async function handleBackToMenu() {
  primeAudio();
  clickSound();
  closePanels();
  if (state.mode === "online") {
    leaveOnlineRoom(true);
  }
  backToMenu();
}

function handleResetScore() {
  primeAudio();
  clickSound();
  state.scores = { red: 0, yellow: 0, draws: 0 };
  resetLocalStreaks();
  saveScore();
  updateScoreboard();
}

function leaveOnlineRoom(clearSavedRoom) {
  clearOnlineCountdown();
  if (state.online.unsub) {
    state.online.unsub();
    state.online.unsub = null;
  }
  state.online.roomId = "";
  state.online.role = "";
  state.online.roomData = null;
  state.online.lastResultKey = "";
  state.online.lastMoveKey = "";
  state.online.lastReactionKey = "";
  if (clearSavedRoom) {
    localStorage.removeItem(ONLINE_STATUS_KEY);
  }
  updateOnlineIdentityUI();
  resetOnlineSessionStats();
  updateOnlineRoomUI("Create a room or paste a friend code, then press Start Game.");
}

function restoreOnlineRoomHint() {
  const savedRoom = localStorage.getItem(ONLINE_STATUS_KEY);
  if (savedRoom) {
    elements.roomCodeDisplay.textContent = savedRoom;
    elements.joinCodeInput.value = savedRoom;
  }
}

function resetOnlineSessionStats() {
  state.online.sessionWins = { you: 0, friend: 0 };
  state.online.sessionStreaks = { you: 0, friend: 0 };
  state.online.lastWinnerLabel = "None";
  state.online.lastMoveKey = "";
  state.online.lastReactionKey = "";
  state.online.previousGuestPresent = false;
  state.online.connectionLabel = "Connected";
  clearOnlineCountdown();
  updateOnlineSessionUI();
}

function clearOnlineCountdown() {
  state.online.countdownActive = false;
  state.online.countdownTimers.forEach((timer) => clearTimeout(timer));
  state.online.countdownTimers = [];
}

function rememberOnlineRoom(roomId) {
  localStorage.setItem(ONLINE_STATUS_KEY, roomId);
  elements.roomCodeDisplay.textContent = roomId;
  elements.copyRoomButton.disabled = false;
  elements.copyRoomButton.textContent = "Copy Code";
}

async function copyRoomCode() {
  if (!state.online.roomId) return;
  try {
    await navigator.clipboard.writeText(state.online.roomId);
    elements.copyRoomButton.textContent = "Copied";
    elements.roomCodeDisplay.classList.add("room-code-copied");
    updateOnlineRoomUI(`Room code ${state.online.roomId} copied.`);
    elements.roomCodeMeta.textContent = "Copied. Send this code to your friend.";
    window.setTimeout(() => {
      elements.copyRoomButton.textContent = "Copy Code";
      elements.roomCodeDisplay.classList.remove("room-code-copied");
      if (state.online.roomId) {
        elements.roomCodeMeta.textContent = "Create a room and send the code to your friend.";
      }
    }, 1400);
  } catch (error) {
    updateOnlineRoomUI(`Room code: ${state.online.roomId}`);
  }
}

function setMode(mode) {
  state.mode = mode;
  updateMenuSelections();
  saveSettings();
}

function setDifficulty(difficulty) {
  state.difficulty = difficulty;
  updateMenuSelections();
  saveSettings();
}

function updateMenuSelections() {
  const aiMode = state.mode === "ai";
  const onlineMode = state.mode === "online";

  toggleSelection(elements.modePvpButton, state.mode === "pvp");
  toggleSelection(elements.modeAiButton, aiMode);
  toggleSelection(elements.modeOnlineButton, onlineMode);
  toggleSelection(elements.difficultyEasyButton, state.difficulty === "easy");
  toggleSelection(elements.difficultyMediumButton, state.difficulty === "medium");
  toggleSelection(elements.difficultyHardButton, state.difficulty === "hard");

  elements.difficultyEasyButton.disabled = !aiMode;
  elements.difficultyMediumButton.disabled = !aiMode;
  elements.difficultyHardButton.disabled = !aiMode;
  elements.onlineRoomPanel.classList.toggle("hidden", !onlineMode);

  if (state.mode === "pvp") {
    elements.menuModeValue.textContent = "Player vs Player";
    elements.menuDifficultyValue.textContent = "Not Needed";
  } else if (state.mode === "ai") {
    elements.menuModeValue.textContent = "Player vs AI";
    elements.menuDifficultyValue.textContent = `${capitalize(state.difficulty)} AI`;
  } else {
    elements.menuModeValue.textContent = "Online Match";
    elements.menuDifficultyValue.textContent = state.online.roomId ? "Realtime Room" : "Create or Join";
  }

  elements.difficultyDescription.textContent = getDifficultyDescription();
  updateOnlineIdentityUI();
  updateOnlineSessionUI();
}

function toggleSelection(button, active) {
  if (!button) return;
  button.classList.toggle("active", active);
  button.setAttribute("aria-pressed", String(active));
}

function getDifficultyDescription() {
  if (state.mode === "pvp") {
    return "Local head-to-head play on one device with instant turn handoff.";
  }
  if (state.mode === "online") {
    return "Create a room, share the code, and play a realtime match with a friend over Firebase.";
  }
  if (state.difficulty === "easy") {
    return "Easy AI favors legal moves and center hints for a gentler match.";
  }
  if (state.difficulty === "medium") {
    return "Medium AI blocks obvious wins, takes winning moves, and prefers strong central play.";
  }
  return "Hard AI uses deeper lookahead, stronger traps, and punishes weak spacing.";
}

function showGame() {
  state.currentScreen = "game";
  elements.menuScreen.classList.add("hidden");
  elements.gameScreen.classList.remove("hidden");
  requestAnimationFrame(syncGameViewportScale);
}

function backToMenu() {
  state.currentScreen = "menu";
  state.gameActive = false;
  state.isAnimating = false;
  resetLocalStreaks();
  stopRoundTimer();
  clearColumnPreview();
  stopConfetti();
  setColumnInteractivity(false);
  elements.gameScreen.classList.add("hidden");
  elements.menuScreen.classList.remove("hidden");
}

function resetLocalGame() {
  clearPendingAi();
  if (state.pendingMomentTimeout) {
    clearTimeout(state.pendingMomentTimeout);
    state.pendingMomentTimeout = null;
  }
  closePanels();
  stopConfetti();
  state.board = createEmptyBoard();
  state.currentPlayer = YELLOW;
  state.gameActive = true;
  state.isAnimating = false;
  state.winnerCells = [];
  state.movesMade = 0;
  state.roundStartedAt = Date.now();
  state.lastMove = null;
  renderBoard(null, false);
  updateMoveInfo();
  updateTurnUI();
  updateRoundTimer();
  startRoundTimer();
  setStatus("Yellow opens the round.");
  setTip(getDefaultTip());
  setColumnInteractivity(true);
  queueHypeMoment("Round Start", "Fresh board. Own the center.", "blue");
  requestAnimationFrame(syncGameViewportScale);
}

function syncGameViewportScale() {
  if (state.currentScreen !== "game") return;

  const shell = elements.gameLayoutShell;
  const layout = elements.gameLayout;
  const header = elements.gameScreen.querySelector(".game-header");
  if (!shell || !layout || !header) return;

  if (window.innerWidth <= 1180) {
    layout.style.setProperty("--game-scale", "1");
    shell.style.height = "auto";
    return;
  }

  layout.style.setProperty("--game-scale", "1");
  shell.style.height = "auto";

  const availableHeight = Math.max(0, window.innerHeight - header.offsetHeight);
  const availableWidth = Math.max(0, shell.clientWidth || window.innerWidth);
  const naturalHeight = layout.scrollHeight;
  const naturalWidth = layout.scrollWidth;

  if (!availableHeight || !availableWidth || !naturalHeight || !naturalWidth) return;

  const heightScale = availableHeight / naturalHeight;
  const widthScale = availableWidth / naturalWidth;
  const scale = Math.min(1, heightScale, widthScale);

  layout.style.setProperty("--game-scale", scale.toFixed(4));
  shell.style.height = `${Math.ceil(naturalHeight * scale)}px`;
}

function createBoard() {
  elements.board.innerHTML = "";
  elements.columnButtons.innerHTML = "";

  for (let col = 0; col < COLS; col += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "column-hit";
    button.dataset.col = String(col);
    button.setAttribute("aria-label", `Drop piece in column ${col + 1}`);
    button.disabled = true;
    elements.columnButtons.appendChild(button);
  }

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = String(row);
      cell.dataset.col = String(col);
      cell.setAttribute("role", "gridcell");
      cell.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}, empty`);
      elements.board.appendChild(cell);
    }
  }
}

function createColumnMarkers() {
  elements.columnMarkers.innerHTML = "";
  for (let col = 0; col < COLS; col += 1) {
    const marker = document.createElement("div");
    marker.className = "column-marker";
    marker.dataset.col = String(col);
    marker.innerHTML = `<span>${col + 1}</span><div class="marker-dot"></div>`;
    elements.columnMarkers.appendChild(marker);
  }
  setActiveColumnMarker(3);
}

function renderBoard(animatedMove, animateDrop) {
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      const cell = getCell(row, col);
      const player = state.board[row][col];
      cell.innerHTML = "";

      if (player !== EMPTY) {
        const piece = document.createElement("div");
        piece.className = `piece ${player === RED ? "red" : "yellow"}`;

        if (animateDrop && animatedMove && animatedMove.row === row && animatedMove.col === col) {
          piece.style.setProperty("--drop-duration", `${getDropDuration(row)}ms`);
          piece.style.setProperty("--drop-start", `${-1 * ((row + 1) * 112)}%`);
          piece.style.setProperty("--drop-distance", `${row * 2}px`);
        } else {
          piece.style.setProperty("--drop-duration", "0ms");
          piece.style.setProperty("--drop-start", "0%");
          piece.style.setProperty("--drop-distance", "0px");
          piece.style.transform = "translateY(0)";
        }

        if (state.lastMove && state.lastMove.row === row && state.lastMove.col === col) {
          piece.classList.add("last-move");
        }

        cell.appendChild(piece);
        cell.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}, ${player === RED ? "red piece" : "yellow piece"}`);
      } else {
        cell.setAttribute("aria-label", `Row ${row + 1}, column ${col + 1}, empty`);
      }
    }
  }
}

function handleMove(col) {
  if (!state.gameActive || state.isAnimating) return;

  if (state.mode === "online") {
    submitOnlineMove(col);
    return;
  }

  if (isAiTurn()) return;
  if (!isColumnAvailable(state.board, col)) {
    playInvalidSound();
    animateInvalidColumn(col);
    setStatus(`Column ${col + 1} is full.`);
    return;
  }

  performLocalMove(col, state.currentPlayer);
}

function performLocalMove(col, player) {
  const row = getAvailableRow(state.board, col);
  if (row === -1) return;
  const wasBlock = isBlockingMove(state.board, col, player);

  state.board[row][col] = player;
  state.movesMade += 1;
  state.lastMove = { row, col, player };
  state.isAnimating = true;
  updateMoveInfo();
  setActiveColumnMarker(col);
  setColumnInteractivity(false);
  renderBoard(state.lastMove, true);
  playDropSound(row);
  setStatus(`${player === YELLOW ? "Yellow" : "Red"} drops in column ${col + 1}.`);

  window.setTimeout(() => {
    state.isAnimating = false;
    finalizeLocalTurn(row, col, player, wasBlock);
  }, getDropDuration(row));
}

function finalizeLocalTurn(row, col, player, wasBlock = false) {
  const winningCells = checkWin(state.board, row, col, player);
  const scoreGapBeforeWin = player === YELLOW ? state.scores.red - state.scores.yellow : state.scores.yellow - state.scores.red;
  const createdForkThreat = createsForkThreat(state.board, player);
  if (winningCells.length) {
    state.winnerCells = winningCells;
    state.gameActive = false;
    stopRoundTimer();
    highlightWinningPieces(winningCells);
    playWinSound();
    pulseBoard("board-win");
    launchConfetti(player === YELLOW ? "#ffcb17" : "#ff3b43");
    if (player === YELLOW) state.scores.yellow += 1;
    else state.scores.red += 1;
    updateStreaksForWinner(player);
    saveScore();
    updateScoreboard();
    celebrateScore(player === YELLOW ? "yellow" : "red");
    updateStreakUI();
    const streak = player === YELLOW ? state.streaks.yellow : state.streaks.red;
    if (streak >= 2) {
      queueHypeMoment(`${streak} Win Streak`, `${player === YELLOW ? "Yellow" : "Red"} is taking over.`, player === YELLOW ? "yellow" : "red");
      playStreakSound(streak);
    } else {
      queueHypeMoment("Victory!", `${player === YELLOW ? "Yellow" : "Red"} closes the round.`, player === YELLOW ? "yellow" : "red");
    }
    queueAchievementForWin(player, row, col, winningCells, scoreGapBeforeWin);
    configureResultBadge(player === YELLOW ? "yellow" : "red", streak);
    showResult(
      player === YELLOW ? "Player 1 Wins!" : state.mode === "ai" ? "AI Wins!" : "Player 2 Wins!",
      `${player === YELLOW ? "Yellow" : "Red"} connects four and takes the round.${streak >= 2 ? ` ${streak} win streak!` : ""}`
    );
    setStatus(`${player === YELLOW ? "Yellow" : "Red"} wins the round.`);
    return;
  }

  if (checkDraw(state.board)) {
    state.gameActive = false;
    stopRoundTimer();
    state.scores.draws += 1;
    state.streaks.yellow = 0;
    state.streaks.red = 0;
    saveScore();
    updateScoreboard();
    celebrateScore("draw");
    updateStreakUI();
    playDrawSound();
    pulseBoard("board-draw");
    queueHypeMoment("Round Draw", "No space left. Run it back.", "blue");
    configureResultBadge("draw");
    showResult("Draw Game", "The board filled with no winner.");
    setStatus("Draw game.");
    return;
  }

  if (createdThreat(row, col, player)) {
    pulseBoard("board-clutch");
    playPressureSound(player);
    setTip(`${player === YELLOW ? "Yellow" : "Red"} builds pressure with three in a row.`);
  }

  if (wasBlock) {
    triggerBlockedMoment(player);
    queueAchievementMoment("Perfect Block", "Threat denied right on time.", player === YELLOW ? "yellow" : "red", 520);
  } else if (createdForkThreat) {
    queueAchievementMoment("Fork Threat", "Two winning lanes are now in play.", player === YELLOW ? "yellow" : "red", 260);
  }

  state.currentPlayer = player === YELLOW ? RED : YELLOW;
  updateTurnUI();
  setColumnInteractivity(true);
  setStatus(getDefaultStatus());
  setTip(getDefaultTip());

  if (hasMatchPointThreat(state.board, state.currentPlayer)) {
    queueHypeMoment("Match Point", `${state.currentPlayer === YELLOW ? "Yellow" : "Red"} is one move away.`, state.currentPlayer === YELLOW ? "yellow" : "red");
    playMatchPointSound(state.currentPlayer);
  }

  if (isAiTurn()) {
    scheduleAiMove();
  }
}

function updateTurnUI() {
  const yellowTurn = state.currentPlayer === YELLOW;
  const onlineMode = state.mode === "online";
  const youAreYellow = state.online.role !== "guest";
  elements.turnDot.classList.toggle("yellow", yellowTurn);
  elements.turnDot.classList.toggle("red", !yellowTurn);
  elements.turnPlayerText.textContent = yellowTurn
    ? onlineMode ? (youAreYellow ? "YOU" : "FRIEND") : "PLAYER 1"
    : state.mode === "ai" ? "AI" : onlineMode ? (youAreYellow ? "FRIEND" : "YOU") : "PLAYER 2";
  elements.turnColorText.textContent = yellowTurn ? "Yellow" : "Red";
  elements.turnPlayerText.style.color = yellowTurn ? "var(--yellow)" : "var(--red)";
  elements.yellowPlayerCard.classList.toggle("active-player", yellowTurn);
  elements.redPlayerCard.classList.toggle("active-player", !yellowTurn);
  elements.turnCard.classList.toggle("thinking", state.mode === "ai" && state.currentPlayer === RED && state.gameActive);
}

function setColumnInteractivity(enabled) {
  elements.columnButtons.querySelectorAll(".column-hit").forEach((button) => {
    const col = Number(button.dataset.col);
    const isFull = !isColumnAvailable(state.board, col);
    const onlineBlocked = state.mode === "online" && getOnlinePlayerToken() !== state.currentPlayer;
    button.disabled = !enabled || !state.gameActive || isFull || isAiTurn() || onlineBlocked;
    button.classList.toggle("full", isFull);
  });
}

function previewColumn(col) {
  elements.columnButtons.querySelectorAll(".column-hit").forEach((button) => {
    button.classList.remove("active", "preview-yellow", "preview-red", "preview-ai", "invalid");
    const buttonCol = Number(button.dataset.col);
    const onlineBlocked = state.mode === "online" && getOnlinePlayerToken() !== state.currentPlayer;
    if (buttonCol === col && state.gameActive && !state.isAnimating && !isAiTurn() && !onlineBlocked && isColumnAvailable(state.board, col)) {
      button.classList.add("active", state.currentPlayer === YELLOW ? "preview-yellow" : "preview-red");
      setActiveColumnMarker(col);
    }
  });
}

function clearColumnPreview() {
  elements.columnButtons.querySelectorAll(".column-hit").forEach((button) => {
    button.classList.remove("active", "preview-yellow", "preview-red", "preview-ai", "invalid");
  });
}

function setActiveColumnMarker(col) {
  elements.columnMarkers.querySelectorAll(".column-marker").forEach((marker) => {
    marker.classList.toggle("active", Number(marker.dataset.col) === col);
  });
}

function highlightWinningPieces(cells) {
  cells.forEach(([row, col], index) => {
    const piece = getCell(row, col).querySelector(".piece");
    if (!piece) return;
    piece.style.setProperty("--win-delay", `${index * 120}ms`);
    piece.classList.add("winning");
  });
}

function animateInvalidColumn(col) {
  const button = elements.columnButtons.querySelector(`.column-hit[data-col="${col}"]`);
  if (!button) return;
  button.classList.add("invalid");
  pulseBoard("board-bump");
  window.setTimeout(() => button.classList.remove("invalid"), 320);
}

function pulseBoard(className) {
  elements.boardFrame.classList.remove("board-bump", "board-win", "board-draw", "board-clutch", "board-blocked");
  void elements.boardFrame.offsetWidth;
  elements.boardFrame.classList.add(className);
  window.setTimeout(() => {
    elements.boardFrame.classList.remove(className);
  }, 620);
}

function triggerBlockedMoment(player) {
  const popup = elements.blockPopup;
  if (!popup) return;
  popup.textContent = "Blocked!";
  popup.classList.remove("show", "yellow", "red");
  popup.classList.add("show", player === YELLOW ? "yellow" : "red");
  popup.setAttribute("aria-hidden", "false");
  playBlockSound();
  pulseBoard("board-blocked");
  setStatus(`${player === YELLOW ? "Yellow" : "Red"} shuts down the threat.`);
  setTip("Clutch defense. A winning line was just denied.");
  window.setTimeout(() => {
    popup.classList.remove("show", "yellow", "red");
    popup.setAttribute("aria-hidden", "true");
  }, 1100);
}

function queueHypeMoment(title, subtitle, tone = "blue") {
  const popup = elements.hypePopup;
  if (!popup) return;
  popup.innerHTML = `<strong>${title}</strong><span>${subtitle}</span>`;
  popup.classList.remove("show", "yellow", "red", "blue");
  void popup.offsetWidth;
  popup.classList.add("show", tone);
  popup.setAttribute("aria-hidden", "false");
  window.setTimeout(() => {
    popup.classList.remove("show", "yellow", "red", "blue");
    popup.setAttribute("aria-hidden", "true");
  }, 1500);
}

function queueAchievementMoment(title, subtitle, tone = "blue", delay = 0) {
  if (state.pendingMomentTimeout) {
    clearTimeout(state.pendingMomentTimeout);
    state.pendingMomentTimeout = null;
  }

  state.pendingMomentTimeout = window.setTimeout(() => {
    queueHypeMoment(title, subtitle, tone);
    playAchievementSound(tone);
    state.pendingMomentTimeout = null;
  }, delay);
}

function queueAchievementForWin(player, row, col, winningCells, scoreGapBeforeWin) {
  const streak = player === YELLOW ? state.streaks.yellow : state.streaks.red;
  if (streak === 3) {
    queueAchievementMoment("Unstoppable", "Three straight wins. Total control.", player === YELLOW ? "yellow" : "red", 1600);
    return;
  }

  if (streak === 2) {
    queueAchievementMoment("Back-to-Back Wins", "Momentum is building fast.", player === YELLOW ? "yellow" : "red", 1600);
    return;
  }

  if (isDiagonalWin(winningCells)) {
    queueAchievementMoment("Diagonal Win", "Clean angle. Hard to stop.", player === YELLOW ? "yellow" : "red", 1600);
    return;
  }

  if (scoreGapBeforeWin >= 2) {
    queueAchievementMoment("Comeback", "Momentum flipped in your favor.", player === YELLOW ? "yellow" : "red", 1600);
    return;
  }

}

function scheduleAiMove() {
  setStatus("Red is thinking...");
  const column = aiMove();
  if (column === null) return;
  previewAiColumn(column);
  playAiThinkingSound();
  aiTimeoutId = window.setTimeout(() => {
    clearAiPreview();
    aiTimeoutId = null;
    performLocalMove(column, RED);
  }, AI_DELAY_MS);
}

function clearPendingAi() {
  if (aiTimeoutId) {
    clearTimeout(aiTimeoutId);
    aiTimeoutId = null;
  }
  clearAiPreview();
}

function previewAiColumn(col) {
  clearAiPreview();
  const button = elements.columnButtons.querySelector(`.column-hit[data-col="${col}"]`);
  if (!button) return;
  button.classList.add("active", "preview-red", "preview-ai");
  setActiveColumnMarker(col);
}

function clearAiPreview() {
  elements.columnButtons.querySelectorAll(".column-hit.preview-ai").forEach((button) => {
    button.classList.remove("active", "preview-red", "preview-ai");
  });
}

function aiMove() {
  const validMoves = getValidColumns(state.board);
  if (!validMoves.length) return null;

  if (state.difficulty === "easy") {
    return chooseCenteredRandom(validMoves);
  }

  if (state.difficulty === "medium") {
    const win = findImmediateWinningMove(state.board, RED);
    if (win !== null) return win;
    const block = findImmediateWinningMove(state.board, YELLOW);
    if (block !== null) return block;
    return scoreMoves(state.board, validMoves, RED)[0].col;
  }

  return chooseBestMoveMinimax(state.board, 5);
}

function chooseCenteredRandom(validMoves) {
  const weighted = [...validMoves].sort((a, b) => Math.abs(3 - a) - Math.abs(3 - b));
  return weighted[Math.floor(Math.random() * Math.min(4, weighted.length))];
}

function chooseBestMoveMinimax(board, depth) {
  const validMoves = getValidColumns(board);
  const immediateWin = findImmediateWinningMove(board, RED);
  if (immediateWin !== null) return immediateWin;

  const blockMove = findImmediateWinningMove(board, YELLOW);
  if (blockMove !== null) return blockMove;

  let bestScore = -Infinity;
  let bestColumn = validMoves[0];

  for (const col of validMoves) {
    const clone = cloneBoard(board);
    const row = getAvailableRow(clone, col);
    clone[row][col] = RED;
    const score = minimax(clone, depth - 1, false, -Infinity, Infinity);
    if (score > bestScore) {
      bestScore = score;
      bestColumn = col;
    }
  }

  return bestColumn;
}

function minimax(board, depth, maximizingPlayer, alpha, beta) {
  const terminal = evaluateTerminalState(board);
  const validMoves = getValidColumns(board);

  if (depth === 0 || terminal.finished) {
    if (terminal.winner === RED) return 100000 + depth;
    if (terminal.winner === YELLOW) return -100000 - depth;
    if (terminal.finished) return 0;
    return scorePosition(board, RED) - scorePosition(board, YELLOW) * 0.92;
  }

  if (maximizingPlayer) {
    let value = -Infinity;
    for (const col of validMoves) {
      const clone = cloneBoard(board);
      const row = getAvailableRow(clone, col);
      clone[row][col] = RED;
      value = Math.max(value, minimax(clone, depth - 1, false, alpha, beta));
      alpha = Math.max(alpha, value);
      if (alpha >= beta) break;
    }
    return value;
  }

  let value = Infinity;
  for (const col of validMoves) {
    const clone = cloneBoard(board);
    const row = getAvailableRow(clone, col);
    clone[row][col] = YELLOW;
    value = Math.min(value, minimax(clone, depth - 1, true, alpha, beta));
    beta = Math.min(beta, value);
    if (alpha >= beta) break;
  }
  return value;
}

function evaluateTerminalState(board) {
  if (hasAnyConnectFour(board, RED)) return { finished: true, winner: RED };
  if (hasAnyConnectFour(board, YELLOW)) return { finished: true, winner: YELLOW };
  if (checkDraw(board)) return { finished: true, winner: EMPTY };
  return { finished: false, winner: EMPTY };
}

function hasAnyConnectFour(board, player) {
  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      if (board[row][col] !== player) continue;
      if (checkWin(board, row, col, player).length) return true;
    }
  }
  return false;
}

function findImmediateWinningMove(board, player) {
  return getImmediateWinningMoves(board, player)[0] ?? null;
}

function getImmediateWinningMoves(board, player) {
  const validMoves = getValidColumns(board);
  const wins = [];
  for (const col of validMoves) {
    const clone = cloneBoard(board);
    const row = getAvailableRow(clone, col);
    clone[row][col] = player;
    if (checkWin(clone, row, col, player).length) wins.push(col);
  }
  return wins;
}

function isBlockingMove(board, col, player) {
  const opponent = player === RED ? YELLOW : RED;
  return getImmediateWinningMoves(board, opponent).includes(col);
}

function hasMatchPointThreat(board, player) {
  return getImmediateWinningMoves(board, player).length > 0;
}

function createsForkThreat(board, player) {
  return getImmediateWinningMoves(board, player).length >= 2;
}

function getValidColumns(board) {
  return Array.from({ length: COLS }, (_, col) => col).filter((col) => isColumnAvailable(board, col));
}

function scoreMoves(board, validMoves, player) {
  return validMoves
    .map((col) => {
      const clone = cloneBoard(board);
      const row = getAvailableRow(clone, col);
      clone[row][col] = player;
      return { col, score: scorePosition(clone, player) };
    })
    .sort((a, b) => b.score - a.score);
}

function scorePosition(board, player) {
  let score = 0;
  const centerCount = board.map((row) => row[3]).filter((cell) => cell === player).length;
  score += centerCount * 6;

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS - 3; col += 1) {
      score += evaluateWindow([board[row][col], board[row][col + 1], board[row][col + 2], board[row][col + 3]], player);
    }
  }

  for (let col = 0; col < COLS; col += 1) {
    for (let row = 0; row < ROWS - 3; row += 1) {
      score += evaluateWindow([board[row][col], board[row + 1][col], board[row + 2][col], board[row + 3][col]], player);
    }
  }

  for (let row = 0; row < ROWS - 3; row += 1) {
    for (let col = 0; col < COLS - 3; col += 1) {
      score += evaluateWindow([board[row][col], board[row + 1][col + 1], board[row + 2][col + 2], board[row + 3][col + 3]], player);
    }
  }

  for (let row = 0; row < ROWS - 3; row += 1) {
    for (let col = 3; col < COLS; col += 1) {
      score += evaluateWindow([board[row][col], board[row + 1][col - 1], board[row + 2][col - 2], board[row + 3][col - 3]], player);
    }
  }

  return score;
}

function evaluateWindow(windowCells, player) {
  const opponent = player === RED ? YELLOW : RED;
  const ownCount = windowCells.filter((cell) => cell === player).length;
  const emptyCount = windowCells.filter((cell) => cell === EMPTY).length;
  const opponentCount = windowCells.filter((cell) => cell === opponent).length;

  let score = 0;
  if (ownCount === 4) score += 100;
  else if (ownCount === 3 && emptyCount === 1) score += 12;
  else if (ownCount === 2 && emptyCount === 2) score += 4;
  if (opponentCount === 3 && emptyCount === 1) score -= 16;
  return score;
}

function checkWin(board, row, col, player) {
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (const [rowStep, colStep] of directions) {
    const cells = [[row, col]];
    cells.unshift(...collectDirection(board, row, col, -rowStep, -colStep, player));
    cells.push(...collectDirection(board, row, col, rowStep, colStep, player));
    if (cells.length >= 4) return cells.slice(0, 4);
  }

  return [];
}

function collectDirection(board, row, col, rowStep, colStep, player) {
  const cells = [];
  let nextRow = row + rowStep;
  let nextCol = col + colStep;

  while (isWithinBounds(nextRow, nextCol) && board[nextRow][nextCol] === player) {
    cells.push([nextRow, nextCol]);
    nextRow += rowStep;
    nextCol += colStep;
  }

  return cells;
}

function createdThreat(row, col, player) {
  return getLongestLine(state.board, row, col, player) >= 3;
}

function getLongestLine(board, row, col, player) {
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  let longest = 1;
  for (const [rowStep, colStep] of directions) {
    const total =
      1 +
      collectDirection(board, row, col, -rowStep, -colStep, player).length +
      collectDirection(board, row, col, rowStep, colStep, player).length;
    longest = Math.max(longest, total);
  }
  return longest;
}

function checkDraw(board) {
  return board.every((row) => row.every((cell) => cell !== EMPTY));
}

function getAvailableRow(board, col) {
  for (let row = ROWS - 1; row >= 0; row -= 1) {
    if (board[row][col] === EMPTY) return row;
  }
  return -1;
}

function isColumnAvailable(board, col) {
  return board[0][col] === EMPTY;
}

function isWithinBounds(row, col) {
  return row >= 0 && row < ROWS && col >= 0 && col < COLS;
}

function getCell(row, col) {
  return elements.board.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
}

function createEmptyBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(EMPTY));
}

function serializeBoardForFirestore(board) {
  return board.map((row) => row.join(""));
}

function deserializeBoardFromFirestore(value) {
  if (Array.isArray(value) && value.every((row) => typeof row === "string")) {
    const board = value.map((row) =>
      row
        .split("")
        .slice(0, COLS)
        .map((cell) => {
          const parsed = Number(cell);
          return Number.isFinite(parsed) ? parsed : EMPTY;
        })
    );

    if (board.length === ROWS && board.every((row) => row.length === COLS)) {
      return board;
    }
  }

  if (Array.isArray(value) && value.every((row) => Array.isArray(row))) {
    return cloneBoard(value).map((row) =>
      row.slice(0, COLS).map((cell) => {
        const parsed = Number(cell);
        return Number.isFinite(parsed) ? parsed : EMPTY;
      })
    );
  }

  return createEmptyBoard();
}

function cloneBoard(board) {
  return board.map((row) => [...row]);
}

function countBoardMoves(board) {
  return board.flat().filter((cell) => cell !== EMPTY).length;
}

function getDropDuration(row) {
  return 260 + (ROWS - row - 1) * 56;
}

function isDiagonalWin(cells) {
  if (cells.length !== 4) return false;
  const sorted = [...cells].sort((a, b) => a[1] - b[1]);
  const rowStep = sorted[1][0] - sorted[0][0];
  const colStep = sorted[1][1] - sorted[0][1];
  if (Math.abs(rowStep) !== 1 || Math.abs(colStep) !== 1) return false;
  return sorted.every((cell, index) => {
    if (index === 0) return true;
    return cell[0] - sorted[index - 1][0] === rowStep && cell[1] - sorted[index - 1][1] === colStep;
  });
}

function isAiTurn() {
  return state.mode === "ai" && state.currentPlayer === RED && state.gameActive;
}

function getDefaultTip() {
  if (state.mode === "online") {
    return "Online room mode uses Firebase realtime sync for each move.";
  }
  return state.mode === "ai"
    ? "Watch the center columns. Hard AI values central control."
    : "Control the center columns to create more winning opportunities.";
}

function setTip(text) {
  elements.tipText.textContent = text;
}

function setStatus(text) {
  elements.statusText.textContent = text;
}

function getDefaultStatus() {
  if (state.mode === "online" && state.online.roomData?.status === "waiting") {
    return "Waiting for your friend.";
  }
  if (state.mode === "online" && !state.gameActive) {
    return "Online room ready.";
  }
  if (state.mode === "ai" && isAiTurn()) {
    return "Red is thinking...";
  }
  return `${state.currentPlayer === YELLOW ? "Yellow" : "Red"} to move.`;
}

function startRoundTimer() {
  stopRoundTimer();
  state.timerId = window.setInterval(updateRoundTimer, 1000);
}

function stopRoundTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateRoundTimer() {
  if (!state.roundStartedAt) {
    elements.timeElapsed.textContent = "0m 00s";
    return;
  }

  const elapsedSeconds = Math.floor((Date.now() - state.roundStartedAt) / 1000);
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = String(elapsedSeconds % 60).padStart(2, "0");
  elements.timeElapsed.textContent = `${minutes}m ${seconds}s`;
}

function updateMoveInfo() {
  elements.movesMade.textContent = `${state.movesMade} move${state.movesMade === 1 ? "" : "s"}`;
}

function updateScoreboard() {
  elements.redScore.textContent = String(state.scores.red);
  elements.yellowScore.textContent = String(state.scores.yellow);
  elements.drawScore.textContent = String(state.scores.draws);
}

function updateStreakUI() {
  const yellowStreak = state.streaks.yellow;
  const redStreak = state.streaks.red;
  elements.yellowStreakBadge.classList.toggle("hidden", yellowStreak < 2);
  elements.redStreakBadge.classList.toggle("hidden", redStreak < 2);
  elements.yellowStreakBadge.setAttribute("aria-hidden", String(yellowStreak < 2));
  elements.redStreakBadge.setAttribute("aria-hidden", String(redStreak < 2));
  elements.yellowStreakValue.textContent = `x${yellowStreak}`;
  elements.redStreakValue.textContent = `x${redStreak}`;

  if (yellowStreak >= 2) {
    animateRewardCard(elements.yellowStreakBadge, "streak-pop");
  }

  if (redStreak >= 2) {
    animateRewardCard(elements.redStreakBadge, "streak-pop");
  }
}

function updateStreaksForWinner(player) {
  if (player === YELLOW) {
    state.streaks.yellow += 1;
    state.streaks.red = 0;
  } else {
    state.streaks.red += 1;
    state.streaks.yellow = 0;
  }
}

function resetLocalStreaks() {
  state.streaks.yellow = 0;
  state.streaks.red = 0;
  updateStreakUI();
}

function saveScore() {
  localStorage.setItem(SCORE_KEY, JSON.stringify({ ...state.scores }));
}

function loadScore() {
  try {
    const saved = JSON.parse(localStorage.getItem(SCORE_KEY) || "null");
    if (saved) {
      state.scores.red = Number(saved.red) || 0;
      state.scores.yellow = Number(saved.yellow) || 0;
      state.scores.draws = Number(saved.draws) || 0;
    }
  } catch (error) {
    console.warn("Unable to load score.", error);
  }
}

function saveSettings() {
  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify({
      isMuted: state.isMuted,
      sfxVolume: state.sfxVolume,
      musicVolume: state.musicVolume,
      difficulty: state.difficulty,
      mode: state.mode,
      joinCode: elements.joinCodeInput.value,
    })
  );
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "null");
    if (!saved) return;
    state.isMuted = Boolean(saved.isMuted);
    state.sfxVolume = clamp01(Number(saved.sfxVolume));
    state.musicVolume = clamp01(Number(saved.musicVolume));
    state.difficulty = ["easy", "medium", "hard"].includes(saved.difficulty) ? saved.difficulty : "medium";
    state.mode = ["pvp", "ai", "online"].includes(saved.mode) ? saved.mode : "ai";
    elements.joinCodeInput.value = sanitizeRoomCode(saved.joinCode || "");
  } catch (error) {
    console.warn("Unable to load settings.", error);
  }
}

function sanitizeRoomCode(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 8);
}

function generateRoomCode() {
  return Math.random().toString(36).toUpperCase().slice(2, 8);
}

function updateOnlineRoomUI(message) {
  elements.onlineRoomStatus.textContent = message;
  elements.roomCodeDisplay.textContent = state.online.roomId || "No room yet";
  elements.copyRoomButton.disabled = !state.online.roomId;
  elements.roomCodeDisplay.classList.toggle("room-code-live", Boolean(state.online.roomId));
  elements.roomCodeMeta.textContent = state.online.roomId
    ? state.online.roomData?.guestId
      ? "Friend connected. Ready for the next drop."
      : "Share this code with your friend to join the room."
    : "Create a room and send the code to your friend.";
}

function getFirebaseErrorMessage(error) {
  const code = error?.code || "";
  if (code === "permission-denied") {
    return "Firestore rules blocked it. Publish the room rules in Firebase.";
  }
  if (code === "unauthenticated") {
    return "Anonymous sign-in is not enabled yet.";
  }
  if (code === "unavailable") {
    return "Firebase is temporarily unavailable. Try again in a moment.";
  }
  if (code === "failed-precondition") {
    return "Firestore still needs setup in the Firebase console.";
  }
  return error?.message || "Unknown Firebase error.";
}

function openPanel(panelName) {
  primeAudio();
  clickSound();
  closePanels();
  state.openPanel = panelName;
  elements.modalBackdrop.classList.remove("hidden");
  elements[panelName].classList.remove("hidden");
  if (panelName === "settingsPanel") {
    syncAudioControls();
  }
}

function closePanels() {
  state.openPanel = null;
  elements.modalBackdrop.classList.add("hidden");
  elements.howToPlayPanel.classList.add("hidden");
  elements.settingsPanel.classList.add("hidden");
  elements.resultPanel.classList.add("hidden");
  elements.resultBadge.classList.remove("yellow", "red", "blue", "draw", "burst");
}

function showResult(title, message) {
  elements.resultTitle.textContent = title;
  elements.resultMessage.textContent = message;
  openPanel("resultPanel");
}

function configureResultBadge(type, streak = 0) {
  const badge = elements.resultBadge;
  const icon = elements.resultBadgeIcon;
  badge.classList.remove("yellow", "red", "blue", "draw", "burst");

  if (type === "yellow") {
    icon.textContent = streak >= 2 ? "✦" : "★";
    badge.classList.add("yellow", "burst");
    return;
  }

  if (type === "red") {
    icon.textContent = streak >= 2 ? "✦" : "★";
    badge.classList.add("red", "burst");
    return;
  }

  if (type === "draw") {
    icon.textContent = "•";
    badge.classList.add("draw", "burst");
    return;
  }

  icon.textContent = "★";
  badge.classList.add("blue");
}

function animateRewardCard(element, className = "score-pop") {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), 760);
}

function celebrateScore(type) {
  if (type === "yellow") {
    animateRewardCard(elements.yellowPlayerCard, "score-pop");
    return;
  }

  if (type === "red") {
    animateRewardCard(elements.redPlayerCard, "score-pop");
    return;
  }

  animateRewardCard(document.querySelector(".promo-card"), "score-pop");
}

function toggleMute() {
  primeAudio();
  state.isMuted = !state.isMuted;
  updateAudioUI();
  clickSound();
  saveSettings();
}

function updateAudioUI() {
  elements.muteButton.setAttribute("aria-pressed", String(state.isMuted));
  elements.gameMuteButton.setAttribute("aria-pressed", String(state.isMuted));
  elements.muteLabel.textContent = state.isMuted ? "Muted" : "Sound On";
  elements.gameMuteButton.textContent = state.isMuted ? "Off" : "On";
  elements.settingsMuteButton.textContent = state.isMuted ? "Unmute SFX" : "Mute SFX";
}

function syncAudioControls() {
  elements.sfxVolumeInput.value = String(Math.round(state.sfxVolume * 100));
  elements.musicVolumeInput.value = String(Math.round(state.musicVolume * 100));
}

function handleSfxVolumeChange(event) {
  state.sfxVolume = clamp01(Number(event.target.value) / 100);
  saveSettings();
}

function handleMusicVolumeChange(event) {
  state.musicVolume = clamp01(Number(event.target.value) / 100);
  saveSettings();
}

function clamp01(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.min(1, Math.max(0, value));
}

function primeAudio() {
  if (audioEngine.unlocked) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioEngine.ctx = new AudioContextClass();
  audioEngine.unlocked = true;
}

function playToneSequence(tones) {
  if (state.isMuted || !audioEngine.unlocked || !audioEngine.ctx) return;
  const now = audioEngine.ctx.currentTime;
  tones.forEach(({ frequency, duration, type, volume, delay = 0 }) => {
    const start = now + delay;
    const end = start + duration;
    const oscillator = audioEngine.ctx.createOscillator();
    const gainNode = audioEngine.ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gainNode.gain.setValueAtTime(0.0001, start);
    gainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume * state.sfxVolume), start + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, end);

    oscillator.connect(gainNode);
    gainNode.connect(audioEngine.ctx.destination);
    oscillator.start(start);
    oscillator.stop(end + 0.02);
  });
}

function clickSound() {
  playToneSequence([
    { frequency: 580, duration: 0.03, type: "triangle", volume: 0.025 },
    { frequency: 720, duration: 0.04, type: "triangle", volume: 0.02, delay: 0.01 },
  ]);
}

function playDropSound(row) {
  playToneSequence([
    { frequency: 460 - row * 20, duration: 0.03, type: "triangle", volume: 0.035 },
    { frequency: 300 - row * 8, duration: 0.06, type: "sine", volume: 0.038, delay: 0.02 },
    { frequency: 150 + row * 3, duration: 0.1, type: "triangle", volume: 0.026, delay: 0.055 },
  ]);
}

function playTurnSound(player) {
  playToneSequence([
    { frequency: player === YELLOW ? 520 : 430, duration: 0.04, type: "triangle", volume: 0.02 },
    { frequency: player === YELLOW ? 660 : 520, duration: 0.05, type: "sine", volume: 0.018, delay: 0.025 },
  ]);
}

function playInvalidSound() {
  playToneSequence([
    { frequency: 220, duration: 0.05, type: "sawtooth", volume: 0.02 },
    { frequency: 168, duration: 0.08, type: "triangle", volume: 0.018, delay: 0.03 },
  ]);
}

function playAiThinkingSound() {
  playToneSequence([
    { frequency: 370, duration: 0.035, type: "sine", volume: 0.017 },
    { frequency: 494, duration: 0.04, type: "sine", volume: 0.015, delay: 0.05 },
  ]);
}

function playWinSound() {
  playToneSequence([
    { frequency: 392, duration: 0.08, type: "triangle", volume: 0.045 },
    { frequency: 494, duration: 0.08, type: "triangle", volume: 0.048, delay: 0.1 },
    { frequency: 587, duration: 0.12, type: "triangle", volume: 0.05, delay: 0.2 },
    { frequency: 784, duration: 0.2, type: "sine", volume: 0.06, delay: 0.34 },
  ]);
}

function playDrawSound() {
  playToneSequence([
    { frequency: 280, duration: 0.08, type: "sine", volume: 0.032 },
    { frequency: 246, duration: 0.08, type: "triangle", volume: 0.028, delay: 0.08 },
    { frequency: 220, duration: 0.12, type: "sine", volume: 0.026, delay: 0.16 },
  ]);
}

function playBlockSound() {
  playToneSequence([
    { frequency: 300, duration: 0.05, type: "triangle", volume: 0.024 },
    { frequency: 405, duration: 0.06, type: "triangle", volume: 0.026, delay: 0.04 },
    { frequency: 250, duration: 0.09, type: "sine", volume: 0.018, delay: 0.075 },
  ]);
}

function playMatchPointSound(player) {
  playToneSequence([
    { frequency: player === YELLOW ? 520 : 430, duration: 0.05, type: "triangle", volume: 0.024 },
    { frequency: player === YELLOW ? 680 : 560, duration: 0.08, type: "sine", volume: 0.022, delay: 0.05 },
  ]);
}

function playStreakSound(streak) {
  const lift = Math.min(4, streak) * 18;
  playToneSequence([
    { frequency: 392, duration: 0.05, type: "triangle", volume: 0.028 },
    { frequency: 494, duration: 0.06, type: "triangle", volume: 0.03, delay: 0.05 },
    { frequency: 587 + lift, duration: 0.1, type: "sine", volume: 0.032, delay: 0.11 },
  ]);
}

function playPressureSound(player) {
  playToneSequence([
    { frequency: player === YELLOW ? 466 : 350, duration: 0.04, type: "triangle", volume: 0.02 },
    { frequency: player === YELLOW ? 554 : 415, duration: 0.05, type: "triangle", volume: 0.024, delay: 0.04 },
    { frequency: player === YELLOW ? 698 : 523, duration: 0.08, type: "sine", volume: 0.02, delay: 0.085 },
  ]);
}

function playAchievementSound(tone) {
  const base = tone === "yellow" ? 560 : tone === "red" ? 450 : 510;
  playToneSequence([
    { frequency: base, duration: 0.035, type: "triangle", volume: 0.018 },
    { frequency: base * 1.26, duration: 0.05, type: "sine", volume: 0.02, delay: 0.045 },
  ]);
}

function playConnectionSound() {
  playToneSequence([
    { frequency: 420, duration: 0.04, type: "triangle", volume: 0.02 },
    { frequency: 560, duration: 0.05, type: "triangle", volume: 0.022, delay: 0.04 },
    { frequency: 720, duration: 0.08, type: "sine", volume: 0.024, delay: 0.09 },
  ]);
}

function playYourTurnSound() {
  playToneSequence([
    { frequency: 520, duration: 0.04, type: "triangle", volume: 0.02 },
    { frequency: 660, duration: 0.05, type: "sine", volume: 0.02, delay: 0.035 },
  ]);
}

function playReactionSound() {
  playToneSequence([
    { frequency: 610, duration: 0.03, type: "triangle", volume: 0.016 },
    { frequency: 760, duration: 0.04, type: "triangle", volume: 0.014, delay: 0.025 },
  ]);
}

function playHoverTick(col) {
  const now = performance.now();
  if (col === state.lastHoverCol && now - state.lastHoverSoundAt < 120) return;
  state.lastHoverCol = col;
  state.lastHoverSoundAt = now;
  primeAudio();
  playToneSequence([{ frequency: 760, duration: 0.018, type: "triangle", volume: 0.012 }]);
}

function playUiHoverTick() {
  const now = performance.now();
  if (now - state.lastHoverSoundAt < 80) return;
  state.lastHoverSoundAt = now;
  primeAudio();
  playToneSequence([{ frequency: 690, duration: 0.015, type: "triangle", volume: 0.01 }]);
}

function ensureAmbientAudio() {
  return;
}

function resizeConfettiCanvas() {
  const rect = elements.confettiCanvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  elements.confettiCanvas.width = rect.width * dpr;
  elements.confettiCanvas.height = rect.height * dpr;
  const ctx = elements.confettiCanvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function launchConfetti(color) {
  stopConfetti();
  resizeConfettiCanvas();
  const canvas = elements.confettiCanvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const pieces = Array.from({ length: 110 }, () => ({
    x: Math.random() * width,
    y: -20 - Math.random() * height * 0.25,
    vx: -2 + Math.random() * 4,
    vy: 2 + Math.random() * 4.5,
    size: 5 + Math.random() * 8,
    rotation: Math.random() * Math.PI,
    spin: -0.15 + Math.random() * 0.3,
    color: Math.random() > 0.5 ? color : "#ffffff",
  }));

  let ticks = 0;
  const render = () => {
    ctx.clearRect(0, 0, width, height);
    pieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.rotation += piece.spin;
      piece.vy += 0.035;
      ctx.save();
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.65);
      ctx.restore();
    });
    ticks += 1;
    if (ticks < 180) {
      confettiFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
    }
  };

  confettiFrame = requestAnimationFrame(render);
}

function stopConfetti() {
  if (confettiFrame) {
    cancelAnimationFrame(confettiFrame);
    confettiFrame = 0;
  }
  const ctx = elements.confettiCanvas.getContext("2d");
  ctx.clearRect(0, 0, elements.confettiCanvas.clientWidth, elements.confettiCanvas.clientHeight);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
