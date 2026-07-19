const boardElement = document.getElementById("board");
const turnIndicator = document.getElementById("turnIndicator");
const statusText = document.getElementById("statusText");
const checkText = document.getElementById("checkText");
const gameMetaText = document.getElementById("gameMetaText");
const capturedByWhite = document.getElementById("capturedByWhite");
const capturedByBlack = document.getElementById("capturedByBlack");
const capturedByWhiteCount = document.getElementById("capturedByWhiteCount");
const capturedByBlackCount = document.getElementById("capturedByBlackCount");
const capturedByWhiteEdge = document.getElementById("capturedByWhiteEdge");
const capturedByBlackEdge = document.getElementById("capturedByBlackEdge");
const restartButton = document.getElementById("restartButton");
const undoButton = document.getElementById("undoButton");
const inlineNewGameButton = document.getElementById("resultRestartButtonInline");
const promotionModal = document.getElementById("promotionModal");
const promotionOptions = document.getElementById("promotionOptions");
const resultBanner = document.getElementById("resultBanner");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const resultRestartButton = document.getElementById("resultRestartButton");
const sessionTimer = document.getElementById("sessionTimer");
const turnBadge = document.getElementById("turnBadge");
const soundButton = document.getElementById("soundButton");
const boardWrapper = document.querySelector(".board-wrapper");
const boardEffects = document.getElementById("boardEffects");
const boardParticles = document.getElementById("boardParticles");
const menuButton = document.getElementById("menuButton");
const themeButton = document.getElementById("themeButton");
const perspectiveButton = document.getElementById("perspectiveButton");
const settingsButton = document.getElementById("settingsButton");
const profileButton = document.getElementById("profileButton");
const controlDrawer = document.getElementById("controlDrawer");
const drawerTitle = document.getElementById("drawerTitle");
const drawerContent = document.getElementById("drawerContent");
const drawerCloseButton = document.getElementById("drawerCloseButton");
const menuScreen = document.getElementById("menuScreen");
const menuSummary = document.getElementById("menuSummary");
const startGameButton = document.getElementById("startGameButton");
const resumeGameButton = document.getElementById("resumeGameButton");
const menuModeComputer = document.getElementById("menuModeComputer");
const menuModeLocal = document.getElementById("menuModeLocal");
const menuColorWhite = document.getElementById("menuColorWhite");
const menuColorBlack = document.getElementById("menuColorBlack");
const menuDifficultyQuick = document.getElementById("menuDifficultyQuick");
const menuDifficultyBalanced = document.getElementById("menuDifficultyBalanced");
const menuDifficultySharp = document.getElementById("menuDifficultySharp");

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];
const START_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
const PIECES = {
  w: {
    king: "\u2654",
    queen: "\u2655",
    rook: "\u2656",
    bishop: "\u2657",
    knight: "\u2658",
    pawn: "\u2659",
  },
  b: {
    king: "\u265A",
    queen: "\u265B",
    rook: "\u265C",
    bishop: "\u265D",
    knight: "\u265E",
    pawn: "\u265F",
  },
};

let gameState = createInitialState();
let pendingPromotion = null;
let sessionStartedAt = Date.now();
let aiTurnTimeoutId = null;
let activeBoardEffects = [];
let soundContext = null;
const uiState = {
  drawer: null,
  boardFlipped: false,
  cinematicMode: true,
  showCoordinates: true,
  showLegalHints: true,
  menuOpen: true,
  soundsEnabled: true,
};
const aiState = {
  enabled: true,
  humanColor: "w",
  computerColor: "b",
  thinking: false,
  difficulty: "balanced",
};

function createInitialState() {
  return {
    board: boardFromFen(START_FEN),
    currentPlayer: "w",
    selectedSquare: null,
    legalTargets: [],
    capturedByWhite: [],
    capturedByBlack: [],
    moveHistory: [],
    snapshots: [],
    enPassantTarget: null,
    castlingRights: {
      w: { kingSide: true, queenSide: true },
      b: { kingSide: true, queenSide: true },
    },
    halfmoveClock: 0,
    fullmoveNumber: 1,
    lastMove: null,
    gameOver: null,
    check: null,
    positionCounts: {},
  };
}

function boardFromFen(fen) {
  return fen.split("/").map((row) => {
    const squares = [];
    for (const char of row) {
      if (Number.isInteger(Number(char))) {
        for (let i = 0; i < Number(char); i += 1) {
          squares.push(null);
        }
      } else {
        const color = char === char.toUpperCase() ? "w" : "b";
        squares.push({
          color,
          type: fenCharToType(char.toLowerCase()),
          hasMoved: false,
        });
      }
    }
    return squares;
  });
}

function fenCharToType(char) {
  return {
    k: "king",
    q: "queen",
    r: "rook",
    b: "bishop",
    n: "knight",
    p: "pawn",
  }[char];
}

function cloneState(state) {
  return JSON.parse(JSON.stringify(state));
}

function getPositionState() {
  return {
    board: gameState.board,
    enPassantTarget: gameState.enPassantTarget,
    castlingRights: gameState.castlingRights,
  };
}

function squareName(row, col) {
  return `${FILES[col]}${8 - row}`;
}

function encodePositionKey(position, currentPlayer) {
  const boardKey = position.board
    .map((row) =>
      row
        .map((piece) => {
          if (!piece) {
            return ".";
          }
          const symbol = {
            king: "k",
            queen: "q",
            rook: "r",
            bishop: "b",
            knight: "n",
            pawn: "p",
          }[piece.type];
          return piece.color === "w" ? symbol.toUpperCase() : symbol;
        })
        .join("")
    )
    .join("/");
  const castlingKey = ["w", "b"]
    .map(
      (color) =>
        `${color}:${position.castlingRights[color].kingSide ? "K" : ""}${
          position.castlingRights[color].queenSide ? "Q" : ""
        }`
    )
    .join("|");
  const enPassantKey = position.enPassantTarget
    ? `${position.enPassantTarget.row},${position.enPassantTarget.col}`
    : "-";
  return `${boardKey}|${currentPlayer}|${castlingKey}|${enPassantKey}`;
}

function recordCurrentPosition() {
  const key = encodePositionKey(getPositionState(), gameState.currentPlayer);
  gameState.positionCounts[key] = (gameState.positionCounts[key] || 0) + 1;
}

