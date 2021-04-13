import {Time} from './time.js'
import {renderHistory, deleteHistory} from "./renderHistory.js";

// HTML
const dMinutes = document.querySelector('#minutes')
const dSeconds = document.querySelector('#seconds')
const dTenth = document.querySelector('#tenths')
const startStopBtn = document.querySelector('#startStop')
const historyList = document.querySelector('#history')

// Stopwatch
let time = 2
let interval
let running = false

const currentTime = new Time(2)

const trigger = function () {
    if (running) {
        stopClock()
        renderHistory(historyList, currentTime)
        running = false
        startStopBtn.innerHTML = 'Start'
    } else {
        reset()
        startClock()
        running = true
        startStopBtn.innerHTML = 'Pause'
    }
}

const startClock = function () {
    interval = setInterval(clock, 100);
}

const stopClock = function () {
    clearInterval(interval)
}

const clock = function () {
    currentTime.tick()
    dMinutes.innerHTML = currentTime.minutes.toString().padStart(2, '0')
    dSeconds.innerHTML = currentTime.seconds.toString().padStart(2, '0')
    dTenth.innerHTML = currentTime.tenths.toString()
}

const reset = function () {
    currentTime.reset(2)
    dMinutes.innerHTML = currentTime.minutes.toString().padStart(2, '0')
    dSeconds.innerHTML = currentTime.seconds.toString().padStart(2, '0')
    dTenth.innerHTML = currentTime.tenths.toString()
}

// Keyboard Input

const deleteLastHistory = function () {
    const lastTime = historyList.firstChild
    lastTime.childNodes[1].style.opacity = '1'
    console.log(lastTime.childNodes[1])
    // historyList.firstChild.remove()
}

const enterKey = function () {

}

export const keyboardInput = {
    ' ': trigger,
    'x': deleteLastHistory,
    'd': () => deleteHistory(historyList)
}

const logKey = function (e) {
    try {
        console.log('pressed: ' + e.key)
        keyboardInput[e.key.toLowerCase()]()
    } catch {}
}

// Init

startStopBtn.addEventListener('click', trigger)
document.addEventListener('keydown', logKey)