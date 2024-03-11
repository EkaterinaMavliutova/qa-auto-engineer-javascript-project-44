import { playGame, generateRandomInt } from '../index.js';

// правила игры
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// вопрос для пользователя в раунде игры и ответ на него на выходе
const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const gameQuestion = generateRandomInt(maxRandomInt);
  const isEven = gameQuestion % 2 === 0;
  const gameQuestionAnswer = isEven ? 'yes' : 'no';

  return {
    question: gameQuestion,
    answer: gameQuestionAnswer,
  };
};

// функция игры
const playBrainEven = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainEven;