function isInsideBoard(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function getPiece(row, col, board = gameState.board) {
  if (!isInsideBoard(row, col)) {
    return null;
  }
  return board[row][col];
}

function createSnapshot() {
  return {
    board: cloneState(gameState.board),
    currentPlayer: gameState.currentPlayer,
    capturedByWhite: [...gameState.capturedByWhite],
    capturedByBlack: [...gameState.capturedByBlack],
    moveHistory: [...gameState.moveHistory],
    enPassantTarget: gameState.enPassantTarget,
    castlingRights: cloneState(gameState.castlingRights),
    halfmoveClock: gameState.halfmoveClock,
    fullmoveNumber: gameState.fullmoveNumber,
    lastMove: gameState.lastMove ? { ...gameState.lastMove } : null,
    check: gameState.check,
    gameOver: gameState.gameOver ? { ...gameState.gameOver } : null,
    positionCounts: cloneState(gameState.positionCounts),
  };
}

function resetSelection() {
  gameState.selectedSquare = null;
  gameState.legalTargets = [];
}

function resetGame() {
  clearAiTurnTimeout();
  activeBoardEffects = [];
  gameState = createInitialState();
  recordCurrentPosition();
  pendingPromotion = null;
  sessionStartedAt = Date.now();
  closePromotion();
  closeResultBanner();
  updateGameStatus();
  render();
  maybeTriggerComputerTurn();
}

function undoMove() {
  if (
    pendingPromotion ||
    gameState.snapshots.length === 0 ||
    aiState.thinking
  ) {
    return;
  }

  activeBoardEffects = [];
  const undoCount =
    aiState.enabled &&
    gameState.currentPlayer === aiState.humanColor &&
    gameState.snapshots.length >= 2
      ? 2
      : 1;

  for (let i = 0; i < undoCount; i += 1) {
    restoreSnapshot(gameState.snapshots.pop());
  }

  closePromotion();
  closeResultBanner();
  resetSelection();
  updateGameStatus();
  render();
  maybeTriggerComputerTurn();
}

function restoreSnapshot(snapshot) {
  if (!snapshot) {
    return;
  }
  gameState.board = snapshot.board;
  gameState.currentPlayer = snapshot.currentPlayer;
  gameState.capturedByWhite = snapshot.capturedByWhite;
  gameState.capturedByBlack = snapshot.capturedByBlack;
  gameState.moveHistory = snapshot.moveHistory;
  gameState.enPassantTarget = snapshot.enPassantTarget;
  gameState.castlingRights = snapshot.castlingRights;
  gameState.halfmoveClock = snapshot.halfmoveClock;
  gameState.fullmoveNumber = snapshot.fullmoveNumber;
  gameState.lastMove = snapshot.lastMove;
  gameState.check = snapshot.check;
  gameState.gameOver = snapshot.gameOver;
  gameState.positionCounts = snapshot.positionCounts || {};
}

function handleSquareClick(row, col) {
  if (
    pendingPromotion ||
    gameState.gameOver ||
    aiState.thinking ||
    (aiState.enabled && gameState.currentPlayer !== aiState.humanColor)
  ) {
    return;
  }

  const clickedPiece = getPiece(row, col);
  const selected = gameState.selectedSquare;
  const clickedTarget = gameState.legalTargets.find(
    (move) => move.to.row === row && move.to.col === col
  );

  if (selected && clickedTarget) {
    if (clickedTarget.requiresPromotion) {
      pendingPromotion = clickedTarget;
      playSound("menu");
      openPromotion(clickedTarget.piece.color);
      return;
    }
    commitMove(clickedTarget);
    return;
  }

  if (clickedPiece && clickedPiece.color === gameState.currentPlayer) {
    playSound("menu");
    gameState.selectedSquare = { row, col };
    gameState.legalTargets = getLegalMovesForSquare(row, col);
  } else {
    resetSelection();
  }

  render();
}

function getLegalMovesForSquare(row, col) {
  const piece = getPiece(row, col);
  if (!piece || piece.color !== gameState.currentPlayer) {
    return [];
  }

  return generateAllLegalMoves(getPositionState(), piece.color).filter(
    (move) => move.from.row === row && move.from.col === col
  );
}

function generateAllLegalMoves(position, color) {
  const pseudoMoves = [];
  const { board } = position;

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = board[row][col];
      if (!piece || piece.color !== color) {
        continue;
      }
      pseudoMoves.push(...generatePseudoMoves(position, row, col, piece));
    }
  }

  return pseudoMoves.filter((move) => {
    const simulation = simulatePosition(position, move);
    return !isKingInCheck(simulation.board, color);
  });
}

function generatePseudoMoves(position, row, col, piece) {
  const moves = [];
  const { board, enPassantTarget, castlingRights } = position;
  const forward = piece.color === "w" ? -1 : 1;
  const opponent = piece.color === "w" ? "b" : "w";

  if (piece.type === "pawn") {
    const oneAhead = row + forward;
    if (isInsideBoard(oneAhead, col) && !getPiece(oneAhead, col, board)) {
      moves.push(
        createMove(row, col, oneAhead, col, piece, null, {
          requiresPromotion: oneAhead === 0 || oneAhead === 7,
        })
      );

      const startRow = piece.color === "w" ? 6 : 1;
      const twoAhead = row + forward * 2;
      if (row === startRow && !getPiece(twoAhead, col, board)) {
        moves.push(createMove(row, col, twoAhead, col, piece, null, { isDoubleStep: true }));
      }
    }

    for (const offset of [-1, 1]) {
      const targetRow = row + forward;
      const targetCol = col + offset;
      if (!isInsideBoard(targetRow, targetCol)) {
        continue;
      }

      const targetPiece = getPiece(targetRow, targetCol, board);
      if (targetPiece && targetPiece.color === opponent) {
        moves.push(
          createMove(row, col, targetRow, targetCol, piece, targetPiece, {
            requiresPromotion: targetRow === 0 || targetRow === 7,
          })
        );
      }

      if (
        enPassantTarget &&
        enPassantTarget.row === targetRow &&
        enPassantTarget.col === targetCol
      ) {
        const capturedPawn = getPiece(row, targetCol, board);
        if (capturedPawn && capturedPawn.color === opponent && capturedPawn.type === "pawn") {
          moves.push(
            createMove(row, col, targetRow, targetCol, piece, capturedPawn, {
              isEnPassant: true,
              capturedSquare: { row, col: targetCol },
            })
          );
        }
      }
    }
  }

  if (piece.type === "knight") {
    const jumps = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    for (const [dr, dc] of jumps) {
      addTargetMove(board, moves, row, col, row + dr, col + dc, piece);
    }
  }

  if (piece.type === "bishop" || piece.type === "rook" || piece.type === "queen") {
    const directions = [];
    if (piece.type === "bishop" || piece.type === "queen") {
      directions.push([-1, -1], [-1, 1], [1, -1], [1, 1]);
    }
    if (piece.type === "rook" || piece.type === "queen") {
      directions.push([-1, 0], [1, 0], [0, -1], [0, 1]);
    }

    for (const [dr, dc] of directions) {
      let targetRow = row + dr;
      let targetCol = col + dc;
      while (isInsideBoard(targetRow, targetCol)) {
        const occupant = getPiece(targetRow, targetCol, board);
        if (!occupant) {
          moves.push(createMove(row, col, targetRow, targetCol, piece));
        } else {
          if (occupant.color !== piece.color) {
            moves.push(createMove(row, col, targetRow, targetCol, piece, occupant));
          }
          break;
        }
        targetRow += dr;
        targetCol += dc;
      }
    }
  }

  if (piece.type === "king") {
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) {
          continue;
        }
        addTargetMove(board, moves, row, col, row + dr, col + dc, piece);
      }
    }

    if (!piece.hasMoved && !isKingInCheck(board, piece.color)) {
      const rights = castlingRights[piece.color];
      const backRank = piece.color === "w" ? 7 : 0;
      if (
        rights.kingSide &&
        !getPiece(backRank, 5, board) &&
        !getPiece(backRank, 6, board) &&
        !isSquareAttacked(board, backRank, 5, opponent) &&
        !isSquareAttacked(board, backRank, 6, opponent)
      ) {
        const rook = getPiece(backRank, 7, board);
        if (rook && rook.type === "rook" && rook.color === piece.color && !rook.hasMoved) {
          moves.push(
            createMove(row, col, backRank, 6, piece, null, {
              isCastle: true,
              rookFrom: { row: backRank, col: 7 },
              rookTo: { row: backRank, col: 5 },
            })
          );
        }
      }

      if (
        rights.queenSide &&
        !getPiece(backRank, 1, board) &&
        !getPiece(backRank, 2, board) &&
        !getPiece(backRank, 3, board) &&
        !isSquareAttacked(board, backRank, 2, opponent) &&
        !isSquareAttacked(board, backRank, 3, opponent)
      ) {
        const rook = getPiece(backRank, 0, board);
        if (rook && rook.type === "rook" && rook.color === piece.color && !rook.hasMoved) {
          moves.push(
            createMove(row, col, backRank, 2, piece, null, {
              isCastle: true,
              rookFrom: { row: backRank, col: 0 },
              rookTo: { row: backRank, col: 3 },
            })
          );
        }
      }
    }
  }

  return moves;
}

