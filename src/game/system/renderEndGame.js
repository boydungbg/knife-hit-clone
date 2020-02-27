import renderBackground from "./renderBackground";

export default (batch, entity, width, height) => {
  renderBackground(batch, entity.board, width, height);
};
