function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function guessingGame(){

  // Create a number to guess between 0 and 10
  let numberToGuess = getRandomIntInclusive(0, 10); // 10

  // Initialize a counter
  let count = 1;

  // Make your fist guess
  let guess = parseInt(prompt("Guess a number between 1 - 10: (You have 3 attempts)"));

  // As long as the guess is incorrect or you have tried to guess less than 3 times, try to guess again
  while(guess !== numberToGuess &&  count < 3){
    if(isNaN(guess)){
      guess = parseInt(prompt("What the hell do you think you're doing?!?!!! I asked for a number!"));
    } else {
      // Try to guess a number
      guess = parseInt(prompt(`Wrong!!! Try Again! You have ${3 - count} attempts left`));
      // Count the guess
      count++;
    }
  }

  // If you guessed within 3 attempts...
  if(guess === numberToGuess && count <= 3){
    // ... print the success message
    return `Success: the number is indeed ${numberToGuess}. You got the number correctly after ${count} attempts.`;
  } else {
    // Otherwise print that the game is over
    return `Sorry human, but you couldn't guess the number in less than three times. The number was ${numberToGuess}`;
  }
}

function writeResult(string){
  document.getElementById('result').innerText = string;
}
  // This is the better way to do it, however it's still not the most ideal way, I'll explain after the vacation.
  // document.getElementById('play').onclick = () => writeResult(guessingGame())