function addTargetMove(board, moves, fromRow, fromCol, toRow, toCol, piece) {
  if (!isInsideBoard(toRow, toCol)) {
    return;
  }
  const occupant = getPiece(toRow, toCol, board);
  if (!occupant) {
    moves.push(createMove(fromRow, fromCol, toRow, toCol, piece));
  } else if (occupant.color !== piece.color) {
    moves.push(createMove(fromRow, fromCol, toRow, toCol, piece, occupant));
  }
}

function createMove(fromRow, fromCol, toRow, toCol, piece, capturedPiece = null, extra = {}) {
  return {
    from: { row: fromRow, col: fromCol },
    to: { row: toRow, col: toCol },
    piece: { color: piece.color, type: piece.type },
    capturedPiece: capturedPiece
      ? { color: capturedPiece.color, type: capturedPiece.type }
      : null,
    requiresPromotion: false,
    promotionChoice: null,
    ...extra,
  };
}

function applyCastlingRights(castlingRights, move, movingPiece, capturedPiece) {
  const nextRights = cloneState(castlingRights);

  if (movingPiece.type === "king") {
    nextRights[movingPiece.color].kingSide = false;
    nextRights[movingPiece.color].queenSide = false;
  }

  if (movingPiece.type === "rook") {
    if (move.from.col === 0) {
      nextRights[movingPiece.color].queenSide = false;
    }
    if (move.from.col === 7) {
      nextRights[movingPiece.color].kingSide = false;
    }
  }

  if (capturedPiece && capturedPiece.type === "rook") {
    const opponent = movingPiece.color === "w" ? "b" : "w";
    if (move.to.row === (opponent === "w" ? 7 : 0) && move.to.col === 0) {
      nextRights[opponent].queenSide = false;
    }
    if (move.to.row === (opponent === "w" ? 7 : 0) && move.to.col === 7) {
      nextRights[opponent].kingSide = false;
    }
  }

  return nextRights;
}

function simulatePosition(position, move) {
  const nextBoard = cloneState(position.board);
  const movingPiece = { ...nextBoard[move.from.row][move.from.col], hasMoved: true };
  const capturedPiece = move.isEnPassant
    ? nextBoard[move.capturedSquare.row][move.capturedSquare.col]
    : nextBoard[move.to.row][move.to.col];

  nextBoard[move.from.row][move.from.col] = null;

  if (move.isEnPassant && move.capturedSquare) {
    nextBoard[move.capturedSquare.row][move.capturedSquare.col] = null;
  }

  if (move.isCastle) {
    const rook = { ...nextBoard[move.rookFrom.row][move.rookFrom.col], hasMoved: true };
    nextBoard[move.rookFrom.row][move.rookFrom.col] = null;
    nextBoard[move.rookTo.row][move.rookTo.col] = rook;
  }

  if (move.promotionChoice) {
    movingPiece.type = move.promotionChoice;
  }

  nextBoard[move.to.row][move.to.col] = movingPiece;

  return {
    board: nextBoard,
    enPassantTarget: move.isDoubleStep
      ? { row: (move.from.row + move.to.row) / 2, col: move.from.col }
      : null,
    castlingRights: applyCastlingRights(
      position.castlingRights,
      move,
      movingPiece,
      capturedPiece
    ),
  };
}

function findKing(board, color) {
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = board[row][col];
      if (piece && piece.color === color && piece.type === "king") {
        return { row, col };
      }
    }
  }
  return null;
}

function isKingInCheck(board, color) {
  const kingSquare = findKing(board, color);
  if (!kingSquare) {
    return false;
  }
  const opponent = color === "w" ? "b" : "w";
  return isSquareAttacked(board, kingSquare.row, kingSquare.col, opponent);
}

function isSquareAttacked(board, targetRow, targetCol, attackerColor) {
  const pawnDirection = attackerColor === "w" ? -1 : 1;
  const pawnRow = targetRow - pawnDirection;
  for (const pawnCol of [targetCol - 1, targetCol + 1]) {
    const piece = getPiece(pawnRow, pawnCol, board);
    if (piece && piece.color === attackerColor && piece.type === "pawn") {
      return true;
    }
  }

  const knightJumps = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  for (const [dr, dc] of knightJumps) {
    const piece = getPiece(targetRow + dr, targetCol + dc, board);
    if (piece && piece.color === attackerColor && piece.type === "knight") {
      return true;
    }
  }

  const lines = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  for (const [dr, dc] of lines) {
    let row = targetRow + dr;
    let col = targetCol + dc;
    while (isInsideBoard(row, col)) {
      const piece = getPiece(row, col, board);
      if (piece) {
        if (
          piece.color === attackerColor &&
          (piece.type === "rook" || piece.type === "queen")
        ) {
          return true;
        }
        break;
      }
      row += dr;
      col += dc;
    }
  }

  const diagonals = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];
  for (const [dr, dc] of diagonals) {
    let row = targetRow + dr;
    let col = targetCol + dc;
    while (isInsideBoard(row, col)) {
      const piece = getPiece(row, col, board);
      if (piece) {
        if (
          piece.color === attackerColor &&
          (piece.type === "bishop" || piece.type === "queen")
        ) {
          return true;
        }
        break;
      }
      row += dr;
      col += dc;
    }
  }

  for (let dr = -1; dr <= 1; dr += 1) {
    for (let dc = -1; dc <= 1; dc += 1) {
      if (dr === 0 && dc === 0) {
        continue;
      }
      const piece = getPiece(targetRow + dr, targetCol + dc, board);
      if (piece && piece.color === attackerColor && piece.type === "king") {
        return true;
      }
    }
  }

  return false;
}

function commitMove(move) {
  gameState.snapshots.push(createSnapshot());
  const positionBeforeMove = getPositionState();

  const movingPiece = gameState.board[move.from.row][move.from.col];
  const capturedPiece = move.isEnPassant
    ? gameState.board[move.capturedSquare.row][move.capturedSquare.col]
    : gameState.board[move.to.row][move.to.col];

  gameState.board[move.from.row][move.from.col] = null;

  if (move.isEnPassant) {
    gameState.board[move.capturedSquare.row][move.capturedSquare.col] = null;
  }

  if (move.isCastle) {
    const rook = gameState.board[move.rookFrom.row][move.rookFrom.col];
    gameState.board[move.rookFrom.row][move.rookFrom.col] = null;
    gameState.board[move.rookTo.row][move.rookTo.col] = {
      ...rook,
      hasMoved: true,
    };
  }

  gameState.board[move.to.row][move.to.col] = {
    ...movingPiece,
    type: move.promotionChoice || movingPiece.type,
    hasMoved: true,
  };

  gameState.castlingRights = applyCastlingRights(
    gameState.castlingRights,
    move,
    movingPiece,
    capturedPiece
  );

  if (capturedPiece) {
    if (movingPiece.color === "w") {
      gameState.capturedByWhite.push(capturedPiece);
    } else {
      gameState.capturedByBlack.push(capturedPiece);
    }
  }

  gameState.enPassantTarget = move.isDoubleStep
    ? { row: (move.from.row + move.to.row) / 2, col: move.from.col }
    : null;

  gameState.halfmoveClock =
    movingPiece.type === "pawn" || capturedPiece ? 0 : gameState.halfmoveClock + 1;
  gameState.lastMove = {
    from: move.from,
    to: move.to,
  };

  const nextPosition = simulatePosition(positionBeforeMove, move);
  const notation = buildMoveNotation(move, movingPiece, capturedPiece, nextPosition);
  gameState.moveHistory.push(notation);
  resetSelection();
  closePromotion();
  closeResultBanner();

  gameState.currentPlayer = gameState.currentPlayer === "w" ? "b" : "w";
  if (gameState.currentPlayer === "w") {
    gameState.fullmoveNumber += 1;
  }

  recordCurrentPosition();
  updateGameStatus();
  triggerMoveEffects(move, movingPiece, capturedPiece);
  render();
  maybeTriggerComputerTurn();
}

