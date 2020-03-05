import "./index.css";
import {
  createGameLoop,
  resizeCanvas,
  createOrthoCamera,
  createBatch,
  InputHandler,
  Vector2
} from "gdxjs/lib";
import entityFactory from "./game/until/entityFactory";

import processState from "./game/system/processState";
import {
  shoottingKnife,
  CheckGameStatus,
  showListKnifes,
  selectKnife
} from "./game/system/processInput";
import renderEnviroment from "./game/system/renderEnviroment";
import renderDashBoard from "./game/system/renderDashBoard";
import createGameOption from "./game/until/gameOption";

const init = async () => {
  const canvas = document.getElementById("main");
  const info = document.getElementById("info");
  const fps = document.getElementById("fps");
  const [width, height] = resizeCanvas(canvas);
  const [worldWidth, worldHeight] = [width / 2, height / 2];
  const gl = canvas.getContext("webgl");
  const batch = createBatch(gl);
  const cam = createOrthoCamera(worldWidth, worldHeight, width, height);
  let entity = await entityFactory(gl, worldWidth, worldHeight);
  const gameOption = createGameOption();
  let indexOptionGame = 0;
  let level = 0;
  const setEntity = e => {
    if (e !== null) {
      entity = e;
    }
    indexOptionGame = 0;
  };
  const setEntityNextGame = async () => {
    indexOptionGame += 1;
    if (indexOptionGame > 3) {
      indexOptionGame = 0;
    }
    // const e = await entityFactory(gl, worldWidth, worldHeight);
    // setEntity(e);
    entity = await entityFactory(gl, worldWidth, worldHeight);
    for (
      let index = 0;
      index < gameOption.option[indexOptionGame].goalKnife;
      index++
    ) {
      entity.knifeCircle.push({
        tmp2: new Vector2(0, 0),
        tmp3: new Vector2(0, 0),
        rightcheck: new Vector2(0, 0),
        leftcheck: new Vector2(0, 0),
        rotateAngle: Math.random() * 90
      });
    }
    if (indexOptionGame + 1 > window.localStorage.getItem("maxStage")) {
      window.localStorage.setItem("maxStage", indexOptionGame + 1);
    }
  };
  const inputHandler = new InputHandler(canvas);
  const statusGame = CheckGameStatus(
    inputHandler,
    gl,
    worldWidth,
    worldHeight,
    setEntity
  );
  const chooseKnife = selectKnife(
    inputHandler,
    worldWidth,
    worldHeight,
    entity
  );
  const shooting = shoottingKnife(inputHandler);
  const listKnifes = showListKnifes(inputHandler, width, height);
  if (window.localStorage.getItem("maxStage") === null) {
    level = 0;
  } else {
    level = window.localStorage.getItem("maxStage");
  }
  gl.clearColor(0, 0, 0, 1);
  const update = delta => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(cam.combined);
    batch.begin();
    if (statusGame.getGameStatus()) {
      processState(
        delta,
        entity,
        worldWidth,
        worldHeight,
        shooting,
        statusGame,
        chooseKnife.getIndex(),
        gameOption,
        setEntityNextGame,
        indexOptionGame
      );
      renderEnviroment(
        batch,
        entity,
        worldWidth,
        worldHeight,
        chooseKnife.getIndex(),
        gameOption,
        indexOptionGame
      );
      info.className = "score";
      info.innerHTML = `${shooting.getScore()}
     STAGE ${indexOptionGame + 1}`;
    } else {
      if (!statusGame.getCheckGameOver()) {
        renderDashBoard(
          batch,
          entity,
          entity.dashboard,
          listKnifes.getStatuslistKnife(),
          worldWidth,
          worldHeight,
          chooseKnife.getIndex()
        );
        info.id = "info-dashboard";
        info.innerHTML = `STAGE ${level} ♦ SCORE ${shooting.getMaxScore()}`;
      } else {
        renderDashBoard(
          batch,
          entity,
          entity.bgGameOver,
          listKnifes.getStatuslistKnife(),
          worldWidth,
          worldHeight
        );
        info.id = "info-gameOver";
        info.innerHTML = `   ${shooting.getScore()}
STAGE ${indexOptionGame + 1}`;
        if (indexOptionGame + 1 > window.localStorage.getItem("maxStage")) {
          window.localStorage.setItem("maxStage", indexOptionGame + 1);
        }
      }
    }
    batch.end();
  };

  const gameloop = createGameLoop(update);
  setInterval(
    () => (fps.innerHTML = `FPS: ${Math.floor(gameloop.getFps())}`),
    1000
  );
};
init();
