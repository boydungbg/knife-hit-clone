import { Vector2, loadTexture } from "gdxjs/lib";

const bullets = [];
const knifeCircle = [];
let Knife_State;
export default async (gl, width, height) => {
  const createGoalWhite = {
    image: await loadTexture(gl, "./Sprite2/CircleWhite.png"),
    position: new Vector2(width / 14 + width / 8, height / 12 + width / 4),
    radius: width / 1.6
  };

  const createKnifeIcon = {
    image: await loadTexture(gl, "./Sprite2/KnifeIcon.png"),
    position: new Vector2(width / 10, height - width / 6),
    width: width / 25,
    height: width / 7,
    rotate: 5.5
  };

  const createKnife = {
    image: await loadTexture(gl, "./Sprite2/Knife.png"),
    position: new Vector2(width / 2 - width / 40, height - height / 6),
    width: width / 13,
    height: width / 3
  };

  const createGoal = {
    image: await loadTexture(gl, "./Sprite2/Circle.png"),
    position: new Vector2(width / 14 + width / 8, height / 12 + width / 4),
    radius: width / 1.6,
    countKnife: 7,
    rotate: 0
  };

  const createKnifeDrop = {
    image: await loadTexture(gl, "./Sprite2/Knife.png"),
    position: new Vector2(width / 2, height / 2),
    width: width / 13,
    height: width / 3,
    rotate: 0,
    speed: 1000
  };

  const createCircleDrop = [
    {
      image: await loadTexture(gl, "./Sprite2/TN_Piece1.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    },
    {
      image: await loadTexture(gl, "./Sprite2/TN_Piece2.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    },
    {
      image: await loadTexture(gl, "./Sprite2/TN_Piece3.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    },
    {
      image: await loadTexture(gl, "./Sprite2/TN_Piece4.png"),
      position: new Vector2(width / 7, height / 6),
      width: width / 1.4,
      height: width / 1.4,
      rotate: 0,
      opacity: 1
    }
  ];

  const background = await loadTexture(gl, "./Sprite1/background.png");
  const board = await loadTexture(gl, "./Sprite2/BG.png");

  return {
    goalWhite: createGoalWhite,
    knifeIcon: createKnifeIcon,
    knife: createKnife,
    knifeDrop: createKnifeDrop,
    goal: createGoal,
    circleDrop: createCircleDrop,
    background: background,
    board: board,
    bullets: bullets,
    knifeCircle: knifeCircle,
    knifeState: Knife_State
  };
};
