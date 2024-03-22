import { playGame, generateRandomInt } from '../index.js';

const rule = 'What is the result of the expression?';
const mathOperations = {
  '+': (firstNum, secondNum) => firstNum + secondNum,
  '-': (firstNum, secondNum) => firstNum - secondNum,
  '*': (firstNum, secondNum) => firstNum * secondNum,
};

const selectOperatorByIndex = (index) => {
  const operators = Object.keys(mathOperations);

  return operators[index];
};

const calculateExpression = (
  operator,
  firstNum,
  secondNum,
) => mathOperations[operator](firstNum, secondNum);

const generateMathExpression = (firstNum, secondNum) => {
  const opetatorsNum = Object.keys(mathOperations).length;
  const operator = selectOperatorByIndex(generateRandomInt(opetatorsNum - 1));
  const calculatedExpression = calculateExpression(operator, firstNum, secondNum);

  return {
    operator,
    calculatedExpression,
  };
};

const generateGameQuestion = () => {
  const maxArg = 100;
  const firstArg = generateRandomInt(maxArg);
  const secondArg = generateRandomInt(maxArg);
  const { operator, calculatedExpression } = generateMathExpression(firstArg, secondArg);

  return {
    question: `${firstArg} ${operator} ${secondArg}`,
    answer: calculatedExpression,
  };
};

const playBrainCalc = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainCalc;
