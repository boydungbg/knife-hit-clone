import { fillRect } from "gdxjs";
export default (batch, knifeDrop, checkKnifeDrop) => {
  if (checkKnifeDrop) {
    batch.setColor(1, 1, 1, 1);
    fillRect(
      batch,
      knifeDrop.image,
      knifeDrop.position.x,
      knifeDrop.position.y,
      knifeDrop.width,
      knifeDrop.height,
      knifeDrop.rotate
    );
  }
};
