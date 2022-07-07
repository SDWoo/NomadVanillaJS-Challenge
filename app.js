const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}
function handleMouseEnter() {
  title.style.color = "red";
  title.innerText = "Mouse is here";
}
function handleMouseLeave() {
  title.style.color = "green";
  title.innerText = "Mouse is gone";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copy!!");
}
function handleWindowOffline() {
  alert("SoS not in wifi!");
}
function handleWindowOnline() {
  alert("ALL GOOOD!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
