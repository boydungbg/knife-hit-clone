import "./index.css";
import {
  createGameLoop,
  resizeCanvas,
  createOrthoCamera,
  createBatch,
  InputHandler
} from "gdxjs/lib";
import processState from "./game/system/processState";
import entityFactory from "./game/until/entityFactory";
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
  const entity = await entityFactory(gl, width, height);
  const inputHandler = new InputHandler(canvas);
  const shooting = shoottingKnife(inputHandler);
  const chooseKnife = selectKnife(inputHandler, width, height, entity);
  const listKnifes = showListKnifes(inputHandler, width, height);
  const statusGame = CheckGameStatus(inputHandler, entity, width, height);
  gl.clearColor(0, 0, 0, 1);
  const update = delta => {
    batch.setProjection(cam.combined);
    batch.begin();
    if (statusGame.getGameStatus()) {
      gl.clear(gl.COLOR_BUFFER_BIT);
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
      renderDashBoard(
        batch,
        entity,
        listKnifes.getStatuslistKnife(),
        width,
        height,
        chooseKnife.getIndex()
      );
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
