const p1 = document.getElementById("pt1");
const p2 = document.getElementById("pt2");
const winDisplay = document.getElementById("win");

let tt1 = 0;
let tt2 = 0;

p1.textContent = tt1;
p2.textContent = tt2;

function do1() {
  tt1 += 2;
  p1.textContent = tt1;
}

function do2() {
  tt1 += 3;
  p1.textContent = tt1;
}

function do3() {
  tt1 += 5;
  p1.textContent = tt1;
}

function do4() {
  tt2 += 2;
  p2.textContent = tt2;
}

function do5() {
  tt2 += 3;
  p2.textContent = tt2;
}

function do6() {
  tt2 += 5;
  p2.textContent = tt2;
}

function calc() {
  if (tt1 > tt2) {
    winDisplay.textContent = `Home Team won by ${tt1 - tt2} points.`;
  } else if (tt2 > tt1) {
    winDisplay.textContent = `Guest Team won by ${tt2 - tt1} points.`;
  } else {
    winDisplay.textContent = `It's a tie! Both teams have ${tt1} points.`;
  }
}