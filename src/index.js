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
import { shoottingKnife, CheckGameStatus } from "./game/system/processInput";
import renderEnviroment from "./game/system/renderEnviroment";
import renderEndGame from "./game/system/renderEndGame";

const init = async () => {
  const canvas = document.getElementById("main");
  const info = document.getElementById("info");
  const [width, height] = resizeCanvas(canvas);
  const gl = canvas.getContext("webgl");
  const batch = createBatch(gl);
  const cam = createOrthoCamera(width, height, width, height);
  const inputHandler = new InputHandler(canvas);
  const shooting = shoottingKnife(inputHandler);
  const entity = await entityFactory(gl, width, height);

  const statusGame = CheckGameStatus(
    inputHandler,
    entity.knifeCircle,
    width,
    height
  );

  gl.clearColor(0, 0, 0, 1);
  const update = delta => {
    batch.setProjection(cam.combined);
    batch.begin();
    if (statusGame.getGameStatus()) {
      gl.clear(gl.COLOR_BUFFER_BIT);
      processState(delta, entity, width, height, shooting, statusGame);
      renderEnviroment(batch, entity, width, height);
    } else {
      renderEndGame(batch, entity, width, height);
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
