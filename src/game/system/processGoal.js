import { Vector2 } from "gdxjs/lib";
let redundantAngle = Math.PI / 25;
const tmp = new Vector2();
export default (delta, width, height, goal, knifeCircle) => {
  goal.rotate += Math.PI * (3 / 4) * delta;
  for (const k of knifeCircle) {
    k.rotateAngle += Math.PI * (3 / 4) * delta;
    tmp.set(width / 6, 10);
    tmp.rotateRad(k.rotateAngle);
    k.tmp2.setVector(
      new Vector2(
        goal.position.x + goal.radius / 2,
        goal.position.y + goal.radius / 2
      )
    );
    k.tmp2.addVector(tmp);
    tmp.set(width / 2, 7);
    tmp.rotateRad(k.rotateAngle);
    k.tmp3.setVector(
      new Vector2(
        goal.position.x + goal.radius / 2,
        goal.position.y + goal.radius / 2
      )
    );
    k.tmp3.addVector(tmp);
    tmp.set(width / 2, 10);
    tmp.rotateRad(k.rotateAngle + redundantAngle);
    k.leftcheck.setVector(
      new Vector2(
        goal.position.x + goal.radius / 2,
        goal.position.y + goal.radius / 2
      )
    );
    k.leftcheck.addVector(tmp);
    tmp.set(width / 2, 7);
    tmp.rotateRad(k.rotateAngle - redundantAngle - 0.2);
    k.rightcheck.setVector(
      new Vector2(
        goal.position.x + goal.radius / 2,
        goal.position.y + goal.radius / 2
      )
    );
    k.rightcheck.addVector(tmp);
  }
  return {
    getKnifeCircle: () => knifeCircle
  };
};
