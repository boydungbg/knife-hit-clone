import { Vector2 } from "gdxjs/lib";
import processSpinOption from "./processSpinOption";
let redundantAngle = Math.PI / 60;
const tmp = new Vector2();
let a;
export default (
  delta,
  width,
  // height,
  goal,
  knifeCircle,
  gameOption,
  indexOptionGame
) => {
  a = processSpinOption(
    delta,
    gameOption.option[indexOptionGame].randomSpin,
    gameOption.option[indexOptionGame].speedSpin
  );
  goal.rotate = a.angle;
  for (const k of knifeCircle) {
    k.rotateAngle += a.speed * delta;
    tmp.set(width / 6, 10);
    tmp.rotateRad(k.rotateAngle);
    k.tmp2.set(
      goal.position.x + goal.radius / 2,
      goal.position.y + goal.radius / 2
    );
    k.tmp2.addVector(tmp);
    tmp.set(width / 2.3, 7);
    tmp.rotateRad(k.rotateAngle);
    k.tmp3.set(
      goal.position.x + goal.radius / 2,
      goal.position.y + goal.radius / 2
    );
    k.tmp3.addVector(tmp);
    tmp.set(width / 2.3, 10);
    tmp.rotateRad(k.rotateAngle + redundantAngle);
    k.leftcheck.set(
      goal.position.x + goal.radius / 2,
      goal.position.y + goal.radius / 2
    );
    k.leftcheck.addVector(tmp);
    tmp.set(width / 2.3, 7);
    tmp.rotateRad(k.rotateAngle - redundantAngle - 0.2);
    k.rightcheck.set(
      goal.position.x + goal.radius / 2,
      goal.position.y + goal.radius / 2
    );
    k.rightcheck.addVector(tmp);
  }
};
