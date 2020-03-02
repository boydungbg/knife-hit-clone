import { fillRect } from "gdxjs/lib";

export default (batch, width, height, knifeIcon, goal, knifeCircle) => {
  let y = knifeIcon.position.y;
  for (let index = 0; index < goal.countKnife; index++) {
    batch.setColor(0, 0, 0, 1);
    fillRect(
      batch,
      knifeIcon.image,
      knifeIcon.position.x,
      y,
      knifeIcon.width,
      knifeIcon.height,
      knifeIcon.rotate
    );

    y -= width / 10;
  }
  y = knifeIcon.position.y;
  for (let index = 0; index < goal.countKnife - knifeCircle.length; index++) {
    batch.setColor(1, 1, 1, 1);
    fillRect(
      batch,
      knifeIcon.image,
      knifeIcon.position.x,
      y,
      knifeIcon.width,
      knifeIcon.height,
      knifeIcon.rotate
    );

    y -= width / 10;
  }
};
