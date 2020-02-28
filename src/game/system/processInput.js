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
      maxX = entity.knife[0].position.x;
      minX = entity.knife[0].position.x - width / 8.4;
      for (let i = 0; i < entity.knife.length; i++) {
        if (
          x >= minX &&
          x <= maxX &&
          y >= entity.knife[i].position.y - height / 2.5 &&
          y <= entity.knife[i].position.y - height / 4.2
        ) {
          index = i;
          statuslistKnife = false;
          break;
        }
        maxX += width / 7.4;
        minX += width / 7.4;
      }
    }
  });
  return {
    getIndex: () => index
  };
};
