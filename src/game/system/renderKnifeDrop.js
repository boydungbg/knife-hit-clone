export default (batch, knifeDrop, checkKnifeDrop, index) => {
  if (checkKnifeDrop) {
    batch.setColor(1, 1, 1, 1);
    knifeDrop[index].draw(
      batch,
      knifeDrop[index].x,
      knifeDrop[index].y,
      knifeDrop[index].width,
      knifeDrop[index].height,
      knifeDrop[index].width / 2,
      knifeDrop[index].height / 2,
      knifeDrop[index].rotate,
      1.7,
      1.7
    );
  }
};
