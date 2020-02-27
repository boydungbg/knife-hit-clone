import { Vector2 } from "gdxjs";

const tmp = new Vector2();
export default (delta, bullets) => {
  for (let index = bullets.length - 1; index >= 0; index--) {
    const bullet = bullets[index];
    tmp.setVector(bullet.velocity).scale(delta * bullet.speed);
    bullet.position.addVector(tmp);
    bullet.lifeSpan += delta;
    if (bullet.lifeSpan >= bullet.expire) {
      bullets.splice(index, 1);
    }
  }
};
