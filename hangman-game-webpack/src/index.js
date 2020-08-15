import Hangman from "./hangman";
import getPuzzle from "./requests";

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keydown", function (e) {
  const guess = e.key;
  game1.makingGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;
  const word = game1.puzzle.split("");
  word.forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    puzzleEl.appendChild(span);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
