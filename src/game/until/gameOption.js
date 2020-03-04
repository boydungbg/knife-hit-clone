export default () => {
  const option = [
    {
      countShotting: 5,
      goalKnife: 0,
      apple: 0,
      speedSpin: Math.PI,
      randomSpin: 1
    },
    {
      countShotting: 7,
      goalKnife: 1,
      apple: 0,
      speedSpin: Math.PI,
      randomSpin: Math.floor(Math.random() * 1 + 1)
    },
    {
      countShotting: 10,
      goalKnife: Math.floor(Math.random() * 2 + 2),
      apple: 0,
      speedSpin: Math.floor(Math.random() * 3 + 1) * Math.PI,
      randomSpin: Math.floor(Math.random() * 4 + 2)
    },
    {
      countShotting: 10,
      goalKnife: Math.floor(Math.random() * 2 + 2),
      apple: 0,
      speedSpin: Math.floor(Math.random() * 3 + 1) * Math.PI,
      randomSpin: Math.floor(Math.random() * 4 + 2)
    }
  ];
  return {
    option: option
  };
};
