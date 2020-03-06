import entityFactory from "../until/entityFactory";

let shootting = false;
let gameStatus = false;
let statuslistKnife = false;
let checkGameOver = false;
let index = 0;
let score = 0;
let maxX;
let minX;
export const shoottingKnife = inputHandler => {
  inputHandler.addEventListener("touchStart", () => {
    if (gameStatus) {
      shootting = true;
      // score += 1;
    }
    if (score > window.localStorage.getItem("maxScore")) {
      window.localStorage.setItem("maxScore", score);
    }
  });
  document.addEventListener("keydown", e => {
    if (gameStatus && e.which === 32) {
      shootting = true;
      // score += 1;
    }
    if (score > window.localStorage.getItem("maxScore")) {
      window.localStorage.setItem("maxScore", score);
    }
  });
  return {
    setStateShootting: () => {
      shootting = false;
    },
    setScore: () => {
      score += 1;
    },
    getStateShootting: () => shootting,
    getScore: () => score,
    getMaxScore: () => {
      if (window.localStorage.getItem("maxScore") === null) {
        window.localStorage.setItem("maxScore", 0);
      }
      return window.localStorage.getItem("maxScore");
    }
  };
};

export const CheckGameStatus = (inputHandler, gl, width, height, setEntity) => {
  inputHandler.addEventListener("touchStart", async (x, y) => {
    if (
      x >= width / 3.3 &&
      x <= width / 1.4 &&
      y >= height / 1.5 &&
      y <= height / 1.27
    ) {
      if (!gameStatus && !statuslistKnife) {
        const entity = await entityFactory(gl, width, height);
        setEntity(entity);
        statuslistKnife = false;
        gameStatus = true;
        checkGameOver = false;
        score = 0;
      }
    } else if (x >= 0 && x <= width / 3.5 && y >= 0 && y <= height / 20) {
      if (!gameStatus && !statuslistKnife) {
        checkGameOver = false;
      }
    }
  });
  return {
    getGameStatus: () => gameStatus,
    setGameStatus: () => {
      gameStatus = false;
      checkGameOver = true;
    },
    getCheckGameOver: () => checkGameOver
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
      minX = width / 5.4;
      maxX = minX + entity.knife[0].width;
      for (let i = 0; i < entity.knife.length; i++) {
        if (
          x >= minX &&
          x <= maxX &&
          y >= height / 2.5 &&
          y <= height / 2.5 + entity.knife[i].height * 1.2
        ) {
          window.localStorage.setItem("index", i);
          statuslistKnife = false;
          break;
        } else if (
          x >= minX &&
          x <= maxX &&
          y >= height / 1.9 &&
          y <= height / 1.9 + entity.knife[i].height * 1.2
        ) {
          window.localStorage.setItem("index", i + 6);
          statuslistKnife = false;
          break;
        }
        maxX += entity.knife[i].width * 2.5;
        minX += entity.knife[i].width * 2;
      }
    }
  });
  return {
    getIndex: () => {
      if (window.localStorage.getItem("index") !== null) {
        index = window.localStorage.getItem("index");
      }
      return index;
    }
  };
};
