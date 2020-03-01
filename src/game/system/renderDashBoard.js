import renderBackground from "./renderBackground";
let posX = 0;
let posX2 = 0;
export default (batch, entity, selectKnife, width, height, index) => {
  renderBackground(batch, entity.board, width, height);
  if (selectKnife) {
    posX = width / 8;
    posX2 = width / 8;
    for (let i = 0; i < entity.knife.length; i++) {
      // batch.draw(
      //   knife.image,
      //   (posX += knife.width * 2) - knife.width / 2,
      //   height / 2 - knife.height / 2,
      //   knife.width,
      //   knife.height
      // );
      if (i < 6) {
        batch.draw(
          entity.knife[i].texture,
          (posX += entity.knife[i].width * 2),
          height / 2.5,
          entity.knife[i].width,
          entity.knife[i].height,
          0,
          0,
          0,
          1,
          1,
          entity.knife[i].u,
          entity.knife[i].v,
          entity.knife[i].u2,
          entity.knife[i].v2
        );
      } else {
        batch.draw(
          entity.knife[i].texture,
          (posX2 += entity.knife[i].width * 2),
          height / 2,
          entity.knife[i].width,
          entity.knife[i].height,
          0,
          0,
          0,
          1,
          1,
          entity.knife[i].u,
          entity.knife[i].v,
          entity.knife[i].u2,
          entity.knife[i].v2
        );
      }
    }
  } else {
    // batch.draw(
    //   entity.knife[index].image,
    //   width / 2 - entity.knife[index].width / 2,
    //   height / 2 - entity.knife[index].height / 2,
    //   entity.knife[index].width,
    //   entity.knife[index].height
    // );
    batch.draw(
      entity.knife[index].texture,
      width / 2,
      height / 2 - entity.knife[index].height / 2,
      entity.knife[index].width,
      entity.knife[index].height,
      0,
      0,
      0,
      1,
      1,
      entity.knife[index].u,
      entity.knife[index].v,
      entity.knife[index].u2,
      entity.knife[index].v2
    );
  }
};
