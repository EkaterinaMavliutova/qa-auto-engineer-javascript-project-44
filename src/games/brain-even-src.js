import { playGame, generateRandomInt } from '../index.js';

// правила игры
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

// вопрос для пользователя в раунде игры и ответ на него на выходе
const generateGameQuestion = () => {
  const gameQuestion = generateRandomInt(101); // число [0 ; 100]
  const isEven = gameQuestion % 2 === 0;
  const gameQuestionAnswer = isEven ? 'yes' : 'no';

  console.log(`Question: ${gameQuestion}`);
  return gameQuestionAnswer;
};

const playBrainEven = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainEven;
