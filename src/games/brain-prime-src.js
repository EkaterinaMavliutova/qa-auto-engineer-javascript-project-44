import { playGame, generateRandomInt } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (positiveInt) => {
  if (positiveInt <= 1) {
    return false;
  }
  for (let i = 2; i < positiveInt; i += 1) {
    if (positiveInt % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameQuestion = () => {
  const minRandomInt = 1;
  const maxRandomInt = 100;
  const question = generateRandomInt(maxRandomInt, minRandomInt);
  const answer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    answer,
  };
};

const playBrainPrime = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainPrime;
