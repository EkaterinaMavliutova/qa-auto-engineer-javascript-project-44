import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const roundsNum = 3;

export const generateRandomInt = (maxInt, minInt = 0) => {
  const minCeiled = Math.ceil(minInt);
  const maxFloored = Math.floor(maxInt);

  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const showRule = (gameRule) => {
  console.log(gameRule);
};

export const askQuestion = (gameQuestion) => {
  console.log(`Question: ${gameQuestion}`);
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.prompt({
    prompt: 'Your answer: ',
    keepWhitespace: false,
  });

  return userAnswer.toLowerCase();
};

export const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === String(correctAnswer);

export const playGameRound = (gameQuestionFunction) => {
  const { question, answer } = gameQuestionFunction();
  askQuestion(question);
  const userAnswer = getUserAnswer();

  return {
    correctAnswer: answer,
    userAnswer,
    isUserWin: isCorrectAnswer(userAnswer, answer),
  };
};

export const playGame = (gameQuestionFunction, gameRule) => {
  const userName = greetUser();

  showRule(gameRule);
  for (let i = 1; i <= roundsNum; i += 1) {
    const { correctAnswer, userAnswer, isUserWin } = playGameRound(gameQuestionFunction);
    if (isUserWin) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);

      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
