// HTML
const dMinutes = document.querySelector('#minutes')
const dSeconds = document.querySelector('#seconds')
const dTenth = document.querySelector('#tenths')
const button = document.querySelector('#trigger')

// Stopwatch
let time = 2
let interval
let running = false

const trigger = function () {
    if (running) {
        // Manage time
        stopClock()
        // updateTime(time)
        running = false
        // Update View
        button.innerHTML = 'Start'
    } else {
        // Manage Time
        startClock()
        running = true
        // Update View
        button.innerHTML = 'Pause'
    }
}

const startClock = function () {
    interval = setInterval(clock, 100);
}

const stopClock = function () {
    clearInterval(interval)
}

const clock = function () {
    time++
    updateTime(time)
}

// Display Time
let minutes = 0
let seconds = 0
let tenths = 0

const updateTime = function (ticks) {

    minutes = Math.floor(ticks / 600)
    // console.log('minutes: ' + minutes)
    dMinutes.innerHTML = minutes.toString()

    seconds = Math.floor((ticks - (minutes * 600)) / 10)
    // console.log('seconds: ' + seconds)
    dSeconds.innerHTML = seconds.toString()

    tenths = Math.floor(ticks - (minutes * 600) - (seconds * 10))
    // console.log('tenths: ' + tenths)
    dTenth.innerHTML = tenths.toString()
}
