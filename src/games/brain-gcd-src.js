import { playGame, generateRandomInt } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findMaxCommonDivisor = (firstNum, secondNum) => {
  let maxNum = Math.max(firstNum, secondNum);
  let minNum = Math.min(firstNum, secondNum);
  let maxCommonDivisor = 0;

  if (maxNum === 0 || minNum === 0) {
    maxCommonDivisor = maxNum;
  } else {
    for (let i = 1; minNum > 0; i += 1) {
      const remainder = maxNum % minNum;
      maxNum = minNum;
      minNum = remainder;
    }
    maxCommonDivisor = maxNum;
  }

  return maxCommonDivisor;
};

const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const firstNum = generateRandomInt(maxRandomInt);
  const secondNum = generateRandomInt(maxRandomInt);

  return {
    question: `${firstNum} ${secondNum}`,
    answer: findMaxCommonDivisor(firstNum, secondNum),
  };
};

const playBrainGcd = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainGcd;
