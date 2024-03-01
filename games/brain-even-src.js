// для запроса информации у пользователя
import readlineSync from 'readline-sync';

const brainEvenGame = (userName) => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correctAnswersToWin = 3;

  console.log(rule);
  for (let i = 1; i <= correctAnswersToWin; i += 1) {
    const randomNum = Math.floor(Math.random() * 101);// число [0 ; 100]
    const isEven = randomNum % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.prompt({
      prompt: 'Your answer: ',
      keepWhitespace: false, // обрезает пробелы вначале и в конце строки
    });
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEvenGame;
