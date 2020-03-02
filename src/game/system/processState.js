import processKnifeDrop from "./processKnifeDrop";
import processShoottingKnife from "./processShoottingKnife";
import processGoal from "./processGoal";
import processGoalDrop from "./processGoalDrop";
import processVibrateGoal from "./processVibrateGoal";
import processEffectShootting from "./processEffectShooting";

export default (delta, entity, width, height, shooting, statusGame, index) => {
  if (entity.knifeCircle.length < entity.goal.countKnife) {
    entity.knifeState = processShoottingKnife(
      delta,
      width,
      height,
      shooting.getStateShootting(),
      shooting.setStateShootting,
      entity.knife,
      entity.knifeCircle,
      entity.bullets,
      index
    );
    processGoal(delta, width, height, entity.goal, entity.knifeCircle);
    processVibrateGoal(
      delta,
      entity.goal,
      entity.goalWhite,
      entity.knifeState.getCheckVibrate,
      entity.knifeState.setCheckVibrate
    );

    if (entity.knifeState.getCheckKnifeDrop) {
      processKnifeDrop(
        delta,
        width,
        height,
        entity.knifeDrop,
        statusGame.setGameStatus,
        entity.knifeState.setCheckKnifeDrop,
        index
      );
    }
  } else {
    processGoalDrop(
      delta,
      entity.circleDrop,
      statusGame.setGameStatus,
      width,
      entity.knifeState.setCheckVibrate,
      entity.bullets
    );
  }
  processEffectShootting(delta, entity.bullets);
};
