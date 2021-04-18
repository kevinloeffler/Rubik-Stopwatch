// HTML
const dMinutes = document.querySelector('#minutes')
const dSeconds = document.querySelector('#seconds')
const dTenth = document.querySelector('#tenths')
const startStopBtn = document.querySelector('#start-stop')
const historyList = document.querySelector('#history')
const uiButtons = document.querySelector('#ui-buttons')

const view = {

    renderTime: (time) => {
        dMinutes.innerHTML = time.getMinutes()
        dSeconds.innerHTML = time.getSeconds()
        dTenth.innerHTML = time.getTenths()
    },

    renderResetTime: () => {
        dMinutes.innerHTML = '00'
        dSeconds.innerHTML = '00'
        dTenth.innerHTML = '0'
    },

    renderNewItem: (time) => {
        const newItem = document.createElement('div')
        newItem.setAttribute('class', 'history-item')
        newItem.innerText = time.print()
        historyList.prepend(newItem)
    },

    renderButton: (button) => {
        button.classList.remove('ui-button-inactive')
    },

    renderUnselectButton: () => {
        for (const button of uiButtons.childNodes) {
            if (button.nodeName === 'BUTTON')
            button.classList.add('ui-button-inactive')
        }
    },

    renderStartStopButton: (state) => {
        if (!state) {
            startStopBtn.childNodes[1].textContent = 'PAUSE'
        } else if (state) {
            startStopBtn.childNodes[1].textContent = 'START'
        }
    }

}

export default view


/*
const viewReset = function () {
    try {
        historyList.childNodes.forEach(n => n.childNodes[1].style.opacity = '0')
        deleteAllIcon.style.opacity = '0'
    } catch {
        // null error if history is empty -> ignore
    }
}
*/