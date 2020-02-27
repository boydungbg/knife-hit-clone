export default (
  delta,
  circleDrop,
  statusGame,
  width,
  setCheckVibrate,
  bullets
) => {
  circleDrop[0].position.x -= delta * (width * 3);
  circleDrop[0].position.y += delta * (width * 3);
  circleDrop[1].position.x -= delta * (width * 3);
  circleDrop[1].position.y -= delta * (width * 3);
  circleDrop[2].position.x += delta * (width * 3);
  circleDrop[2].position.y += delta * (width * 3);
  circleDrop[3].position.x += delta * (width * 3);
  circleDrop[3].position.y -= delta * (width * 3);
  for (const k of circleDrop) {
    if (k.opacity > 0) {
      k.opacity -= 0.09;
    } else {
      k.opacity = 0;
    }
    // restart game
    if (k.opacity === 0) {
      bullets.length = 0;
      setCheckVibrate();
      statusGame();
    }
  }
};
