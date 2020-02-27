let shootting = false;
let gameStatus = false;
export const shoottingKnife = inputHandler => {
  inputHandler.addEventListener("touchStart", () => {
    if (gameStatus) {
      shootting = true;
    }
  });
  document.addEventListener("keydown", e => {
    if (gameStatus && e.which === 32) {
      shootting = true;
    }
  });
  return {
    setStateShootting: () => {
      shootting = false;
    },
    getStateShootting: () => shootting
  };
};

export const CheckGameStatus = (inputHandler, knifeCircle) => {
  inputHandler.addEventListener("touchStart", (x, y) => {
    if (x >= 80 && x <= 190 && y >= 380 && y <= 470) {
      if (!gameStatus) {
        gameStatus = true;
        knifeCircle.length = 0;
      }
    }
  });
  return {
    getGameStatus: () => gameStatus,
    setGameStatus: () => {
      gameStatus = false;
    }
  };
};
