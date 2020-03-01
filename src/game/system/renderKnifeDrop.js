export default (batch, knifeDrop, checkKnifeDrop, index) => {
  if (checkKnifeDrop) {
    batch.setColor(1, 1, 1, 1);
    batch.draw(
      knifeDrop[index].texture,
      knifeDrop[index].x,
      knifeDrop[index].y,
      knifeDrop[index].width,
      knifeDrop[index].height,
      0,
      0,
      knifeDrop[index].rotate,
      1,
      1,
      knifeDrop[index].u,
      knifeDrop[index].v,
      knifeDrop[index].u2,
      knifeDrop[index].v2
    );
  }
};
