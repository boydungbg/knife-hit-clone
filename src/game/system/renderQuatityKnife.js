import { fillRect } from "gdxjs/lib";
let y;
export default (
  batch,
  width,
  // height,
  knifeIcon,
  // goal,
  knifeCircle,
  gameOption,
  indexOptionGame
) => {
  y = knifeIcon.position.y;
  for (
    let index = 0;
    index <
    gameOption.option[indexOptionGame].countShotting -
      gameOption.option[indexOptionGame].goalKnife;
    index++
  ) {
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
  for (
    let index = 0;
    index <
    gameOption.option[indexOptionGame].countShotting - knifeCircle.length;
    index++
  ) {
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
