import { Vector2, loadTexture, TextureRegion } from "gdxjs/lib";

export default async (gl, width, height) => {
  const knifeCircle = [];
  let Knife_State;
  const bullets = [];

  const createGoalWhite = {
    image: await loadTexture(gl, "./assets/CircleWhite.png"),
    position: new Vector2(width / 14 + width / 8, height / 8 + width / 4),
    radius: width / 1.6
  };

  const createKnifeIcon = {
    image: await loadTexture(gl, "./assets/KnifeIcon.png"),
    position: new Vector2(width / 10, height - width / 6),
    width: width / 25,
    height: width / 7,
    rotate: 5.5
  };

  const createKnife = TextureRegion.splitTexture(
    await loadTexture(gl, "./assets/knife-2.png"),
    12,
    1
  );

  for (const knife of createKnife) {
    knife.x = width / 2 - width / 20;
    knife.y = height - height / 6;
    knife.speed = height * 3;
  }

  const createKnifeDrop = TextureRegion.splitTexture(
    await loadTexture(gl, "./assets/knife-2.png"),
    12,
    1
  );

  for (let knifeDrop of createKnifeDrop) {
    knifeDrop.x = width / 2;
    knifeDrop.y = height / 2;
    knifeDrop.rotate = 0;
    knifeDrop.speed = 900;
  }

  const createGoal = {
    image: await loadTexture(gl, "./assets/Circle.png"),
    position: new Vector2(width / 14 + width / 8, height / 8 + width / 4),
    radius: width / 1.6,
    countKnife: 7,
    rotate: 0
  };

  const createCircleDrop = [
    {
      image: await loadTexture(gl, "./assets/TN_Piece1.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    },
    {
      image: await loadTexture(gl, "./assets/TN_Piece2.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    },
    {
      image: await loadTexture(gl, "./assets/TN_Piece3.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    },
    {
      image: await loadTexture(gl, "./assets/TN_Piece4.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    }
  ];

  const background = await loadTexture(gl, "./assets/background.png");
  const dashboard = await loadTexture(gl, "./assets/dashboard.png");
  const bgGameOver = await loadTexture(gl, "./assets/gameover.png");
  return {
    goalWhite: createGoalWhite,
    knifeIcon: createKnifeIcon,
    knife: createKnife,
    knifeDrop: createKnifeDrop,
    goal: createGoal,
    circleDrop: createCircleDrop,
    background: background,
    dashboard: dashboard,
    bgGameOver: bgGameOver,
    bullets: bullets,
    knifeCircle: knifeCircle,
    knifeState: Knife_State
  };
};
