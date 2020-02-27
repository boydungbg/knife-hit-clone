import { fillRect, drawLine } from "gdxjs";
export default (
  batch,
  width,
  height,
  knifeCircle,
  knife,
  goal,
  goalWhite,
  statedisplayCircleWhite
) => {
  batch.setColor(1, 1, 1, 1);
  for (const k of knifeCircle) {
    drawLine(
      batch,
      knife.image,
      k.tmp2.x,
      k.tmp2.y,
      k.tmp3.x,
      k.tmp3.y,
      width / 6
    );
  }
  fillRect(
    batch,
    goal.image,
    goal.position.x,
    goal.position.y,
    goal.radius,
    goal.radius,
    goal.rotate
  );

  if (statedisplayCircleWhite) {
    batch.setColor(1, 1, 1, 0.4);
    fillRect(
      batch,
      goalWhite.image,
      goalWhite.position.x,
      goalWhite.position.y,
      goalWhite.radius,
      goalWhite.radius
    );
  }
};
