import { fillRect, drawLine } from "gdxjs";
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
      knife[index].image,
      k.tmp2.x,
      k.tmp2.y,
      k.tmp3.x,
      k.tmp3.y,
      width / 6
    );
    // batch.draw(
    //   entity.knife[index].texture,
    //   width / 2,
    //   height / 2 - entity.knife[index].height / 2,
    //   entity.knife[index].width,
    //   entity.knife[index].height,
    //   0,
    //   0,
    //   0,
    //   1,
    //   1,
    //   entity.knife[index].u,
    //   entity.knife[index].v,
    //   entity.knife[index].u2,
    //   entity.knife[index].v2
    // );
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
