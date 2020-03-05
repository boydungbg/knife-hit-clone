let goalAngle = 0;
let targetSpeed = Math.PI;
let goalSpeed = Math.PI;
let checkDirectionSpin = true;
let accumulate = 0;
let accumulate_2 = 0;
let accumulate_3 = 0;
const swept = speedSpin => {
  targetSpeed = speedSpin;
};
const reverse = speedSpin => {
  targetSpeed = -speedSpin;
};
const SPEED_CHANGE_INTERVAL_RHYTHM = 0.7;
const SPEED_CHANGE_INTERVAL_RHYTHM_2 = 2;
const SPEED_CHANGE_INTERVAL_RHYTHM_3 = 1;
const sweptWithRhythm = (delta, speedSpin) => {
  if (accumulate >= SPEED_CHANGE_INTERVAL_RHYTHM) {
    if (accumulate_2 >= SPEED_CHANGE_INTERVAL_RHYTHM_2) {
      if (accumulate_3 >= SPEED_CHANGE_INTERVAL_RHYTHM_3) {
        accumulate = 0;
        accumulate_2 = 0;
        accumulate_3 = 0;
      } else {
        targetSpeed = 0;
        accumulate_3 += delta;
      }
    } else {
      targetSpeed = Math.PI;
      accumulate_2 += delta;
    }
  } else {
    accumulate += delta;
    targetSpeed = speedSpin;
  }
};

const reverseWithRhythm = (delta, speedSpin) => {
  if (accumulate >= SPEED_CHANGE_INTERVAL_RHYTHM) {
    if (accumulate_2 >= SPEED_CHANGE_INTERVAL_RHYTHM_2) {
      if (accumulate_3 >= SPEED_CHANGE_INTERVAL_RHYTHM_3) {
        accumulate = 0;
        accumulate_2 = 0;
        accumulate_3 = 0;
      } else {
        targetSpeed = 0;
        accumulate_3 += delta;
      }
    } else {
      targetSpeed = -Math.PI;
      accumulate_2 += delta;
    }
  } else {
    accumulate += delta;
    targetSpeed = -speedSpin;
  }
};
let SPEED_CHANGE_INTERVAL = 0.5;
let SPEED_CHANGE_INTERVAL_2 = 1.5;
const SPEED_CHANGE_INTERVAL_3 = 0.7;
const sweptWithReverse = (delta, speedSpin) => {
  if (checkDirectionSpin) {
    if (accumulate >= SPEED_CHANGE_INTERVAL) {
      if (accumulate_2 >= SPEED_CHANGE_INTERVAL_2) {
        if (accumulate_3 >= SPEED_CHANGE_INTERVAL_3) {
          accumulate = 0;
          accumulate_2 = 0;
          accumulate_3 = 0;
          checkDirectionSpin = false;
          SPEED_CHANGE_INTERVAL = Math.random() * 1 + 1;
        } else {
          targetSpeed = 0;
          accumulate_3 += delta;
        }
      } else {
        targetSpeed = -Math.PI;
        accumulate_2 += delta;
      }
    } else {
      accumulate += delta;
      targetSpeed = -speedSpin;
    }
  } else {
    if (accumulate >= SPEED_CHANGE_INTERVAL_RHYTHM) {
      if (accumulate_2 >= SPEED_CHANGE_INTERVAL_RHYTHM_2) {
        if (accumulate_3 >= SPEED_CHANGE_INTERVAL_RHYTHM_3) {
          accumulate = 0;
          accumulate_2 = 0;
          accumulate_3 = 0;
          checkDirectionSpin = true;
          SPEED_CHANGE_INTERVAL = Math.random() * 1 + 1;
        } else {
          targetSpeed = 0;
          accumulate_3 += delta;
        }
      } else {
        targetSpeed = Math.PI;
        accumulate_2 += delta;
      }
    } else {
      accumulate += delta;
      targetSpeed = speedSpin;
    }
  }
};

export default (delta, randomSpin, speedSpin) => {
  goalSpeed += (targetSpeed - goalSpeed) * 0.1;
  goalAngle += goalSpeed * delta;
  while (goalAngle >= 2 * Math.PI) {
    goalAngle -= 2 * Math.PI;
  }
  while (goalAngle < 0) {
    goalAngle += 2 * Math.PI;
  }
  switch (randomSpin) {
    case 1:
      swept(speedSpin);
      break;
    case 2:
      reverse(speedSpin);
      break;
    case 3:
      sweptWithRhythm(delta, speedSpin);
      break;
    case 4:
      reverseWithRhythm(delta, speedSpin);
      break;
    case 5:
      sweptWithReverse(delta, speedSpin);
      break;
    default:
      swept(speedSpin);
      break;
  }
  return { angle: goalAngle, speed: goalSpeed };
};
