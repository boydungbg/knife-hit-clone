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
  currentPosKnife.push(knifeDrop[index].position.y);
  currentPosKnife.push(knifeDrop[index].position.x);
  knifeDrop[index].position.y +=
    delta * height * (knifeDrop[index].speed / height);
  knifeDrop[index].position.x -= delta * (width / 2);
  knifeDrop[index].rotate -= Math.PI * 4 * delta;
  if (knifeDrop[index].position.y > height) {
    knifeDrop[index].position.y = currentPosKnife[0];
    knifeDrop[index].position.x = currentPosKnife[1];
    currentPosKnife.length = 0;
    setCheckKnifeDrop();
    statusGame();
  }
};
