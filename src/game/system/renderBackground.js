import { fillRect } from "gdxjs/lib";
export default (batch, backgound, width, height) => {
  batch.setColor(1, 1, 1, 1);
  fillRect(batch, backgound, 0, 0, width, height);
};
