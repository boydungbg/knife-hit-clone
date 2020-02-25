import { Vector2 } from "gdxjs/lib";

const knifeCircle = [];
let checkKnifeGoal;
let checkKnifeDrop = false;
let vibrateGoal = false;
export default (
  delta,
  width,
  height,
  stateShootting,
  setStateShooting,
  knife,
  bullet
) => {
  checkKnifeGoal = false;
  if (stateShootting()) {
    knife.position.y -= delta * height * (2000 / 625);
  }
  if (knife.position.y <= height / 2.3) {
    knife.position.y = height - height / 6;
    for (const k of knifeCircle) {
      if (
        knife.position.x + width / 10 >= k.leftcheck.x &&
        knife.position.x <= k.rightcheck.x
      ) {
        checkKnifeGoal = true;
        checkKnifeDrop = true;
        break;
      }
    }
    if (!checkKnifeGoal) {
      knifeCircle.push({
        tmp2: new Vector2(0, 0),
        tmp3: new Vector2(0, 0),
        rightcheck: new Vector2(0, 0),
        leftcheck: new Vector2(0, 0),
        rotateAngle: 89.55
      });
      vibrateGoal = true;
      for (let index = 0; index < 20; index++) {
        bullet.push({
          position: new Vector2(width / 2, height / 3),
          velocity:
            Math.random() * 10 <= 5
              ? new Vector2(Math.random() * width, Math.random() * width)
              : new Vector2(-Math.random() * width, Math.random() * width),
          radius: Math.random() * 10,
          lifeSpan: 0,
          expire: 0.4
        });
      }
    }
    setStateShooting();
  }

  return {
    getKnifeCircle: () => knifeCircle,
    getCheckKnifeGoal: () => checkKnifeGoal,
    getCheckKnifeDrop: () => checkKnifeDrop,
    getCheckVibrate: () => vibrateGoal,
    setCheckVibrate: () => {
      vibrateGoal = false;
    }
  };
};
