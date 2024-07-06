let secretNum = 4;

let counter = 0;

while (true) {
    let guess = prompt('guess the secret number');
    counter++;
    if (guess == secretNum) {
        alert('you got it in ' + counter + ' tries');
        break;
    } else if (guess > secretNum) {
        alert('too high');
    } else {
        alert('too low');
    }
}
