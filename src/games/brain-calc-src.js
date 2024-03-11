import { playGame, generateRandomInt } from '../index.js';

// правила игры
const rule = 'What is the result of the expression?';

// возвращает один из 3-ех операторов: + или - или *
const generateMathOperator = () => {
  const mathOperatorCode = generateRandomInt(2); // случайное число [0;2]
  switch (mathOperatorCode) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};

// вопрос для пользователя в раунде игры и ответ на него на выходе
const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const firstArg = generateRandomInt(maxRandomInt);
  const secondArg = generateRandomInt(maxRandomInt);
  const mathOperator = generateMathOperator();
  const mathExpression = `${firstArg} ${mathOperator} ${secondArg}`;
  let answerForExpression = 0;

  switch (mathOperator) {
    case '+':
      answerForExpression = firstArg + secondArg;
      break;
    case '-':
      answerForExpression = firstArg - secondArg;
      break;
    case '*':
      answerForExpression = firstArg * secondArg;
      break;
    default:
      answerForExpression = firstArg + secondArg;
  }

  return {
    question: mathExpression,
    answer: answerForExpression,
  };
};

// функция игры
const playBrainCalc = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainCalc;
