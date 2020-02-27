import { Vector2 } from "gdxjs/lib";

export const createGoalWhite = (w, h, img) => {
  return {
    image: img,
    position: new Vector2(w / 14 + w / 8, h / 12 + w / 4),
    radius: w / 1.6
  };
};

export const createKnifeIcon = (w, h, img, r = 5.5) => {
  return {
    image: img,
    position: new Vector2(w / 10, h - w / 6),
    width: w / 25,
    height: w / 7,
    rotate: r
  };
};

export const createKnife = (w, h, img) => {
  return {
    image: img,
    position: new Vector2(w / 2 - w / 40, h - h / 6),
    width: w / 13,
    height: w / 3
  };
};

export const createGoal = (w, h, img, r = 0) => {
  return {
    image: img,
    position: new Vector2(w / 14 + w / 8, h / 12 + w / 4),
    radius: w / 1.6,
    countKnife: 7,
    rotate: r
  };
};

export const createKnifeDrop = (w, h, img, r = 0) => {
  return {
    image: img,
    position: new Vector2(w / 2, h / 2),
    width: w / 13,
    height: w / 3,
    rotate: r,
    speed: 700
  };
};

export const createCircleDrop = (w, h, img1, img2, img3, img4) => [
  {
    image: img1,
    position: new Vector2(w / 7, h / 6),
    width: w / 1.4,
    height: w / 1.4,
    rotate: 0,
    opacity: 1
  },
  {
    image: img2,
    position: new Vector2(w / 7, h / 6),
    width: w / 1.4,
    height: w / 1.4,
    rotate: 0,
    opacity: 1
  },
  {
    image: img3,
    position: new Vector2(w / 7, h / 6),
    width: w / 1.4,
    height: w / 1.4,
    rotate: 0,
    opacity: 1
  },
  {
    image: img4,
    position: new Vector2(w / 7, h / 6),
    width: w / 1.4,
    height: w / 1.4,
    rotate: 0,
    opacity: 1
  }
];
