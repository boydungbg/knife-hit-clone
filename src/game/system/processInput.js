let shootting = false;
let gameStatus = false;
let statuslistKnife = false;
let index = 0;

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
export const CheckGameStatus = (
  inputHandler,
  knifeCircle,
  width,
  height,
  circleDrop
) => {
  inputHandler.addEventListener("touchStart", (x, y) => {
    if (
      x >= width / 6.7 &&
      x <= width / 2.7 &&
      y >= height / 3 &&
      y <= height / 2.6
    ) {
      if (!gameStatus) {
        for (let texture of circleDrop) {
          texture.position.set(width / 7, height / 6);
        }
        knifeCircle.length = 0;
        gameStatus = true;
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

export const showListKnifes = (inputHandler, width, height) => {
  inputHandler.addEventListener("touchStart", (x, y) => {
    if (
      x >= width / 5 &&
      x <= width / 3.4 &&
      y >= height / 2.5 &&
      y <= height / 2.2
    ) {
      if (!statuslistKnife && !gameStatus) {
        statuslistKnife = true;
      } else {
        statuslistKnife = false;
      }
    }
  });
  return {
    getStatuslistKnife: () => statuslistKnife
  };
};

export const selectKnife = (inputHandler, width, height) => {
  console.log(width, height);
  inputHandler.addEventListener("touchStart", (x, y) => {
    if (statuslistKnife) {
      if (
        x >= width / 5 &&
        x <= width / 4.2 &&
        y >= height / 6.2 &&
        y <= height / 4
      ) {
        index = 0;
        statuslistKnife = false;
      } else if (
        x >= width / 5 + 40 &&
        x <= width / 4.2 + 70 &&
        y >= height / 6.2 &&
        y <= height / 4
      ) {
        index = 1;
        statuslistKnife = false;
      }
    }
  });
  return {
    getIndex: () => index
  };
};