function buildMoveNotation(move, movingPiece, capturedPiece, nextPosition) {
  if (move.isCastle) {
    return move.to.col === 6 ? "O-O" : "O-O-O";
  }

  const pieceLetter = {
    king: "K",
    queen: "Q",
    rook: "R",
    bishop: "B",
    knight: "N",
    pawn: "",
  }[movingPiece.type];

  const captureMarker = capturedPiece ? "x" : "";
  const destination = squareName(move.to.row, move.to.col);
  const pawnPrefix =
    movingPiece.type === "pawn" && capturedPiece ? FILES[move.from.col] : "";
  const promotionSuffix = move.promotionChoice
    ? `=${{
        queen: "Q",
        rook: "R",
        bishop: "B",
        knight: "N",
      }[move.promotionChoice]}`
    : "";

  const opponent = movingPiece.color === "w" ? "b" : "w";
  const opponentMoves = generateAllLegalMoves(nextPosition, opponent);
  const suffix = isKingInCheck(nextPosition.board, opponent)
    ? opponentMoves.length === 0
      ? "#"
      : "+"
    : "";

  return `${pieceLetter || pawnPrefix}${captureMarker}${destination}${promotionSuffix}${suffix}`;
}

function configureGameMode(mode) {
  if (mode === "local") {
    aiState.enabled = false;
    aiState.humanColor = "w";
    aiState.computerColor = "b";
    aiState.thinking = false;
    clearAiTurnTimeout();
  } else {
    aiState.enabled = true;
    aiState.computerColor = aiState.humanColor === "w" ? "b" : "w";
  }
  resetGame();
}

function setHumanColor(color) {
  aiState.enabled = true;
  aiState.humanColor = color;
  aiState.computerColor = color === "w" ? "b" : "w";
  resetGame();
}

function setAIDifficulty(level) {
  aiState.difficulty = level;
  updateMenuScreen();
  if (uiState.drawer) {
    renderDrawer();
  }
  updateMetaText();
}

function getAIDifficultyLabel() {
  return {
    quick: "Quick",
    balanced: "Balanced",
    sharp: "Sharp",
  }[aiState.difficulty];
}

function hasInsufficientMaterial(board) {
  const white = [];
  const black = [];

  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = board[row][col];
      if (!piece) {
        continue;
      }
      if (piece.color === "w") {
        white.push(piece.type);
      } else {
        black.push(piece.type);
      }
    }
  }

  const simplify = (pieces) => pieces.filter((type) => type !== "king").sort();
  const whiteMinor = simplify(white);
  const blackMinor = simplify(black);
  const allMinor = [...whiteMinor, ...blackMinor];

  if (allMinor.length === 0) {
    return true;
  }

  if (allMinor.length === 1 && ["bishop", "knight"].includes(allMinor[0])) {
    return true;
  }

  if (
    whiteMinor.length === 1 &&
    blackMinor.length === 1 &&
    whiteMinor[0] === "bishop" &&
    blackMinor[0] === "bishop"
  ) {
    return true;
  }

  return false;
}

function updateMetaText() {
  if (!aiState.enabled) {
    gameMetaText.textContent = "Local match • White and Black";
    return;
  }

  const side = aiState.humanColor === "w" ? "You are White" : "You are Black";
  gameMetaText.textContent = `Vs Computer • ${side} • ${getAIDifficultyLabel()}`;
}

function calculateMaterialEdge() {
  const whiteMaterial = gameState.capturedByWhite.reduce(
    (sum, piece) => sum + Math.round(pieceValue(piece.type) / 100),
    0
  );
  const blackMaterial = gameState.capturedByBlack.reduce(
    (sum, piece) => sum + Math.round(pieceValue(piece.type) / 100),
    0
  );
  return {
    white: Math.max(0, whiteMaterial - blackMaterial),
    black: Math.max(0, blackMaterial - whiteMaterial),
  };
}

function updateMenuScreen() {
  menuSummary.textContent = aiState.enabled
    ? `Vs Computer • ${aiState.humanColor === "w" ? "You are White" : "You are Black"} • ${getAIDifficultyLabel()}`
    : "Local Two Player • White and Black";

  toggleMenuButtonState(menuModeComputer, aiState.enabled);
  toggleMenuButtonState(menuModeLocal, !aiState.enabled);
  toggleMenuButtonState(menuColorWhite, aiState.humanColor === "w");
  toggleMenuButtonState(menuColorBlack, aiState.humanColor === "b");
  toggleMenuButtonState(menuDifficultyQuick, aiState.difficulty === "quick");
  toggleMenuButtonState(menuDifficultyBalanced, aiState.difficulty === "balanced");
  toggleMenuButtonState(menuDifficultySharp, aiState.difficulty === "sharp");

  menuColorWhite.disabled = !aiState.enabled;
  menuColorBlack.disabled = !aiState.enabled;
  menuDifficultyQuick.disabled = !aiState.enabled;
  menuDifficultyBalanced.disabled = !aiState.enabled;
  menuDifficultySharp.disabled = !aiState.enabled;
  resumeGameButton.disabled = gameState.moveHistory.length === 0;
}

function toggleMenuButtonState(button, isActive) {
  button.classList.toggle("primary", isActive);
  button.classList.toggle("is-active", isActive);
  button.setAttribute("aria-pressed", isActive ? "true" : "false");
}

function openMenuScreen() {
  playSound("menu");
  uiState.menuOpen = true;
  menuScreen.classList.remove("hidden");
  menuScreen.setAttribute("aria-hidden", "false");
  updateMenuScreen();
}

function closeMenuScreen() {
  uiState.menuOpen = false;
  menuScreen.classList.add("hidden");
  menuScreen.setAttribute("aria-hidden", "true");
}

function startConfiguredGame() {
  closeMenuScreen();
  resetGame();
}

function updateGameStatus() {
  const activeColor = gameState.currentPlayer;
  const activeLabel = activeColor === "w" ? "White" : "Black";
  const legalMoves = generateAllLegalMoves(getPositionState(), activeColor);
  const inCheck = isKingInCheck(gameState.board, activeColor);
  const currentPositionKey = encodePositionKey(getPositionState(), gameState.currentPlayer);
  const repetitionCount = gameState.positionCounts[currentPositionKey] || 0;

  gameState.check = inCheck ? activeColor : null;
  gameState.gameOver = null;
  turnBadge.textContent = activeColor === "w" ? PIECES.w.pawn : PIECES.b.pawn;
  turnBadge.classList.toggle("black-turn", activeColor === "b");
  updateMetaText();

  if (legalMoves.length === 0) {
    if (inCheck) {
      const winner = activeColor === "w" ? "Black" : "White";
      gameState.gameOver = {
        type: "checkmate",
        winner,
        message: `${winner} wins by checkmate.`,
      };
    } else {
      gameState.gameOver = {
        type: "stalemate",
        winner: null,
        message: "Stalemate. Neither side can force a finish.",
      };
    }
  } else if (gameState.halfmoveClock >= 100) {
    gameState.gameOver = {
      type: "fifty-move",
      winner: null,
      message: "Draw by the fifty-move rule.",
    };
  } else if (repetitionCount >= 3) {
    gameState.gameOver = {
      type: "threefold",
      winner: null,
      message: "Draw by threefold repetition.",
    };
  } else if (hasInsufficientMaterial(gameState.board)) {
    gameState.gameOver = {
      type: "insufficient",
      winner: null,
      message: "Draw by insufficient material.",
    };
  }

  if (gameState.gameOver && gameState.gameOver.type === "checkmate") {
    aiState.thinking = false;
    statusText.textContent = "Checkmate";
    turnIndicator.textContent = `${gameState.gameOver.winner} wins`;
    checkText.textContent = gameState.gameOver.message;
    openResultBanner("Checkmate", gameState.gameOver.message);
    return;
  }

  if (gameState.gameOver && gameState.gameOver.type === "stalemate") {
    statusText.textContent = "Stalemate";
    turnIndicator.textContent = "Draw";
    checkText.textContent = gameState.gameOver.message;
    aiState.thinking = false;
    openResultBanner("Stalemate", gameState.gameOver.message);
    return;
  }

  if (gameState.gameOver) {
    statusText.textContent = "Draw";
    turnIndicator.textContent = "Draw";
    checkText.textContent = gameState.gameOver.message;
    aiState.thinking = false;
    openResultBanner("Draw", gameState.gameOver.message);
    return;
  }

  statusText.textContent = aiState.thinking
    ? "Computer Thinking"
    : inCheck
      ? "Check on board"
      : "Game in Progress";
  turnIndicator.textContent = `${activeLabel} to Move`;
  if (aiState.thinking) {
    checkText.textContent = "Black is calculating the best reply.";
    return;
  }
  checkText.textContent = inCheck
    ? `${activeLabel} is in check. Find the precise response.`
    : activeColor === aiState.humanColor
      ? "Your move."
      : "Computer to move.";
}

