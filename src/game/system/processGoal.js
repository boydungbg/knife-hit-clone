import { Vector2 } from "gdxjs/lib";
let redundantAngle = Math.PI / 60;
const tmp = new Vector2();
export default (delta, width, height, goal, knifeCircle) => {
  goal.rotate += Math.PI * (3 / 4) * delta;
  for (const k of knifeCircle) {
    k.rotateAngle += Math.PI * (3 / 4) * delta;
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
