const maxNumber = 1000;
const randomNumber = Math.ceil(Math.random() * maxNumber);
let tries = 0;
const maxTries = 10;

while (true) {
    tries++;
    if (tries > maxTries) {
        alert(
            `You have reached the maximum number of tries. The number was ${randomNumber}`
        );
        break;
    }

    const guess = prompt(`Guess a number between 1 and ${maxNumber}`);

    if (guess === randomNumber) {
        alert(
            `Congratulations! You guessed the number ${randomNumber} in ${tries} tries.`
        );
        break;
    }

    if (guess < randomNumber) {
        alert('Too low! Try again.');
    } else {
        alert('Too high! Try again.');
    }
}