function clearAiTurnTimeout() {
  if (aiTurnTimeoutId !== null) {
    clearTimeout(aiTurnTimeoutId);
    aiTurnTimeoutId = null;
  }
}

function maybeTriggerComputerTurn() {
  clearAiTurnTimeout();
  if (
    uiState.menuOpen ||
    !aiState.enabled ||
    gameState.gameOver ||
    pendingPromotion ||
    gameState.currentPlayer !== aiState.computerColor
  ) {
    aiState.thinking = false;
    updateGameStatus();
    render();
    return;
  }

  aiState.thinking = true;
  updateGameStatus();
  render();
  playComputerMove();
}

function playComputerMove() {
  if (
    !aiState.enabled ||
    gameState.gameOver ||
    gameState.currentPlayer !== aiState.computerColor
  ) {
    aiState.thinking = false;
    updateGameStatus();
    render();
    return;
  }

  let bestMove = null;
  try {
    bestMove = chooseComputerMove();
  } catch (error) {
    bestMove = chooseFallbackComputerMove();
  }
  aiState.thinking = false;

  if (!bestMove) {
    updateGameStatus();
    render();
    return;
  }

  commitMove(bestMove);
}

function chooseComputerMove() {
  const position = getPositionState();
  const moves = generateAllLegalMoves(position, aiState.computerColor).map(normalizeAIMove);
  if (moves.length === 0) {
    return null;
  }

  if (aiState.difficulty === "quick") {
    const orderedMoves = orderMoves(moves);
    return orderedMoves[Math.floor(Math.random() * Math.min(3, orderedMoves.length))];
  }

  let bestScore = -Infinity;
  let bestMoves = [];

  for (const move of orderMoves(moves)) {
    const nextPosition = simulatePosition(position, move);
    const score = scoreComputerMove(move, nextPosition);
    if (score > bestScore) {
      bestScore = score;
      bestMoves = [move];
    } else if (score === bestScore) {
      bestMoves.push(move);
    }
  }

  return bestMoves[Math.floor(Math.random() * bestMoves.length)];
}

function chooseFallbackComputerMove() {
  const moves = generateAllLegalMoves(getPositionState(), aiState.computerColor).map(
    normalizeAIMove
  );
  if (moves.length === 0) {
    return null;
  }
  return orderMoves(moves)[0];
}

function scoreComputerMove(move, nextPosition) {
  const opponentMoves = generateAllLegalMoves(nextPosition, aiState.humanColor);
  const opponentInCheck = isKingInCheck(nextPosition.board, aiState.humanColor);
  const computerReplyMoves =
    aiState.difficulty === "sharp"
      ? generateAllLegalMoves(nextPosition, aiState.computerColor).length
      : 0;
  let score = evaluatePosition(nextPosition.board);

  if (move.capturedPiece) {
    score += pieceValue(move.capturedPiece.type) * 0.9;
  }
  if (move.promotionChoice) {
    score += pieceValue(move.promotionChoice);
  }
  if (move.isCastle) {
    score += 45;
  }
  if (opponentInCheck) {
    score += 70;
  }
  if (opponentMoves.length === 0) {
    score += opponentInCheck ? 100000 : 200;
  }
  score += (18 - Math.min(opponentMoves.length, 18)) * 2;
  score += computerReplyMoves;

  return score;
}

function normalizeAIMove(move) {
  if (!move.requiresPromotion) {
    return move;
  }
  return { ...move, promotionChoice: "queen" };
}

function orderMoves(moves) {
  return [...moves].sort((a, b) => scoreMoveOrdering(b) - scoreMoveOrdering(a));
}

function scoreMoveOrdering(move) {
  let score = 0;
  if (move.capturedPiece) {
    score += pieceValue(move.capturedPiece.type) * 10 - pieceValue(move.piece.type);
  }
  if (move.isCastle) {
    score += 25;
  }
  if (move.promotionChoice) {
    score += pieceValue(move.promotionChoice);
  }
  return score;
}

function evaluatePosition(board) {
  let score = 0;
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = board[row][col];
      if (!piece) {
        continue;
      }
      const material = pieceValue(piece.type);
      const activity = pieceSquareBonus(piece, row, col);
      const pieceScore = material + activity;
      score += piece.color === aiState.computerColor ? pieceScore : -pieceScore;
    }
  }
  return score;
}

function pieceValue(type) {
  return {
    pawn: 100,
    knight: 320,
    bishop: 330,
    rook: 500,
    queen: 900,
    king: 20000,
  }[type];
}

function formatPiecePoints(type) {
  return String(Math.round(pieceValue(type) / 100));
}

function pieceSquareBonus(piece, row, col) {
  const rankFromWhite = 7 - row;
  const rank = piece.color === "w" ? rankFromWhite : row;
  const centerDistance = Math.abs(3.5 - col) + Math.abs(3.5 - row);

  if (piece.type === "pawn") {
    return rank * 10 - centerDistance * 2;
  }
  if (piece.type === "knight" || piece.type === "bishop") {
    return 18 - centerDistance * 4;
  }
  if (piece.type === "rook") {
    return rank * 2;
  }
  if (piece.type === "queen") {
    return 10 - centerDistance * 2;
  }
  if (piece.type === "king") {
    return piece.hasMoved ? 12 : -centerDistance * 2;
  }
  return 0;
}

