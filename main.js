const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const timeArea = document.getElementById("time");

let time = 0;
let timerId = null;
let startTime = 0;
let elapsedTime = 0;

function formatTime(time) {
    let msec = Math.floor((time % 1000) / 100);
    let tempSec = Math.floor(time / 1000);
    let sec = tempSec % 60;
    let tempMin = Math.floor(tempSec / 60);
    let min = tempMin % 60; 
    let hour = Math.floor(tempMin / 60);

    return hour + ":" + min + ":" + sec + ":" + msec;
}

startButton.addEventListener("click", function() {
    if (timerId === null) {
        startTime = new Date().getTime() - elapsedTime;
        timerId = setInterval(() => {
           time = new Date().getTime() - startTime;
           timeArea.innerText = formatTime(time);
    }, 100);
    }
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
});

stopButton.addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
    elapsedTime = time;
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
});

resetButton.addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
    time = 0;
    elapsedTime = 0;
    timeArea.innerText = "0:0:0:0";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
});