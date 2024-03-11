import { playGame, generateRandomInt, isPrime } from '../index.js';

// правила игры
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// вопрос для пользователя в раунде игры и ответ на него на выходе
const generateGameQuestion = () => {
  const minRandomInt = 1;
  const maxRandomInt = 100;
  const gameQuestion = generateRandomInt(maxRandomInt, minRandomInt);
  const gameQuestionAnswer = isPrime(gameQuestion) ? 'yes' : 'no';

  return {
    question: gameQuestion,
    answer: gameQuestionAnswer,
  };
};

// функция игры
const playBrainPrime = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainPrime;
