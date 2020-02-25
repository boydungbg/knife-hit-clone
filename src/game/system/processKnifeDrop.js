const random = Math.round(Math.random() * 10);
export default (delta, width, height, knifeDrop) => {
  knifeDrop.position.y += delta * height * (700 / 625);
  random <= 5
    ? (knifeDrop.position.x -= delta * (width / 2))
    : (knifeDrop.position.x += delta * (width / 2));
  knifeDrop.rotate -= Math.PI * 4 * delta;
};
