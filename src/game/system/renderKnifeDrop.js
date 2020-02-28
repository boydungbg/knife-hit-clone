import { fillRect } from "gdxjs";
export default (batch, knifeDrop, checkKnifeDrop, index) => {
  if (checkKnifeDrop) {
    batch.setColor(1, 1, 1, 1);
    fillRect(
      batch,
      knifeDrop[index].image,
      knifeDrop[index].position.x,
      knifeDrop[index].position.y,
      knifeDrop[index].width,
      knifeDrop[index].height,
      knifeDrop[index].rotate
    );
  }
};
