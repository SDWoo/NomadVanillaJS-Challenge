const form = document.querySelector("form");
const generateForm = form.querySelector(".generate_form");
const generateInput = generateForm.querySelector("#generate_input");
const guessForm = form.querySelector(".guess_form");
const guessInput = guessForm.querySelector("#guess_input");
const savedRangeNumber = JSON.parse(localStorage.getItem("range"));

function onSubmitInputs(event) {
  event.preventDefault();
  const rangeNumber = generateInput.value;
  const guessNumber = parseInt(guessForm.value);

  if (rangeNumber === "" || guessNumber === "") {
    return;
  }
  const randomNumber = Math.ceil(Math.random() * rangeNumber);
  const greeting = document.querySelector("#greeting");
  greeting.innerHTML = `
  you choose: ${guessNumber},
  the machine chose: ${randomNumber}. <br/>
  <strong>${guessNumber === randomNumber ? "You won!" : "You lost!"}</strong>`;
}

form.addEventListener("submit", onSubmitInputs);
