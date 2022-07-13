// interval 이란?
// 매번 일어나야 되는 것 ex) 매 2초마다 일어나야 하는 것
const clock = document.querySelector("h2#clock");

// function sayHello() {
//   console.log("hello");
// }

// 2 arguments. (function, ms)
// setInterval(sayHello, 5000);

// timeout 이란?
// js가 해당 라인을 실행할 때 얼마나 기다리고 할건지 정하는 것

// 2 arguments. (function, ms)
// setTimeout(sayHello, 5000);

// 시간을 계속 업데이트 해주고 싶다면? interval 사용

// String.padStart(length, length보다 맞으면 stirng의 앞부분에 추가);
// padEnd 도 존재 ㅇㅇ

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
