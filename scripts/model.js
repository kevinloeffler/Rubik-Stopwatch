import Time from './time.js';

let modelHistory = []

export const model = {

    addItem: (item) => {
        modelHistory.unshift(item)
        console.log(modelHistory)
    },

    returnLastItem: () => {
        return modelHistory[1]
    },

    deleteLastItem: () => {
        modelHistory.shift()
    },

    deleteAllItems: () => {
        modelHistory = []
    }
}

let interval
let currentTime = new Time()

export const stopwatch = {

    state: false,

    startTime: function () {

        const localTime = new Time()

        function clock() {
            localTime.tick()
        }

        interval = setInterval(clock, 100)
        currentTime = localTime
        this.state = true
    },

    stopTime: function () {
        clearInterval(interval)
        this.state = false
    },

    getMinutes: function () {
        return currentTime.minutes
    },

    getSeconds: function () {
        return currentTime.seconds
    },

    getTenths: function () {
        return currentTime.seconds
    },

    getTime: function () {
        return currentTime
    }
}