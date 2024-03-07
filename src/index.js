// для запроса информации у пользователя
import readlineSync from 'readline-sync';
import greetUser from './cli.js'; // приветствие пользователя в игре

const setsNum = 3;

// случайное число [0; maxIntExcluded)
export const generateRandomInt = (maxIntExcluded) => Math.floor(Math.random() * maxIntExcluded);

// определение максимального общего делителя для двух положительных чисел
export const findMaxCommontDivisor = (firstNumber, secondNumber) => {
  const maxPossibleDivisor = Math.min(firstNumber, secondNumber);
  let maxCommonDivisor = 0;

  for (let i = 0; i <= maxPossibleDivisor; i += 1) {
    const isCommonDivisor = (firstNumber % i === 0) && (secondNumber % i === 0);
    if (isCommonDivisor) {
      maxCommonDivisor = i;
    }
  }

  return maxCommonDivisor;
};

// вывод правил игры
export const showRule = (gameRule) => {
  console.log(gameRule);
};

// вопрос пользователю
export const askQuestion = (gameQuestion) => {
  console.log(`Question: ${gameQuestion}`);
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
export const isCorrectAnswer = (userAnswer, correctAnswer) => userAnswer === String(correctAnswer);

// один раунд игры
export const playGameRound = (gameQuestionFunction) => {
  const questionAndAnswer = gameQuestionFunction();
  askQuestion(questionAndAnswer.question);
  const answerFromUser = getUserAnswer();
  const isWin = isCorrectAnswer(answerFromUser, questionAndAnswer.answer);
  const result = {
    correctAnswer: questionAndAnswer.answer,
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
    const gameRoundResult = playGameRound(gameQuestionFunction);
    if (gameRoundResult.isUserWin) {
      console.log('Correct!');
    } else {
      console.log(`'${gameRoundResult.userAnswer}' is wrong answer ;(. Correct answer was '${gameRoundResult.correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
