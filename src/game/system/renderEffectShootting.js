import { fillRect } from "gdxjs";

export default (batch, goalWhite, bullets) => {
  for (const bullet of bullets) {
    batch.begin();
    batch.setColor(1, 1, 1, 0.9);
    fillRect(
      batch,
      goalWhite.image,
      bullet.position.x,
      bullet.position.y,
      bullet.radius,
      bullet.radius
    );
    batch.end();
  }
};
