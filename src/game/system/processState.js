import processKnifeDrop from "./processKnifeDrop";
import processShoottingKnife from "./processShoottingKnife";
import processGoal from "./processGoal";
import processGoalDrop from "./processGoalDrop";
import processVibrateGoal from "./processVibrateGoal";
import processEffectShootting from "./processEffectShooting";

let NEXT_GAME_INTEVAL = 0.5;

export default (
  delta,
  entity,
  width,
  height,
  shooting,
  statusGame,
  index,
  gameOption,
  setEntityNextGame,
  indexOptionGame
) => {
  if (
    entity.knifeCircle.length < gameOption.option[indexOptionGame].countShotting
  ) {
    entity.knifeState = processShoottingKnife(
      delta,
      width,
      height,
      shooting.getStateShootting(),
      shooting.setStateShootting,
      entity.knife,
      entity.knifeCircle,
      entity.bullets,
      index,
      shooting.setScore
    );
    processGoal(
      delta,
      width,
      // height,
      entity.goal,
      entity.knifeCircle,
      gameOption,
      indexOptionGame
    );
    processVibrateGoal(
      delta,
      entity.goal,
      entity.goalWhite,
      entity.knifeState.getCheckVibrate,
      entity.knifeState.setCheckVibrate
    );

    processEffectShootting(delta, entity.bullets);
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
      width,
      entity.knifeState.setCheckVibrate,
      entity.bullets,
      gameOption
    );
    NEXT_GAME_INTEVAL -= delta;
    shooting.setStateShootting();
    if (NEXT_GAME_INTEVAL <= 0) {
      entity.knifeState.setCheckVibrate();
      // entity.knifeCircle.length = 0;
      // entity.bullets.length = 0;
      setEntityNextGame();
      NEXT_GAME_INTEVAL = 0.5;
    }
  }
};
