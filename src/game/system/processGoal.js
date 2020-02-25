import { Vector2 } from "gdxjs/lib";
let redundantAngle = Math.PI / 20;
const tmp = new Vector2();
export default (delta, width, height, goal, knifeCircle) => {
  goal.rotate += Math.PI * (3 / 4) * delta;
  for (const k of knifeCircle) {
    k.rotateAngle += Math.PI * (3 / 4) * delta;
    tmp.set(width / 5, 0);
    tmp.rotateRad(k.rotateAngle);
    k.tmp2.setVector(new Vector2(goal.position.x, goal.position.y));
    k.tmp2.addVector(tmp);
    tmp.set(width / 5 + width / 3.4, 0);
    tmp.rotateRad(k.rotateAngle);
    k.tmp3.setVector(new Vector2(goal.position.x, goal.position.y));
    k.tmp3.addVector(tmp);
    tmp.set(width / 5 + width / 3.4, 0);
    tmp.rotateRad(k.rotateAngle + redundantAngle);
    k.leftcheck.setVector(new Vector2(goal.position.x, goal.position.y));
    k.leftcheck.addVector(tmp);
    tmp.set(width / 5 + width / 3.4, 0);
    tmp.rotateRad(k.rotateAngle - redundantAngle - 0.2);
    k.rightcheck.setVector(new Vector2(goal.position.x, goal.position.y));
    k.rightcheck.addVector(tmp);
  }
  return {
    getKnifeCircle: () => knifeCircle
  };
};
