import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'MysteriousUser',
    keepWhitespace: false,
  });
  console.log(`Hello, ${userName}!`);

  return userName;
};

export default greetUser;
