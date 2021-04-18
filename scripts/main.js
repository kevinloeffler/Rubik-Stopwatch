import {model, stopwatch} from './model.js'
import view from './view.js';

function triggerStartStop () {
    if (!stopwatch.state) {
        stopwatch.startTime()
        view.renderStartStopButton('STOP')
        console.log('Started Clock')
    } else if (stopwatch.state) {
        stopwatch.stopTime()
        model.addItem(stopwatch.getTime())
        view.renderNewItem(stopwatch.getTime())
        view.renderStartStopButton('START')
        console.log('Stopped Clock')
    }
}

function triggerUiButton (buttonID) {
    if (model.getHistoryLength()) {
        const button = document.querySelector(`#${buttonID}`)
        view.renderUnselectButton()
        view.renderButton(button)
    } else {
        model.activeModifier = null
    }
}

function handleEnterKey () {
    view.renderUnselectButton()
    modifierKeys[model.activeModifier.toUpperCase()]()
}

function removeLastItem () {
    console.log('log')
    model.deleteLastItem()
    view.renderDeleteLastItem()
}

function removeAllItems () {
    model.deleteAllItems()
    view.renderClearList()
}

function markLastItem () {
    const state = model.returnLastItem().mark
    model.markLastItem(state)
    view.renderMarkedItem(state)
}

const validKeys = {
    ' ': triggerStartStop,
    'X': () => triggerUiButton('delete-button'),
    'D': () => triggerUiButton('delete-all-button'),
    'M': () => triggerUiButton('mark-button'),
    'ENTER': () => handleEnterKey(),
}

const modifierKeys = {
    'X': () => removeLastItem(),
    'D': () => removeAllItems(),
    'M': () => markLastItem(),
}

function keyPress (k) {
    try {
        if (k.key !== 'Enter') {
            model.activeModifier = k.key.toUpperCase()
        }
        validKeys[k.key.toUpperCase()]()
    } catch (err) {
        view.renderUnselectButton()
        // Throws an error if not a valid key -> Ignored
    }
}

// Init

document.querySelector('#start-stop').addEventListener('click', triggerStartStop)
document.addEventListener('keyup', keyPress)
