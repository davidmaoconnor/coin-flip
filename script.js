var userChoice = prompt("Heads or tails?");

console.log("You chose " + userChoice);

function coinFlip(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var flipResult = coinFlip(0, 1);

if (flipResult === 0) {
  document.write("Coin flip result was heads.");
}

else {
  document.write("Coin flip result was tails.");
}

if (userChoice === "heads" & flipResult === 0) {
    document.write(" You win!");
}

if (userChoice === "tails" & flipResult === 1) {
    document.write(" You win!");
}

else {
    document.write(" You lose.");
}