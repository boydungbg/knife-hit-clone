export default (batch, knife, index) => {
  batch.setColor(1, 1, 1, 1);
  knife[index].draw(
    batch,
    knife[index].x,
    knife[index].y,
    knife[index].width,
    knife[index].height,
    0,
    0,
    0,
    1.7,
    1.7
  );
};
