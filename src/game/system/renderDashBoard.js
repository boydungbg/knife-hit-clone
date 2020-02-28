import renderBackground from "./renderBackground";
let posX;
export default (batch, entity, selectKnife, width, height, index) => {
  renderBackground(batch, entity.board, width, height);
  if (selectKnife) {
    posX = width / 4;
    for (let knife of entity.knife) {
      batch.draw(
        knife.image,
        (posX += knife.width * 2) - knife.width / 2,
        height / 2 - knife.height / 2,
        knife.width,
        knife.height
      );
    }
  } else {
    batch.draw(
      entity.knife[index].image,
      width / 2 - entity.knife[index].width / 2,
      height / 2 - entity.knife[index].height / 2,
      entity.knife[index].width,
      entity.knife[index].height
    );
  }
};
