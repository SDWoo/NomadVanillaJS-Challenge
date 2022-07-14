const clockTitle = document.querySelector(".js-clock");
const body = document.querySelector("body");

function clock() {
  const date = new Date();
  const christmasDate = new Date("12/25/2022");

  const diffTime = christmasDate - date;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
  const diffHours = toStringPadStart(24 - date.getHours() - 1);
  const diffMinutes = toStringPadStart(60 - date.getMinutes() - 1);
  const diffSeconds = toStringPadStart(60 - date.getSeconds());
  clockTitle.innerText = `${diffDays}d ${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
}

function toStringPadStart(number) {
  return String(number).padStart(2, "0");
}
function bodyStyling() {
  body.style.position = "absolute";
  body.style.top = "30%";
  body.style.left = "30%";
}

bodyStyling();
clock();

setInterval(clock, 1000);