function formatSessionTime() {
  const elapsedMs = Date.now() - sessionStartedAt;
  const totalSeconds = Math.floor(elapsedMs / 1000);
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getSessionSeconds() {
  return Math.floor((Date.now() - sessionStartedAt) / 1000);
}

function applyUiState() {
  boardElement.classList.toggle("flipped", uiState.boardFlipped);
  document.body.classList.toggle("cinematic-off", !uiState.cinematicMode);
  document.body.classList.toggle("coords-hidden", !uiState.showCoordinates);
  document.body.classList.toggle("legal-hints-off", !uiState.showLegalHints);
  document.body.classList.toggle("sound-off", !uiState.soundsEnabled);
  themeButton.classList.toggle("is-active", uiState.cinematicMode);
  perspectiveButton.classList.toggle("is-active", uiState.boardFlipped);
  soundButton.classList.toggle("is-active", uiState.soundsEnabled);
  themeButton.setAttribute(
    "aria-label",
    uiState.cinematicMode ? "Disable cinematic glow" : "Enable cinematic glow"
  );
  perspectiveButton.setAttribute(
    "aria-label",
    uiState.boardFlipped ? "Return to white perspective" : "Flip board perspective"
  );
  soundButton.setAttribute(
    "aria-label",
    uiState.soundsEnabled ? "Disable sound" : "Enable sound"
  );
}

function setDrawer(drawerName) {
  if (!drawerName) {
    uiState.drawer = null;
    controlDrawer.classList.add("hidden");
    controlDrawer.setAttribute("aria-hidden", "true");
    drawerContent.innerHTML = "";
    return;
  }

  uiState.drawer = drawerName;
  controlDrawer.classList.remove("hidden");
  controlDrawer.setAttribute("aria-hidden", "false");
  renderDrawer();
}

function toggleDrawer(drawerName) {
  setDrawer(uiState.drawer === drawerName ? null : drawerName);
}

function renderDrawer() {
  if (!uiState.drawer) {
    return;
  }

  if (uiState.drawer === "menu") {
    drawerTitle.textContent = "Quick Menu";
    drawerContent.innerHTML = `
      <section class="drawer-card">
        <h3>Match Controls</h3>
        <p>Jump straight into the most common game actions.</p>
        <div class="drawer-actions">
          <button class="drawer-action" type="button" data-action="undo">Undo Last Move</button>
          <button class="drawer-action" type="button" data-action="restart">Restart Match</button>
          <button class="drawer-action primary" type="button" data-action="new-game">Start New Game</button>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Board Tools</h3>
        <p>Adjust how the board is presented while you play.</p>
        <div class="drawer-actions">
          <button class="drawer-action" type="button" data-action="flip-board">${uiState.boardFlipped ? "White Perspective" : "Black Perspective"}</button>
          <button class="drawer-action" type="button" data-action="toggle-hints">${uiState.showLegalHints ? "Hide Move Hints" : "Show Move Hints"}</button>
          <button class="drawer-action" type="button" data-action="toggle-coords">${uiState.showCoordinates ? "Hide Coordinates" : "Show Coordinates"}</button>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Current Position</h3>
        <p>Live overview of the active game.</p>
        <div class="drawer-stat-grid">
          <div class="drawer-stat"><strong>Mode</strong><span>${aiState.enabled ? "Vs Computer" : "Local"}</span></div>
          <div class="drawer-stat"><strong>Turn</strong><span>${turnIndicator.textContent}</span></div>
          <div class="drawer-stat"><strong>Status</strong><span>${statusText.textContent}</span></div>
          <div class="drawer-stat"><strong>Moves</strong><span>${gameState.moveHistory.length}</span></div>
          <div class="drawer-stat"><strong>Timer</strong><span>${formatSessionTime()}</span></div>
        </div>
      </section>
    `;
  }

  if (uiState.drawer === "settings") {
    drawerTitle.textContent = "Settings";
    drawerContent.innerHTML = `
      <section class="drawer-card">
        <h3>Game Mode</h3>
        <p>Choose local play or a computer opponent.</p>
        <div class="drawer-actions">
          <button class="drawer-action ${!aiState.enabled ? "primary" : ""}" type="button" data-action="mode-local">Local Two Player</button>
          <button class="drawer-action ${aiState.enabled ? "primary" : ""}" type="button" data-action="mode-computer">Vs Computer</button>
          <button class="drawer-action" type="button" data-action="color-white">Play as White</button>
          <button class="drawer-action" type="button" data-action="color-black">Play as Black</button>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Computer Difficulty</h3>
        <p>Adjust the computer style for speed and strength.</p>
        <div class="drawer-actions">
          <button class="drawer-action ${aiState.difficulty === "quick" ? "primary" : ""}" type="button" data-action="difficulty-quick">Quick</button>
          <button class="drawer-action ${aiState.difficulty === "balanced" ? "primary" : ""}" type="button" data-action="difficulty-balanced">Balanced</button>
          <button class="drawer-action ${aiState.difficulty === "sharp" ? "primary" : ""}" type="button" data-action="difficulty-sharp">Sharp</button>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Display</h3>
        <p>Refine the presentation without changing the game rules.</p>
        <div class="drawer-actions">
          <button class="drawer-action" type="button" data-action="toggle-cinematic">${uiState.cinematicMode ? "Disable Cinematic Glow" : "Enable Cinematic Glow"}</button>
          <button class="drawer-action" type="button" data-action="toggle-sound">${uiState.soundsEnabled ? "Disable Sounds" : "Enable Sounds"}</button>
          <button class="drawer-action" type="button" data-action="toggle-coords">${uiState.showCoordinates ? "Hide Coordinates" : "Show Coordinates"}</button>
          <button class="drawer-action" type="button" data-action="toggle-hints">${uiState.showLegalHints ? "Hide Move Hints" : "Show Move Hints"}</button>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Board Orientation</h3>
        <p>Swap perspective depending on which side you want to study.</p>
        <div class="drawer-actions">
          <button class="drawer-action" type="button" data-action="flip-board">${uiState.boardFlipped ? "Set White at Bottom" : "Set Black at Bottom"}</button>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Game Flow</h3>
        <p>Use these if you want to quickly reset the table.</p>
        <div class="drawer-actions">
          <button class="drawer-action" type="button" data-action="undo">Undo Last Move</button>
          <button class="drawer-action primary" type="button" data-action="restart">Restart Match</button>
        </div>
      </section>
    `;
  }

  if (uiState.drawer === "profile") {
    const capturedTotal = gameState.capturedByWhite.length + gameState.capturedByBlack.length;
    drawerTitle.textContent = "Player Panel";
    drawerContent.innerHTML = `
      <section class="drawer-card">
        <h3>Player One</h3>
        <p>Premium casual profile for this local session.</p>
        <div class="drawer-stat-grid">
          <div class="drawer-stat"><strong>Rating</strong><span>1250</span></div>
          <div class="drawer-stat"><strong>Session</strong><span>${formatSessionTime()}</span></div>
          <div class="drawer-stat"><strong>Total Moves</strong><span>${gameState.moveHistory.length}</span></div>
          <div class="drawer-stat"><strong>Captures</strong><span>${capturedTotal}</span></div>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Current Table</h3>
        <p>See which side is pressing the game right now.</p>
        <div class="drawer-stat-grid">
          <div class="drawer-stat"><strong>To Move</strong><span>${turnIndicator.textContent}</span></div>
          <div class="drawer-stat"><strong>White Captures</strong><span>${gameState.capturedByWhite.length}</span></div>
          <div class="drawer-stat"><strong>Black Captures</strong><span>${gameState.capturedByBlack.length}</span></div>
          <div class="drawer-stat"><strong>Status</strong><span>${statusText.textContent}</span></div>
        </div>
      </section>
      <section class="drawer-card">
        <h3>Quick Actions</h3>
        <p>Common actions without leaving the player panel.</p>
        <div class="drawer-actions">
          <button class="drawer-action" type="button" data-action="new-game">New Game</button>
          <button class="drawer-action" type="button" data-action="flip-board">${uiState.boardFlipped ? "White Perspective" : "Black Perspective"}</button>
        </div>
      </section>
    `;
  }
}

function confirmReset(message) {
  if (gameState.moveHistory.length === 0) {
    return true;
  }
  return window.confirm(message);
}

function handleDrawerAction(action) {
  if (action === "mode-local") {
    configureGameMode("local");
    renderDrawer();
    return;
  }

  if (action === "mode-computer") {
    configureGameMode("computer");
    renderDrawer();
    return;
  }

  if (action === "color-white") {
    setHumanColor("w");
    renderDrawer();
    return;
  }

  if (action === "color-black") {
    setHumanColor("b");
    renderDrawer();
    return;
  }

  if (action === "difficulty-quick") {
    setAIDifficulty("quick");
    return;
  }

  if (action === "difficulty-balanced") {
    setAIDifficulty("balanced");
    return;
  }

  if (action === "difficulty-sharp") {
    setAIDifficulty("sharp");
    return;
  }

  if (action === "undo") {
    undoMove();
    renderDrawer();
    return;
  }

  if (action === "restart") {
    if (confirmReset("Restart the current match and clear the board?")) {
      resetGame();
      renderDrawer();
    }
    return;
  }

  if (action === "new-game") {
    if (confirmReset("Start a new game from the opening position?")) {
      resetGame();
      renderDrawer();
    }
    return;
  }

  if (action === "flip-board") {
    uiState.boardFlipped = !uiState.boardFlipped;
    applyUiState();
    render();
    renderDrawer();
    return;
  }

  if (action === "toggle-cinematic") {
    uiState.cinematicMode = !uiState.cinematicMode;
    applyUiState();
    renderDrawer();
    return;
  }

  if (action === "toggle-sound") {
    uiState.soundsEnabled = !uiState.soundsEnabled;
    applyUiState();
    renderDrawer();
    return;
  }

  if (action === "toggle-coords") {
    uiState.showCoordinates = !uiState.showCoordinates;
    applyUiState();
    render();
    renderDrawer();
    return;
  }

  if (action === "toggle-hints") {
    uiState.showLegalHints = !uiState.showLegalHints;
    applyUiState();
    render();
    renderDrawer();
  }
}

function openPromotion(color) {
  promotionOptions.innerHTML = "";
  const anchor = pendingPromotion ? getPromotionAnchorPosition(pendingPromotion.to.row, pendingPromotion.to.col) : null;
  if (anchor) {
    promotionModal.style.setProperty("--promotion-left", anchor.left);
    promotionModal.style.setProperty("--promotion-top", anchor.top);
    promotionModal.dataset.edge = anchor.edge;
  }
  boardWrapper.classList.add("promotion-open");
  for (const type of ["queen", "rook", "bishop", "knight"]) {
    const button = document.createElement("button");
    button.className = "promotion-option action-button secondary";
    button.type = "button";
    button.innerHTML = `<span class="piece ${color === "w" ? "white" : "black"}" data-piece="${type}">${PIECES[color][type]}</span>`;
    button.addEventListener("click", () => {
      const promotedMove = { ...pendingPromotion, promotionChoice: type };
      pendingPromotion = null;
      commitMove(promotedMove);
    });
    promotionOptions.appendChild(button);
  }
  promotionModal.classList.remove("hidden");
  promotionModal.setAttribute("aria-hidden", "false");
}

function closePromotion() {
  promotionModal.classList.add("hidden");
  promotionModal.setAttribute("aria-hidden", "true");
  promotionModal.removeAttribute("data-edge");
  boardWrapper.classList.remove("promotion-open");
  pendingPromotion = null;
}

function openResultBanner(title, message) {
  resultTitle.textContent = title;
  resultMessage.textContent = message;
  resultBanner.classList.remove("hidden");
  resultBanner.setAttribute("aria-hidden", "false");
}

function getDisplaySquarePosition(row, col) {
  const displayRow = uiState.boardFlipped ? 7 - row : row;
  const displayCol = uiState.boardFlipped ? 7 - col : col;
  return {
    left: `${((displayCol + 0.5) / 8) * 100}%`,
    top: `${((displayRow + 0.5) / 8) * 100}%`,
  };
}

function getDisplaySquareMetrics(row, col) {
  const displayRow = uiState.boardFlipped ? 7 - row : row;
  const displayCol = uiState.boardFlipped ? 7 - col : col;
  const centerX = ((displayCol + 0.5) / 8) * 100;
  const centerY = ((displayRow + 0.5) / 8) * 100;
  return {
    centerX,
    centerY,
    left: `${centerX}%`,
    top: `${centerY}%`,
  };
}

function getPromotionAnchorPosition(row, col) {
  const metrics = getDisplaySquareMetrics(row, col);
  const edge = metrics.centerY < 40 ? "bottom" : "top";
  const offset = edge === "bottom" ? 11 : -11;
  return {
    left: `${Math.min(88, Math.max(12, metrics.centerX))}%`,
    top: `${Math.min(88, Math.max(12, metrics.centerY + offset))}%`,
    edge,
  };
}

function spawnBoardEffect(text, row, col, variant = "capture") {
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const lane = activeBoardEffects.filter(
    (effect) => effect.row === row && effect.col === col && effect.variant === variant
  ).length;
  activeBoardEffects.push({ id, text, row, col, variant, lane });
  renderBoardEffects();
  window.setTimeout(() => {
    activeBoardEffects = activeBoardEffects.filter((effect) => effect.id !== id);
    renderBoardEffects();
  }, 1100);
}

function ensureSoundContext() {
  if (!soundContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return null;
    }
    soundContext = new AudioContextClass();
  }
  if (soundContext.state === "suspended") {
    soundContext.resume();
  }
  return soundContext;
}

