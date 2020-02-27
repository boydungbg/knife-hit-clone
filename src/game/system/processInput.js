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

export const CheckGameStatus = (inputHandler, knifeCircle, width, height) => {
  inputHandler.addEventListener("touchStart", (x, y) => {
    if (
      x >= width / 6.7 &&
      x <= width / 2.7 &&
      y >= height / 3 &&
      y <= height / 2.6
    ) {
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
