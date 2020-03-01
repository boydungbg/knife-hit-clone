let currentPosKnife = [];
export default (
  delta,
  width,
  height,
  knifeDrop,
  statusGame,
  setCheckKnifeDrop,
  index
) => {
  currentPosKnife.push(knifeDrop[index].y);
  currentPosKnife.push(knifeDrop[index].x);
  knifeDrop[index].y += delta * height * (knifeDrop[index].speed / height);
  knifeDrop[index].x -= delta * (width / 2);
  knifeDrop[index].rotate -= Math.PI * 4 * delta;
  if (knifeDrop[index].y > height) {
    knifeDrop[index].y = currentPosKnife[0];
    knifeDrop[index].x = currentPosKnife[1];
    currentPosKnife.length = 0;
    setCheckKnifeDrop();
    statusGame();
  }
};
