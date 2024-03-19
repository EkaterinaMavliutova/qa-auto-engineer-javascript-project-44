import { playGame, generateRandomInt } from '../index.js';

const rule = 'What is the result of the expression?';

const generateMathOperator = () => {
  const mathOperations = {
    '+': (firstNum, secondNum) => firstNum + secondNum,
    '-': (firstNum, secondNum) => firstNum - secondNum,
    '*': (firstNum, secondNum) => firstNum * secondNum,
  };
  const operators = Object.keys(mathOperations);
  const operator = operators[generateRandomInt(operators.length - 1)];

  return {
    operator,
    calculateExpression: mathOperations[operator],
  };
};

const generateGameQuestion = () => {
  const maxRandomInt = 100;
  const firstArg = generateRandomInt(maxRandomInt);
  const secondArg = generateRandomInt(maxRandomInt);
  const { operator, calculateExpression } = generateMathOperator();

  return {
    question: `${firstArg} ${operator} ${secondArg}`,
    answer: calculateExpression(firstArg, secondArg),
  };
};

const playBrainCalc = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainCalc;
