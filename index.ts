import inquirer from 'inquirer';
let guessNum = Math.floor(Math.random() * 10 + 1);
const num = async () => {
    const num1 = await inquirer.prompt([{
        type: "number",
        name: "num1",
        message: "Guess Number 1-10"
    }]);
    return num1.num1;
    
}
let userNum = await num();
while(userNum !== guessNum){
    if(userNum > guessNum){
        console.log('your guess is greater. Try again')
        userNum = await num();
    } else {
        console.log('your guess is smaller number. Try again')
        userNum = await num();
    }
}
if (userNum === guessNum){
    console.log('Great your guess was right');
}