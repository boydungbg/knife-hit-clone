import { fillRect } from "gdxjs";

export default (batch, width, height, knifeIcon, goal, knifeCircle) => {
  let y = knifeIcon.position.y;
  for (let index = 1; index <= goal.countKnife; index++) {
    batch.begin();
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
    batch.end();
    y -= width / 10;
  }
  y = knifeIcon.position.y;
  for (let index = 1; index <= goal.countKnife - knifeCircle.length; index++) {
    batch.begin();
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
    batch.end();
    y -= width / 10;
  }
};
