import renderBackground from "./renderBackground";
let posX = 0;
let posX2 = 0;
export default (
  batch,
  entity,
  tex,
  selectKnife,
  width,
  height,
  index = null
) => {
  renderBackground(batch, tex, width, height);
  if (selectKnife) {
    posX = width / 12;
    posX2 = width / 12;
    for (let i = 0; i < entity.knife.length; i++) {
      if (i < 6) {
        entity.knife[i].draw(
          batch,
          (posX += entity.knife[i].width * 2),
          height / 2.5,
          entity.knife[i].width,
          entity.knife[i].height,
          0,
          0,
          0,
          1.2,
          1.2
        );
      } else {
        entity.knife[i].draw(
          batch,
          (posX2 += entity.knife[i].width * 2),
          height / 1.9,
          entity.knife[i].width,
          entity.knife[i].height,
          0,
          0,
          0,
          1.2,
          1.2
        );
      }
    }
  } else {
    if (index !== null) {
      entity.knife[index].draw(
        batch,
        width / 2 - (entity.knife[index].width * 1.5) / 2,
        height / 2 - (entity.knife[index].height * 1.5) / 2,
        entity.knife[index].width,
        entity.knife[index].height,
        0,
        0,
        0,
        1.5,
        1.5
      );
    }
  }
};
