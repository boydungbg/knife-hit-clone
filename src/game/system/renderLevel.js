let x;
let y;
export default (batch, entity, width, height, indexOption) => {
  x = width / 3.5;
  y = height / 30;
  batch.setColor(1, 1, 1, 1);
  for (let index = 1; index <= 4; index++) {
    batch.draw(entity.goalWhite.image, x, y, width / 30, width / 30);
    x += width / 15;
  }
  x = width / 3.5;
  batch.setColor(218 / 236, 165 / 236, 37 / 236, 1);
  for (let index = 0; index <= indexOption; index++) {
    batch.draw(entity.goalWhite.image, x, y, width / 30, width / 30);
    x += width / 15;
  }
  batch.setColor(1, 1, 1, 1);
  batch.draw(
    entity.knifeIcon.image,
    width / 1.7,
    height / 120,
    entity.knifeIcon.width,
    entity.knifeIcon.height,
    entity.knifeIcon.width / 2,
    entity.knifeIcon.height / 2,
    -0.9
  );
};
