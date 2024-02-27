// для запроса данных у пользователя
import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!'); // eslint-disable-line no-console
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'MysteriousUser',
    keepWhitespace: false,
  });
  console.log(`Hello, ${userName}!`); // eslint-disable-line no-console
};

export default greetUser;
