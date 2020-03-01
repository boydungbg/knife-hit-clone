let shootting = false;
let gameStatus = false;
let statuslistKnife = false;
let index = 0;
let maxX;
let minX;

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
export const CheckGameStatus = (inputHandler, entity, width, height) => {
  inputHandler.addEventListener("touchStart", (x, y) => {
    if (
      x >= width / 3.3 &&
      x <= width / 1.4 &&
      y >= height / 1.5 &&
      y <= height / 1.27
    ) {
      if (!gameStatus && !statuslistKnife) {
        for (let texture of entity.circleDrop) {
          texture.position.set(width / 7, height / 6);
        }
        statuslistKnife = false;
        entity.knifeCircle.length = 0;
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
      x >= width / 2.5 &&
      x <= width / 1.7 &&
      y >= height / 1.23 &&
      y <= height / 1.1
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

export const selectKnife = (inputHandler, width, height, entity) => {
  inputHandler.addEventListener("touchStart", (x, y) => {
    if (statuslistKnife) {
      minX = width / 4.5;
      maxX = minX + entity.knife[0].width * 2;

      for (let i = 0; i < entity.knife.length; i++) {
        if (
          x >= minX &&
          x <= maxX &&
          y >= height / 2.5 &&
          y <= height / 2.5 + entity.knife[i].height
        ) {
          index = i;
          statuslistKnife = false;
          break;
        } else if (
          x >= minX &&
          x <= maxX &&
          y >= height / 2 &&
          y <= height / 2 + entity.knife[i].height
        ) {
          index = i + 6;
          statuslistKnife = false;
          break;
        }
        maxX += entity.knife[i].width * 2;
        minX += entity.knife[i].width * 2;
      }
    }
  });
  return {
    getIndex: () => index
  };
};
