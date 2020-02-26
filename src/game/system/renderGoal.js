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
  for (const k of knifeCircle) {
    batch.begin();
    batch.setColor(1, 1, 1, 1);
    drawLine(
      batch,
      knife.image,
      k.tmp2.x,
      k.tmp2.y,
      k.tmp3.x,
      k.tmp3.y,
      width / 6
    );
    batch.end();
  }
  batch.begin();
  batch.setColor(1, 1, 1, 1);
  fillRect(
    batch,
    goal.image,
    goal.position.x,
    goal.position.y,
    goal.radius,
    goal.radius,
    goal.rotate
  );
  batch.end();
  if (statedisplayCircleWhite) {
    batch.begin();
    batch.setColor(1, 1, 1, 0.4);
    fillRect(
      batch,
      goalWhite.image,
      goalWhite.position.x,
      goalWhite.position.y,
      goalWhite.radius,
      goalWhite.radius
    );
    batch.end();
  }
};
