import "./index.css";
import {
  createGameLoop,
  resizeCanvas,
  createOrthoCamera,
  createBatch,
  InputHandler,
  loadTexture
} from "gdxjs/lib";
import createWhiteTex from "gl-white-texture";
import {
  createGoalWhite,
  createGoal,
  createKnifeIcon,
  createKnife,
  createKnifeDrop,
  createCircleDrop
} from "./game/until/entityFactory";
import processKnifeDrop from "./game/system/processKnifeDrop";
import processShoottingKnife from "./game/system/processShoottingKnife";
import processGoal from "./game/system/processGoal";
import { shoottingKnife } from "./game/system/processInput";
import renderBackground from "./game/system/renderBackground";
import renderKnife from "./game/system/renderKnife";
import renderCircle from "./game/system/renderGoal";
import renderKnifeDrop from "./game/system/renderKnifeDrop";
import renderQuatityKnife from "./game/system/renderQuatityKnife";
import processGoalDrop from "./game/system/processGoalDrop";
import renderGoalDrop from "./game/system/renderGoalDrop";
import processVibrateGoal from "./game/system/processVibrateGoal";
import processEffectShootting from "./game/system/processEffectShootting";
import renderEffectShootting from "./game/system/renderEffectShootting";
const init = async () => {
  const canvas = document.getElementById("main");
  const info = document.getElementById("info");

  const [width, height] = resizeCanvas(canvas);
  const gl = canvas.getContext("webgl");

  const batch = createBatch(gl);
  const whiteTex = createWhiteTex(gl);
  const cam = createOrthoCamera(width, height, width, height);
  const inputHandler = new InputHandler(canvas);
  const shootting = shoottingKnife(inputHandler);

  const goalWhite = createGoalWhite(
    width,
    height,
    await loadTexture(gl, "./Sprite2/CircleWhite.png")
  );

  const knifeIcon = createKnifeIcon(
    width,
    height,
    await loadTexture(gl, "./Sprite2/KnifeIcon.png")
  );

  const knife = createKnife(
    width,
    height,
    await loadTexture(gl, "./Sprite2/Knife.png")
  );

  const goal = createGoal(
    width,
    height,
    await loadTexture(gl, "./Sprite2/Circle.png")
  );

  const knifeDrop = createKnifeDrop(
    width,
    height,
    await loadTexture(gl, "./Sprite2/Knife.png")
  );
  const circleDrop = createCircleDrop(
    width,
    height,
    await loadTexture(gl, "./Sprite2/TN_Piece1.png"),
    await loadTexture(gl, "./Sprite2/TN_Piece2.png"),
    await loadTexture(gl, "./Sprite2/TN_Piece3.png"),
    await loadTexture(gl, "./Sprite2/TN_Piece4.png")
  );

  const background = await loadTexture(gl, "./Sprite1/background.png");

  const bullets = [];
  let processKnife;
  let processCircle;
  let countEndgame = 0;
  const processState = delta => {
    if (countEndgame < goal.countKnife) {
      processKnife = processShoottingKnife(
        delta,
        width,
        height,
        shootting.getStateShootting,
        shootting.setStateShootting,
        knife,
        bullets
      );
      processCircle = processGoal(
        delta,
        width,
        height,
        goal,
        processKnife.getKnifeCircle()
      );
      processVibrateGoal(
        delta,
        goal,
        goalWhite,
        processKnife.getCheckVibrate(),
        processKnife.setCheckVibrate
      );
      if (!processKnife.getCheckKnifeGoal()) {
        processEffectShootting(delta, bullets);
      }
      if (processKnife.getCheckKnifeDrop()) {
        processKnifeDrop(delta, width, height, knifeDrop);
      }
    } else {
      processGoalDrop(delta, circleDrop, width, height);
    }
    countEndgame = processKnife.getKnifeCircle().length;
  };
  const draw = () => {
    batch.setProjection(cam.combined);
    renderBackground(batch, background, width, height);
    if (countEndgame < goal.countKnife) {
      renderKnife(batch, knife);
      renderKnifeDrop(batch, knifeDrop, processKnife.getCheckKnifeDrop());
      renderQuatityKnife(
        batch,
        width,
        height,
        knifeIcon,
        goal,
        processCircle.getKnifeCircle()
      );
      if (!processKnife.getCheckKnifeGoal()) {
        renderEffectShootting(batch, goalWhite, bullets);
      }
      renderCircle(
        batch,
        width,
        height,
        processCircle.getKnifeCircle(),
        knife,
        goal,
        goalWhite,
        processKnife.getCheckVibrate()
      );
    } else {
      renderGoalDrop(batch, circleDrop);
    }
    // TODO: Check knife
    // for (const k of processCircle.getKnifeCircle()) {
    //   batch.begin();
    //   batch.setColor(1, 1, 1, 1);
    //   drawLine(
    //     batch,
    //     whiteTex,
    //     k.tmp2.x,
    //     k.tmp2.y,
    //     k.leftcheck.x,
    //     k.leftcheck.y,
    //     2
    //   );
    //   batch.end();
    //   batch.begin();
    //   batch.setColor(1, 1, 1, 1);
    //   drawLine(
    //     batch,
    //     whiteTex,
    //     k.tmp2.x,
    //     k.tmp2.y,
    //     k.rightcheck.x,
    //     k.rightcheck.y,
    //     2
    //   );
    //   batch.end();
    // }
  };

  gl.clearColor(0, 0, 0, 1);
  const update = delta => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    processState(delta);
    draw();
  };

  const gameloop = createGameLoop(update);
  setInterval(
    () => (info.innerHTML = `FPS: ${Math.floor(gameloop.getFps())}`),
    1000
  );
};
init();
