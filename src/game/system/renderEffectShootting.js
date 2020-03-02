import { fillRect } from "gdxjs/lib";

export default (batch, goalWhite, bullets) => {
  batch.setColor(1, 1, 1, 1);
  for (const bullet of bullets) {
    fillRect(
      batch,
      goalWhite.image,
      bullet.position.x,
      bullet.position.y,
      bullet.radius,
      bullet.radius
    );
  }
};
