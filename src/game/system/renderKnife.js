import { fillRect } from "gdxjs";

export default (batch, knife, index) => {
  batch.setColor(1, 1, 1, 1);
  fillRect(
    batch,
    knife[index].image,
    knife[index].position.x,
    knife[index].position.y,
    knife[index].width,
    knife[index].height
  );
};
