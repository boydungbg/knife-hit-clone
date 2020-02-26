import { Vector2 } from "gdxjs";

export default (delta, bullets) => {
  const tmp = new Vector2();
  for (let index = bullets.length - 1; index >= 0; index--) {
    const bullet = bullets[index];
    tmp.setVector(bullet.velocity).scale(delta * 3);
    bullet.position.addVector(tmp);
    bullet.lifeSpan += delta;
    if (bullet.lifeSpan >= bullet.expire) {
      bullets.splice(index, 1);
    }
  }
};
