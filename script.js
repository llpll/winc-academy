
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


let log = document.getElementById("message");

let playerName = prompt('Welkom! Wat is je naam?'); 
log.innerHTML = "Hey " + playerName + " !</br>"; 

let roundCount = 1;
let totalTries = 5;

while (roundCount <= totalTries) {
	let guessedNumber = prompt('Voer een nummer in van 0 tot 25 om te raden');
	let randomNumber = getRandomInt(0, 25);
  if (guessedNumber == randomNumber) {
    log.innerHTML += 'Your number is ' + guessedNumber + '! ' + 'Gefeliciteerd, je hebt gewonnen!</br>';
    break;
  } else {
    log.innerHTML += 'Your number is ' + guessedNumber + '. ' + ' Nog niet correct, probeer opnieuw.</br>';

  }

  log.innerHTML += (totalTries - roundCount) + ' tries left</br>';
  roundCount++;
}

log.innerHTML += 'Thank you for playing, ' + playerName + '!';