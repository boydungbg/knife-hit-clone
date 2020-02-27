let timeSpan = 0.034;
const currentPosition = [];
export default (delta, goal, goalWhite, checkVibrate, setCheckVibrate) => {
  if (checkVibrate) {
    currentPosition.push(goal.position.y);
    currentPosition.push(goalWhite.position.y);
    if (timeSpan <= 0) {
      goal.position.y += delta * 400;
      goalWhite.position.y += delta * 400;
      if (goal.position.y >= currentPosition[0]) {
        goal.position.y = currentPosition[0];
        goalWhite.position.y = currentPosition[1];
        timeSpan = 0.034;
        currentPosition.length = 0;
        setCheckVibrate();
      }
    } else {
      timeSpan -= delta;
      goal.position.y -= delta * 400;
      goalWhite.position.y -= delta * 400;
    }
  }
};