function playSound(type) {
  if (!uiState.soundsEnabled) {
    return;
  }

  const context = ensureSoundContext();
  if (!context) {
    return;
  }

  const now = context.currentTime;
  const config = {
    move: { freq: 420, duration: 0.08, gain: 0.04, secondary: 620 },
    capture: { freq: 280, duration: 0.16, gain: 0.055, secondary: 180 },
    check: { freq: 720, duration: 0.2, gain: 0.045, secondary: 960 },
    castle: { freq: 520, duration: 0.14, gain: 0.05, secondary: 780 },
    promote: { freq: 660, duration: 0.18, gain: 0.06, secondary: 990 },
    menu: { freq: 360, duration: 0.07, gain: 0.035, secondary: 540 },
  }[type];

  if (!config) {
    return;
  }

  for (const [index, frequency] of [config.freq, config.secondary].entries()) {
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.type = index === 0 ? "sine" : "triangle";
    osc.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(config.gain / (index + 1), now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + config.duration + index * 0.02);
    osc.connect(gain);
    gain.connect(context.destination);
    osc.start(now + index * 0.015);
    osc.stop(now + config.duration + 0.04 + index * 0.02);
  }
}

function ensureAmbientParticles() {
  if (boardParticles.childElementCount > 0) {
    return;
  }

  for (let i = 0; i < 18; i += 1) {
    const particle = document.createElement("span");
    particle.className = "ambient-particle";
    particle.style.setProperty("--particle-left", `${8 + Math.random() * 84}%`);
    particle.style.setProperty("--particle-top", `${10 + Math.random() * 80}%`);
    particle.style.setProperty("--particle-size", `${3 + Math.random() * 5}px`);
    particle.style.setProperty("--particle-delay", `${Math.random() * 6}s`);
    particle.style.setProperty("--particle-duration", `${6 + Math.random() * 7}s`);
    boardParticles.appendChild(particle);
  }
}

function triggerMoveEffects(move, movingPiece, capturedPiece) {
  playSound(capturedPiece ? "capture" : "move");

  if (capturedPiece) {
    spawnBoardEffect(`+${formatPiecePoints(capturedPiece.type)}`, move.to.row, move.to.col);
  }

  if (move.isCastle) {
    playSound("castle");
    spawnBoardEffect("Castle", move.to.row, move.to.col, "badge");
  }

  if (move.promotionChoice) {
    playSound("promote");
    spawnBoardEffect("Promoted", move.to.row, move.to.col, "badge");
  }

  if (gameState.gameOver && gameState.gameOver.type === "checkmate") {
    playSound("check");
    spawnBoardEffect("Mate", move.to.row, move.to.col, "check");
    return;
  }

  const checkedColor = movingPiece.color === "w" ? "b" : "w";
  if (gameState.check === checkedColor) {
    playSound("check");
    spawnBoardEffect("Check", move.to.row, move.to.col, "check");
  }
}

function closeResultBanner() {
  resultBanner.classList.add("hidden");
  resultBanner.setAttribute("aria-hidden", "true");
}

function renderBoardEffects() {
  boardEffects.innerHTML = "";

  if (gameState.lastMove) {
    const from = getDisplaySquareMetrics(gameState.lastMove.from.row, gameState.lastMove.from.col);
    const to = getDisplaySquareMetrics(gameState.lastMove.to.row, gameState.lastMove.to.col);
    const deltaX = to.centerX - from.centerX;
    const deltaY = to.centerY - from.centerY;
    const length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    const trail = document.createElement("div");
    trail.className = "move-trail";
    trail.style.setProperty("--trail-left", `${from.centerX}%`);
    trail.style.setProperty("--trail-top", `${from.centerY}%`);
    trail.style.setProperty("--trail-length", `${length}%`);
    trail.style.setProperty("--trail-angle", `${angle}deg`);
    boardEffects.appendChild(trail);
  }

  for (const effect of activeBoardEffects) {
    const effectEl = document.createElement("div");
    const position = getDisplaySquarePosition(effect.row, effect.col);
    effectEl.className = `board-effect ${effect.variant}`;
    effectEl.style.setProperty("--effect-left", position.left);
    effectEl.style.setProperty("--effect-top", position.top);
    effectEl.style.setProperty("--effect-lane", String(effect.lane || 0));
    effectEl.textContent = effect.text;
    boardEffects.appendChild(effectEl);
  }
}

