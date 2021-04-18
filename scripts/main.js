import {model, stopwatch} from './model.js'
import view from './view.js';

function triggerStartStop () {
    if (!stopwatch.state) {
        stopwatch.startTime()
        view.renderStartStopButton(false)
        console.log('Started Clock')
    } else if (stopwatch.state) {
        stopwatch.stopTime()
        model.addItem(stopwatch.getTime())
        view.renderStartStopButton(true)
        console.log('Stopped Clock')
    }
}

function triggerUiButton (click) {
    view.renderUnselectButton()
    view.renderButton(click.target)
}

// Init

document.querySelector('#start-stop').addEventListener('click', triggerStartStop)
document.querySelector('#ui-buttons').addEventListener('click', triggerUiButton)