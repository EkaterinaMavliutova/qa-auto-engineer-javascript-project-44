import { playGame, generateRandomInt, findMaxCommontDivisor } from '../index.js';

// правила игры
const rule = 'Find the greatest common divisor of given numbers.';

// вопрос для пользователя в раунде игры и ответ на него на выходе
const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const firstNum = generateRandomInt(maxRandomInt);
  const secondNum = generateRandomInt(maxRandomInt);
  const gameQuestion = `${firstNum} ${secondNum}`;

  return {
    question: gameQuestion,
    answer: findMaxCommontDivisor(firstNum, secondNum),
  };
};

const playBrainGcd = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainGcd;
