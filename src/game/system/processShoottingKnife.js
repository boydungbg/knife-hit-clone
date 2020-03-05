import { Vector2 } from "gdxjs/lib";

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
  knifeCircle,
  bullet,
  index,
  setScore
) => {
  checkKnifeGoal = false;
  if (stateShootting) {
    knife[index].y -= delta * knife[index].speed;
  }
  if (knife[index].y <= height / 1.9) {
    knife[index].y = height - height / 6;
    for (const k of knifeCircle) {
      if (
        knife[index].x + width / 10 >= k.leftcheck.x &&
        knife[index].x <= k.rightcheck.x
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
      for (let index = 0; index < 15; index++) {
        bullet.push({
          position: new Vector2(width / 2, (height / 5) * 2),
          velocity: new Vector2(
            Math.random() * width - width / 2,
            Math.random() * width
          ),
          radius: Math.random() * 5,
          speed: 3,
          lifeSpan: 0,
          expire: Math.random() * (0.4 - 0.2) + 0.2
        });
      }
      setScore();
    }
    setStateShooting();
  }

  return {
    getCheckKnifeGoal: checkKnifeGoal,
    getCheckKnifeDrop: checkKnifeDrop,
    setCheckKnifeDrop: () => {
      checkKnifeDrop = false;
    },
    getCheckVibrate: vibrateGoal,
    setCheckVibrate: () => {
      vibrateGoal = false;
    }
  };
};
