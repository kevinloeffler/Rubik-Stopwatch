class Time {

constructor () {
    console.log('New Time Object created')
    this.minutes = 0
    this.seconds = 0
    this.tenths = 0
    this.marked = false
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
        const m = this.minutes.toString().padStart(2, '0')
        const s = this.seconds.toString().padStart(2, '0')
        const t = this.tenths.toString().padStart(2, '0')
        return `${m}:${s}:${t}`
    }

    reset = function () {
        this.minutes = 0
        this.seconds = 0
        this.tenths = 0
    }

}

export default Time