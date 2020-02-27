let currentPosKnife = [];
export default (
  delta,
  width,
  height,
  knifeDrop,
  statusGame,
  setCheckKnifeDrop
) => {
  currentPosKnife.push(knifeDrop.position.y);
  knifeDrop.position.y += delta * height * (knifeDrop.speed / height);
  knifeDrop.position.x -= delta * (width / 2);
  knifeDrop.rotate -= Math.PI * 4 * delta;
  if (knifeDrop.position.y > height) {
    knifeDrop.position.y = currentPosKnife[0];
    currentPosKnife.length = 0;
    setCheckKnifeDrop();
    statusGame();
  }
};
