import { playGame, generateRandomInt, findMaxCommontDivisor } from '../index.js';

// правила игры
const rule = 'Find the greatest common divisor of given numbers.';

// вопрос для пользователя в раунде игры и ответ на него на выходе
const generateGameQuestion = () => {
  const firstNum = generateRandomInt(101); // число [0 ; 100]
  const secondNum = generateRandomInt(101);
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
