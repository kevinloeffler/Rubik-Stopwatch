export class Time {

    minutes = 0
    seconds = 0
    tenths = 0

    constructor(offset) {
        for (const i in offset) {
            this.tick()
        }
    }

    tick = function () {
        if (this.tenths === 9) {
            if (this.seconds === 59) {
                this.minutes++
                this.seconds = 0
                this.tenths = 0
            } else {
                this.seconds++
                this.tenths = 0
            }
        } else {
            this.tenths++
        }
    }

    print = function () {
        return `${this.minutes}:${this.seconds}:${this.tenths}`
    }

}