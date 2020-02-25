import { fillRect } from "gdxjs";

export default (batch, knife) => {
  batch.begin();
  batch.setColor(1, 1, 1, 1);
  fillRect(
    batch,
    knife.image,
    knife.position.x,
    knife.position.y,
    knife.width,
    knife.height
  );
  batch.end();
};
