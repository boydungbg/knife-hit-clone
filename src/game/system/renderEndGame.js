import renderBackground from "./renderBackground";
let posX;
export default (batch, entity, selectKnife, width, height) => {
  renderBackground(batch, entity.board, width, height);
  if (selectKnife) {
    posX = (width / 4) * 1;
    for (let knife of entity.knife) {
      batch.draw(
        knife.image,
        (posX += knife.width * 2),
        height / 3,
        knife.width,
        knife.height
      );
    }
  }
};
