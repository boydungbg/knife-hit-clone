import { fillRect } from "gdxjs";
export default (batch, circleDrop) => {
  for (const s of circleDrop) {
    batch.begin();
    batch.setColor(1, 1, 1, s.opacity);
    fillRect(
      batch,
      s.image,
      s.position.x,
      s.position.y,
      s.width,
      s.height,
      s.rotate
    );
    batch.end();
  }
};
