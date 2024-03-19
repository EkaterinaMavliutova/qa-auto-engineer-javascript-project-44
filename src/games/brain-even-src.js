import { playGame, generateRandomInt } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const question = generateRandomInt(maxRandomInt);
  const isEven = question % 2 === 0;
  const answer = isEven ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const playBrainEven = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainEven;
