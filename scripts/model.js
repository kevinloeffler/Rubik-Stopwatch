import Time from './time.js';

let modelHistory = []

export const model = {

    activeModifier: null,

    addItem: function (item) {
        modelHistory.unshift(item)
        console.log(modelHistory)
    },

    returnLastItem: function () {
        return modelHistory[0]
    },

    getHistoryLength: function () {
        return modelHistory.length
    },

    deleteLastItem: function () {
        modelHistory.shift()
        this.activeModifier = null
        console.log('Last Item Deleted')
    },

    deleteAllItems: function () {
        modelHistory = []
        this.activeModifier = null
        console.log('All Items Deleted')
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
