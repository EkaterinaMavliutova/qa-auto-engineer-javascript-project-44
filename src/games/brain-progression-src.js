import { playGame, generateRandomInt } from '../index.js';

const rule = 'What number is missing in the progression?';

const generateArithmeticProgression = (firstElement, progressionLength, changingStep) => {
  const progression = [firstElement];
  let nextElement = firstElement;

  for (let i = 1; i <= progressionLength - 1; i += 1) {
    nextElement += changingStep;
    progression[i] = nextElement;
  }

  return progression;
};

const generateGameQuestion = () => {
  const minProgressionLength = 5;
  const maxProgressionLength = 10;
  const maxfirstElement = 50;
  const minChangingStep = 2;
  const maxChangingStep = 10;
  const firstElement = generateRandomInt(maxfirstElement);
  const progressionLength = generateRandomInt(maxProgressionLength, minProgressionLength);
  const changingStep = generateRandomInt(maxChangingStep, minChangingStep);
  const progression = generateArithmeticProgression(
    firstElement,
    progressionLength,
    changingStep,
  );
  // изменение прогрессии для вопроса в игре
  const deletedElementIndex = generateRandomInt(progressionLength - 1);
  const deletedElementForQuestion = progression.splice(deletedElementIndex, 1, '..');

  return {
    question: progression.join(' '),
    answer: deletedElementForQuestion,
  };
};

const playBrainProgression = () => {
  playGame(generateGameQuestion, rule);
};

export default playBrainProgression;
