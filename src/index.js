import "./index.css";
import {
  createGameLoop,
  resizeCanvas,
  createOrthoCamera,
  createBatch,
  InputHandler
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

const init = async () => {
  const canvas = document.getElementById("main");
  const info = document.getElementById("info");
  const [width, height] = resizeCanvas(canvas, 1);
  const gl = canvas.getContext("webgl");
  const batch = createBatch(gl);
  const cam = createOrthoCamera(width, height, width, height);
  let entity = await entityFactory(gl, width, height);
  const setEntity = e => {
    if (e !== null) {
      entity = e;
    }
  };
  const inputHandler = new InputHandler(canvas);
  const statusGame = CheckGameStatus(
    inputHandler,
    gl,
    width,
    height,
    setEntity
  );
  const chooseKnife = selectKnife(inputHandler, width, height, entity);
  const shooting = shoottingKnife(inputHandler);
  const listKnifes = showListKnifes(inputHandler, width, height);

  gl.clearColor(0, 0, 0, 1);

  const update = delta => {
    batch.setProjection(cam.combined);
    batch.begin();
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (statusGame.getGameStatus()) {
      processState(
        delta,
        entity,
        width,
        height,
        shooting,
        statusGame,
        chooseKnife.getIndex()
      );
      renderEnviroment(batch, entity, width, height, chooseKnife.getIndex());
    } else {
      if (!statusGame.getCheckGameOver()) {
        renderDashBoard(
          batch,
          entity,
          entity.dashboard,
          listKnifes.getStatuslistKnife(),
          width,
          height,
          chooseKnife.getIndex()
        );
      } else {
        renderDashBoard(
          batch,
          entity,
          entity.bgGameOver,
          listKnifes.getStatuslistKnife(),
          width,
          height,
          chooseKnife.getIndex()
        );
      }
    }
    batch.end();
  };

  const gameloop = createGameLoop(update);
  setInterval(
    () => (info.innerHTML = `FPS: ${Math.floor(gameloop.getFps())}`),
    1000
  );
};
init();
