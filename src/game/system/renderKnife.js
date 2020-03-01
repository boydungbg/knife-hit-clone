// import { fillRect } from "gdxjs";

export default (batch, knife, index) => {
  batch.setColor(1, 1, 1, 1);
  // fillRect(
  //   batch,
  //   knife[index].image,
  //   knife[index].x,
  //   knife[index].y,
  //   knife[index].width,
  //   knife[index].height
  // );
  batch.draw(
    knife[index].texture,
    knife[index].x,
    knife[index].y,
    knife[index].width,
    knife[index].height,
    0,
    0,
    0,
    1,
    1,
    knife[index].u,
    knife[index].v,
    knife[index].u2,
    knife[index].v2
  );
};
