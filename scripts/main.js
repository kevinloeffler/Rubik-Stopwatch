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

function triggerUiButton (buttonID) {
    const button = document.querySelector(`#${buttonID}`)
    view.renderUnselectButton()
    view.renderButton(button)
}

function handleEnterKey () {
    modifierKeys[model.activeModifier.toUpperCase()]()
}

const validKeys = {
    ' ': triggerStartStop,
    'X': () => triggerUiButton('delete-button'),
    'D': () => triggerUiButton('delete-all-button'),
    'ENTER': () => handleEnterKey(),
}

const modifierKeys = {
    'X': () => model.deleteLastItem(),
    'D': () => model.deleteAllItems(),
}

function keyPress (k) {
    try {
        if (k.key !== 'Enter') {
            model.activeModifier = k.key.toUpperCase()
        }
        validKeys[k.key.toUpperCase()]()
    } catch (err) {
        // Throws an error if not a valid key -> Ignored
    }
}

// Init

document.querySelector('#start-stop').addEventListener('click', triggerStartStop)
document.addEventListener('keyup', keyPress)
