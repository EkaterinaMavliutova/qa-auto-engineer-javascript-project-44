import { playGame, generateRandomInt, generateArithmeticProgression } from '../index.js';

const rule = 'What number is missing in the progression?';

const generateGameQuestion = () => {
  // ограничения для арифметической прогрессии
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const maxfirstElement = 50;
  const minChangingStep = 2;
  const maxChangingStep = 10;
  // параметры арифметической прогрессии
  const firstElement = generateRandomInt(maxfirstElement);
  const progressionLength = generateRandomInt(maxProgressionLength, minProgressionLength);
  const changingStep = generateRandomInt(maxChangingStep, minChangingStep);
  // вызов функции, генерирующей случайную арифметическую прогрессию (массив)
  const progression = generateArithmeticProgression(
    firstElement,
    progressionLength,
    changingStep,
  );
  // изменение прогрессии для вопроса в игре
  const deletedElementIndex = generateRandomInt(progressionLength - 1);
  const deletedElementForQuestion = progression.splice(deletedElementIndex, 1, '..');
  const gameQuestion = progression.join(' ');
  const gameQuestionAnswer = deletedElementForQuestion;

  return {
    question: gameQuestion,
    answer: gameQuestionAnswer,
  };
};

// функция игры
const playBrainProgression = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainProgression;
