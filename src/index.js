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
  const stage = document.getElementById("info-game");
  const [width, height] = resizeCanvas(canvas, 1);
  const gl = canvas.getContext("webgl");
  const batch = createBatch(gl);
  const cam = createOrthoCamera(width, height, width, height);
  let entity = await entityFactory(gl, width, height);
  const gameOption = createGameOption();
  let indexOptionGame = 0;
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
    entity = await entityFactory(gl, width, height);
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
  };

  console.log(entity.knifeCircle);
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
        chooseKnife.getIndex(),
        gameOption,
        setEntityNextGame,
        indexOptionGame
      );
      renderEnviroment(
        batch,
        entity,
        width,
        height,
        chooseKnife.getIndex(),
        gameOption,
        indexOptionGame
      );
      renderEnviroment(
        batch,
        entity,
        width,
        height,
        chooseKnife.getIndex(),
        gameOption,
        indexOptionGame
      );
      stage.style.display = "block";
      stage.innerHTML = `STAGE ${indexOptionGame + 1}`;
      info.id = "info";
      info.innerHTML = `${shooting.getScore()}`;
    } else {
      stage.style.display = "none";
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
        info.id = "info-dashboard";
        info.innerHTML = `STAGE ${indexOptionGame +
          1} ♦ SCORE ${shooting.getMaxScore()}`;
      } else {
        renderDashBoard(
          batch,
          entity,
          entity.bgGameOver,
          listKnifes.getStatuslistKnife(),
          width,
          height
        );
        info.id = "info-gameOver";
        info.innerHTML = `   ${shooting.getScore()} 
STAGE ${indexOptionGame + 1}`;
      }
    }
    batch.end();
  };

  createGameLoop(update);
  // setInterval(
  //   () => (info.innerHTML = `FPS: ${Math.floor(gameloop.getFps())}`),
  //   1000
  // );
};
init();
