import { playGame, generateRandomInt } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkIfEven = (num) => {
  const isEven = num % 2 === 0;

  return isEven ? 'yes' : 'no';
};

const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const question = generateRandomInt(maxRandomInt);
  const answer = checkIfEven(question);

  return {
    question,
    answer,
  };
};

const playBrainEven = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainEven;