function renderCapturedPieces() {
  capturedByWhite.innerHTML = "";
  capturedByBlack.innerHTML = "";

  for (const piece of gameState.capturedByWhite) {
    const el = document.createElement("div");
    el.className = "captured-piece";
    el.dataset.piece = piece.type;
    el.textContent = PIECES[piece.color][piece.type];
    capturedByWhite.appendChild(el);
  }

  for (const piece of gameState.capturedByBlack) {
    const el = document.createElement("div");
    el.className = "captured-piece";
    el.dataset.piece = piece.type;
    el.textContent = PIECES[piece.color][piece.type];
    capturedByBlack.appendChild(el);
  }

  capturedByWhiteCount.textContent = String(gameState.capturedByWhite.length);
  capturedByBlackCount.textContent = String(gameState.capturedByBlack.length);
  const edge = calculateMaterialEdge();
  capturedByWhiteEdge.textContent =
    edge.white > 0 ? `White advantage +${edge.white}` : "Material even";
  capturedByBlackEdge.textContent =
    edge.black > 0 ? `Black advantage +${edge.black}` : "Material even";
}

function renderBoard() {
  boardElement.innerHTML = "";
  const selected = gameState.selectedSquare;
  const displayRows = uiState.boardFlipped
    ? [7, 6, 5, 4, 3, 2, 1, 0]
    : [0, 1, 2, 3, 4, 5, 6, 7];
  const displayCols = uiState.boardFlipped
    ? [7, 6, 5, 4, 3, 2, 1, 0]
    : [0, 1, 2, 3, 4, 5, 6, 7];

  for (let rowIndex = 0; rowIndex < 8; rowIndex += 1) {
    for (let colIndex = 0; colIndex < 8; colIndex += 1) {
      const row = displayRows[rowIndex];
      const col = displayCols[colIndex];
      const square = document.createElement("button");
      square.type = "button";
      square.className = `square ${(row + col) % 2 === 0 ? "light" : "dark"}`;
      square.setAttribute("aria-label", squareName(row, col));
      square.addEventListener("click", () => handleSquareClick(row, col));

      if (selected && selected.row === row && selected.col === col) {
        square.classList.add("selected");
      }

      if (
        gameState.lastMove &&
        ((gameState.lastMove.from.row === row && gameState.lastMove.from.col === col) ||
          (gameState.lastMove.to.row === row && gameState.lastMove.to.col === col))
      ) {
        square.classList.add("last-move");
      }

      if (gameState.check) {
        const king = getPiece(row, col);
        if (king && king.type === "king" && king.color === gameState.check) {
          square.classList.add("in-check");
        }
      }

      const legalMove = gameState.legalTargets.find(
        (move) => move.to.row === row && move.to.col === col
      );
      if (legalMove) {
        square.classList.add("legal");
        if (legalMove.capturedPiece) {
          square.classList.add("capture");
        }
      }

      if (colIndex === 0) {
        const rank = document.createElement("span");
        rank.className = "coord rank";
        rank.textContent = String(8 - row);
        square.appendChild(rank);
      }

      if (rowIndex === 7) {
        const file = document.createElement("span");
        file.className = "coord file";
        file.textContent = FILES[col].toUpperCase();
        square.appendChild(file);
      }

      const piece = getPiece(row, col);
      if (piece) {
        const pieceEl = document.createElement("span");
        pieceEl.className = `piece ${piece.color === "w" ? "white" : "black"}`;
        pieceEl.dataset.piece = piece.type;
        pieceEl.textContent = PIECES[piece.color][piece.type];
        if (
          gameState.lastMove &&
          gameState.lastMove.to.row === row &&
          gameState.lastMove.to.col === col
        ) {
          pieceEl.classList.add("moved");
        }
        square.appendChild(pieceEl);
      }

      boardElement.appendChild(square);
    }
  }
}

function render() {
  applyUiState();
  updateMenuScreen();
  renderBoard();
  renderBoardEffects();
  renderCapturedPieces();
  undoButton.disabled =
    gameState.snapshots.length === 0 || Boolean(pendingPromotion) || aiState.thinking;
  if (uiState.drawer) {
    renderDrawer();
  }
}

function updateTimer() {
  sessionTimer.textContent = formatSessionTime();
  const elapsedSeconds = getSessionSeconds();
  sessionTimer.classList.toggle("timer-hot", aiState.thinking || Boolean(gameState.check));
  sessionTimer.classList.toggle("timer-warm", !aiState.thinking && elapsedSeconds > 0 && elapsedSeconds % 30 >= 22);
  if (uiState.drawer === "menu" || uiState.drawer === "profile") {
    renderDrawer();
  }
}

undoButton.addEventListener("click", undoMove);
restartButton.addEventListener("click", () => {
  playSound("menu");
  if (confirmReset("Restart the current match and clear the board?")) {
    resetGame();
  }
});
resultRestartButton.addEventListener("click", () => {
  playSound("menu");
  resetGame();
});
inlineNewGameButton.addEventListener("click", () => {
  playSound("menu");
  if (confirmReset("Start a new game from the opening position?")) {
    resetGame();
  }
});
menuButton.addEventListener("click", openMenuScreen);
themeButton.addEventListener("click", () => {
  playSound("menu");
  uiState.cinematicMode = !uiState.cinematicMode;
  applyUiState();
  if (uiState.drawer === "settings") {
    renderDrawer();
  }
});
perspectiveButton.addEventListener("click", () => {
  playSound("menu");
  uiState.boardFlipped = !uiState.boardFlipped;
  render();
});
soundButton.addEventListener("click", () => {
  uiState.soundsEnabled = !uiState.soundsEnabled;
  applyUiState();
  if (uiState.soundsEnabled) {
    playSound("menu");
  }
  if (uiState.drawer === "settings") {
    renderDrawer();
  }
});
settingsButton.addEventListener("click", () => {
  playSound("menu");
  toggleDrawer("settings");
});
profileButton.addEventListener("click", () => {
  playSound("menu");
  toggleDrawer("profile");
});
drawerCloseButton.addEventListener("click", () => setDrawer(null));
drawerContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }
  handleDrawerAction(button.dataset.action);
});
startGameButton.addEventListener("click", () => {
  playSound("menu");
  startConfiguredGame();
});
resumeGameButton.addEventListener("click", () => {
  playSound("menu");
  closeMenuScreen();
});
menuModeComputer.addEventListener("click", () => {
  playSound("menu");
  configureGameMode("computer");
});
menuModeLocal.addEventListener("click", () => {
  playSound("menu");
  configureGameMode("local");
});
menuColorWhite.addEventListener("click", () => {
  playSound("menu");
  setHumanColor("w");
});
menuColorBlack.addEventListener("click", () => {
  playSound("menu");
  setHumanColor("b");
});
menuDifficultyQuick.addEventListener("click", () => {
  playSound("menu");
  setAIDifficulty("quick");
});
menuDifficultyBalanced.addEventListener("click", () => {
  playSound("menu");
  setAIDifficulty("balanced");
});
menuDifficultySharp.addEventListener("click", () => {
  playSound("menu");
  setAIDifficulty("sharp");
});

updateGameStatus();
ensureAmbientParticles();
render();
updateTimer();
setInterval(updateTimer, 1000);
