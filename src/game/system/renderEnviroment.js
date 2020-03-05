import renderKnife from "./renderKnife";
import renderCircle from "./renderGoal";
import renderKnifeDrop from "./renderKnifeDrop";
import renderQuatityKnife from "./renderQuatityKnife";
import renderGoalDrop from "./renderGoalDrop";
import renderEffectShootting from "./renderEffectShootting";
import renderBackground from "./renderBackground";
import renderLevel from "./renderLevel";
// import createWhiteTex from "gl-white-texture";

export default (
  batch,
  entity,
  width,
  height,
  index,
  gameOption,
  indexOptionGame
) => {
  // const whiteTex = createWhiteTex(gl);
  renderBackground(batch, entity.background, width, height);
  if (
    entity.knifeCircle.length < gameOption.option[indexOptionGame].countShotting
  ) {
    renderKnifeDrop(
      batch,
      entity.knifeDrop,
      entity.knifeState.getCheckKnifeDrop,
      index
    );
    if (!entity.knifeState.getCheckKnifeGoal) {
      renderEffectShootting(batch, entity.goalWhite, entity.bullets);
    }
    renderCircle(
      batch,
      width,
      height,
      entity.knifeCircle,
      entity.knife,
      entity.goal,
      entity.goalWhite,
      entity.knifeState.getCheckVibrate,
      index
    );
  } else {
    renderGoalDrop(batch, entity.circleDrop);
  }
  renderKnife(batch, entity.knife, index);
  renderQuatityKnife(
    batch,
    width,
    // height,
    entity.knifeIcon,
    // entity.goal,
    entity.knifeCircle,
    gameOption,
    indexOptionGame
  );
  renderLevel(batch, entity, width, height, indexOptionGame);
  // TODO: Check knife
  // for (const k of knifeCircle) {
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
  // }
};
