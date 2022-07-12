const generateForm = document.querySelector("#generate_form");
const generateInput = generateForm.querySelector("input");
const guessForm = document.querySelector("#guess_form");
const guessInput = guessForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const savedRangeNumber = localStorage.getItem("range");

function onGenerateSubmit(event) {
  event.preventDefault();
  const rangeNumber = generateInput.value;
  localStorage.setItem("range", rangeNumber);
}
function onGuessNumberSubmit(event) {
  event.preventDefault();
  const guessNumber = guessInput.value;
  onGreeting(guessNumber);
}

function onGreeting(guessNumber) {
  const randomNumber = Math.floor(Math.random() * (guessNumber - 0) + 0);
  greeting.innerText = `You chose: ${guessNumber}, the machinec chose: ${randomNumber}`;
  greeting.insertAdjacentText(
    "beforeend",
    randomNumber === guessNumber ? `You lost!` : `You Win`
  );
}

generateForm.addEventListener("submit", onGenerateSubmit);
guessForm.addEventListener("submit", onGuessNumberSubmit);
