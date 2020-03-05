import { Vector2 } from "gdxjs/lib";

const tmp = new Vector2();
export default (delta, bullets) => {
  for (let index = bullets.length - 1; index >= 0; index--) {
    tmp.setVector(bullets[index].velocity).scale(delta * bullets[index].speed);
    bullets[index].position.addVector(tmp);
    bullets[index].lifeSpan += delta;
    if (bullets[index].lifeSpan >= bullets[index].expire) {
      bullets.splice(index, 1);
    }
  }
};
