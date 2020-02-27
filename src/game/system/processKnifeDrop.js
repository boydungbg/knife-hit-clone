export default (delta, width, height, knifeDrop) => {
  knifeDrop.position.y += delta * height * (knifeDrop.speed / height);
  knifeDrop.position.x -= delta * (width / 2);
  knifeDrop.rotate -= Math.PI * 4 * delta;
};
