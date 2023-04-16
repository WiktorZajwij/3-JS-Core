
/* 
Домашнє завдання:
Необхідно реалізувати наступний функціонал як на відео timer&stopwatch, а саме:

- повернути поточну дату в форматі: день.місяць.рік
- повернути поточний час в форматі: година:хвилина:секунда
- розробити секундомір в якого є можливість запуску, паузи, запам’ятовування поточного часу та скидування часу(мілісекунди не обов’язково реалізовувати)
- розробити таймер в якого є можливість визначення часового проміжку, а також запуск, пауза ти скидування часу
*/
'use strict';


const getS = (selector) => document.querySelector(selector);

function returnZero(zero) {
  return zero > 9 ? zero : `0${zero}`;
}


// date
  setInterval(() => {
    let nDate = new Date();
    let Day = nDate.getDate();
    let Month = nDate.getMonth() + 1;
    let Year = nDate.getFullYear();

    document.querySelector('.block-date').innerHTML = `${returnZero(Day)}:${returnZero(Month)}:${Year}`;
  }
  );


// watch
  setInterval(() => {
    let nDate = new Date();
    let hours = nDate.getHours();
    let minutes = nDate.getMinutes();
    let seconds = nDate.getSeconds();

    document.querySelector('.block-time').innerHTML = `${returnZero(hours)}:${returnZero(minutes)}:${returnZero(seconds)}`;
  })


// stopwatch
let swHours = 0;
let swMinutes = 0;
let swSeconds = 0;
let swMilliseconds = 0;
let intervalID;

 function startTimer() {
  if ((swMilliseconds +=10) == 1000) {
    swMilliseconds = 0;
    swSeconds++;
  }
  if (swSeconds == 60) {
    swSeconds = 0;
    swMinutes++;
  }
  if (swMinutes == 60) {
    swMinutes = 0;
    swHours++;
   }   

  if (swMilliseconds <= 99) {
    getS(".sw-timer").innerHTML = `${returnZero(swHours)}:${returnZero(swMinutes)}:${returnZero(swSeconds)}:0${returnZero(swMilliseconds)}`;
  } else {
    getS(".sw-timer").innerHTML = `${returnZero(swHours)}:${returnZero(swMinutes)}:${returnZero(swSeconds)}:${returnZero(swMilliseconds)}`;
  }
}


function start() {
  intervalID = setInterval(() => {
    startTimer()
  }, 10);
  getS('.sw-start').disabled = true;
  getS('.sw-stop').disabled = false;
  getS('.sw-reset').disabled = false;
  getS('.sw-loop').disabled = false;
}


function stop() {
  clearInterval(intervalID);
  getS('.sw-start').disabled = false;
  getS('.sw-stop').disabled = true;
  getS('.sw-reset').disabled = false;
  getS('.sw-loop').disabled = false;

}


function reset() {
  clearInterval(intervalID);
  getS('.sw-timer').textContent = '00:00:00:000';
  getS('.sw-display').textContent = '';
  swHours = 0;
  swMinutes = 0;
  swSeconds = 0;
  swMilliseconds = 0;
  getS('.sw-start').disabled = false;
  getS('.sw-stop').disabled = false;
  getS('.sw-reset').disabled = true;
  getS('.sw-loop').disabled = false;
}


function loop() {
  clearInterval(intervalID);

  let p = document.createElement('p');
  p.textContent = getS('.sw-timer').textContent;
  p.style.fontSize = '24px';
  p.style.margin = '5px';
  
  getS('.sw-display').append(p);
  getS('.sw-display').style.textAlign = 'center';
  getS('.sw-display').style.overflow = 'auto';

  getS('.sw-start').disabled = false;
  getS('.sw-stop').disabled = false;
  getS('.sw-reset').disabled = false;
  getS('.sw-loop').disabled = true;
}


// timer
let time = getS('.time');
let timersID;
let tSec = 60;
let tMin = time.innerHTML - 1;

function plus() {
  if (time.innerHTML < 60) {
    time.innerHTML++;
    if (time.innerHTML <= 9) {
      time.innerHTML = `${returnZero(time.innerHTML)}`
    }
    getS('.plus').disabled = false;
  }
  tSec = 60;
  tMin = time.innerHTML - 1;
}

function minus() {
  if (time.innerHTML > 0) {
    time.innerHTML--;
    if (time.innerHTML <= 9) {
      time.innerHTML = `${returnZero(time.innerHTML)}`
    }
  }
  tSec = 60;
  tMin = time.innerHTML - 1;
}


function sTmr() {
  tSec--;
  if (tSec < 0) {
    tSec = 59;
    tMin--;
  }

  if (tMin == 0 && tSec == 0) {
    clearInterval(timersID);
    getS('.str').disabled = false;
    getS('.plus').disabled = false;
    getS('.minus').disabled = false;
  }
  getS(".timer-display").innerHTML = `${returnZero(tMin)}:${returnZero(tSec)}`;
}


function str() {
  timersID = setInterval(() => {
    sTmr();
  }, 1000);
  getS('.str').disabled = true;
  getS('.stp').disabled = false;
  getS('.rst').disabled = false;
  getS('.plus').disabled = true;
  getS('.minus').disabled = true;
}


function stp() {
  clearInterval(timersID);
  getS('.str').disabled = false;
  getS('.stp').disabled = true;
  getS('.rst').disabled = false;
  getS('.plus').disabled = false;
  getS('.minus').disabled = false;
}


function rst() {
  clearInterval(timersID);
  getS('.timer-display').innerHTML = '00:00';
  tSec = 60;
  tMin = time.innerHTML - 1;
  getS('.str').disabled = false;
  getS('.stp').disabled = false;
  getS('.rst').disabled = true;
  getS('.plus').disabled = false;
  getS('.minus').disabled = false;
}
