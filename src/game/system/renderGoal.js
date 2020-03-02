import { fillRect, Vector2 } from "gdxjs/lib";
const tmpV1 = new Vector2(0, 0);
const tmpV2 = new Vector2(0, 0);
const drawLine = (
  batch,
  knife,
  x1,
  y1,
  x2,
  y2,
  thickness = 1,
  r = 1,
  g = 1,
  b = 1,
  a = 1
) => {
  tmpV1.set(x1, y1);
  tmpV2.set(x2, y2);
  const length = tmpV1.distance(tmpV2);
  const angle = tmpV2.subVector(tmpV1).angle();
  batch.setColor(r, g, b, a);
  knife.draw(batch, x1, y1, thickness * 0.5, length, 0, 0, angle - Math.PI / 2);
  batch.setColor(1, 1, 1, 1);
};

export default (
  batch,
  width,
  height,
  knifeCircle,
  knife,
  goal,
  goalWhite,
  statedisplayCircleWhite,
  index
) => {
  batch.setColor(1, 1, 1, 1);
  for (const k of knifeCircle) {
    drawLine(
      batch,
      knife[index],
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
