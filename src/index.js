// для запроса информации у пользователя
import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const setsNum = 3;

// случайное число [0; upperBoundExcluded)
export const generateRandomInt = (upperBoundExcluded) => {
  return Math.floor(Math.random() * upperBoundExcluded);
};

// вывод правил игры
export const showRule = (gameRule) => {
  console.log(gameRule);
};

// вопрос пользователю
export const askQuestion = (gameQuestionFunction) => {
  const questionAnswer = gameQuestionFunction();
  return questionAnswer;
};

// получение ответа пользователя
export const getUserAnswer = () => {
  const userAnswer = readlineSync.prompt({
    prompt: 'Your answer: ',
    keepWhitespace: false, // обрезает пробелы вначале и в конце строки
  });
  return userAnswer.toLowerCase();
};

// сравнение ответа пользователя с правильным ответом
export const isCorrectAnswer = (userAnswer, correctAnswer) => {
  return userAnswer === String(correctAnswer);
};

// один раунд игры
export const playGameSet = (gameQuestionFunction) => {
  const answerForQuestion = askQuestion(gameQuestionFunction);
  const answerFromUser = getUserAnswer();
  const isWin = isCorrectAnswer(answerFromUser, answerForQuestion);
  const result = {
    correctAnswer: answerForQuestion,
    userAnswer: answerFromUser,
    isUserWin: isWin,
  };
  return result;
};

// переключатель раундов
export const playGame = (gameQuestionFunction, gameRule) => {
  const userName = greetUser();

  showRule(gameRule);
  for (let i = 1; i <= setsNum; i += 1) {
    const gameSetResult = playGameSet(gameQuestionFunction);
    if (gameSetResult.isUserWin) {
      console.log('Correct!');
    } else {
      console.log(`'${gameSetResult.userAnswer}' is wrong answer ;(. Correct answer was '${gameSetResult.correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
