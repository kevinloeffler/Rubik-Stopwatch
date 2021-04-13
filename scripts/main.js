import {Time} from './time.js'
import {renderHistory, deleteHistory} from "./renderHistory.js";

// HTML
const dMinutes = document.querySelector('#minutes')
const dSeconds = document.querySelector('#seconds')
const dTenth = document.querySelector('#tenths')
const startStopBtn = document.querySelector('#start-stop')
const historyList = document.querySelector('#history')
const deleteAllIcon = document.querySelector('#delete-all-icon')

// Stopwatch
let interval
let running = false

const currentTime = new Time()

const trigger = function () {
    viewReset()
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
    currentTime.reset()
    dMinutes.innerHTML = currentTime.minutes.toString().padStart(2, '0')
    dSeconds.innerHTML = currentTime.seconds.toString().padStart(2, '0')
    dTenth.innerHTML = currentTime.tenths.toString()
}

// Keyboard Input
let lastInputCharacter = null

const viewDeleteLast = function () {
    const lastTime = historyList.firstChild
    lastTime.childNodes[1].style.opacity = '1'
}

const viewDeleteAll = function () {
    deleteAllIcon.style.opacity = '1'
}

const viewReset = function () {
    try {
        historyList.childNodes.forEach(n => n.childNodes[1].style.opacity = '0')
        deleteAllIcon.style.opacity = '0'
    } catch {
        // null error if history is empty -> ignore
    }
}

const enterKey = function () {
    switch (lastInputCharacter) {
        case 'x':
            historyList.firstChild.remove()
            break
        case 'd':
            deleteHistory(historyList)
            break
    }
}

const keyboardInput = {
    ' ': trigger,
    'x': viewDeleteLast,
    'd': viewDeleteAll,
    'enter': enterKey,
}

const logKey = function (e) {
    viewReset()
    try {
        keyboardInput[e.key.toLowerCase()]()
    } catch (err) {
        viewReset()
    } finally {
        lastInputCharacter = e.key.toLowerCase()

    }
}

// Init

startStopBtn.addEventListener('click', trigger)
document.addEventListener('keydown', logKey)