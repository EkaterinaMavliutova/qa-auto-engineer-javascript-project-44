import { playGame, generateRandomInt } from '../index.js';

// правила игры
const rule = 'What is the result of the expression?';

// возвращает один из 3-ех операторов: + или - или *
const generateMathOperator = () => {
  const mathOperatorCode = generateRandomInt(3); // случайное число [0;2]
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
  const firstArg = generateRandomInt(101); // случайное число [0; 100]
  const secondArg = generateRandomInt(101);
  const mathExpression = `${firstArg} ${generateMathOperator()} ${secondArg}`;

  console.log(`Question: ${mathExpression}`);

  return eval(mathExpression); // вычисляет выражение из строки
};

const playBrainCalc = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainCalc;
