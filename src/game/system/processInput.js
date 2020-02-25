let shootting = false;
export const shoottingKnife = inputHandler => {
  inputHandler.addEventListener("touchStart", (x, y) => {
    shootting = true;
  });
  return {
    setStateShootting: () => {
      shootting = false;
    },
    getStateShootting: () => shootting
  };
};
