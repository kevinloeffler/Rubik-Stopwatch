// HTML
const dMinutes = document.querySelector('#minutes')
const dSeconds = document.querySelector('#seconds')
const dTenth = document.querySelector('#tenths')
const startStopBtn = document.querySelector('#start-stop')
const historyList = document.querySelector('#history')
const uiButtons = document.querySelector('#ui-buttons')
const enterButton = document.querySelector('#enter-button')

const view = {

    renderTime: (time) => {
        dMinutes.innerHTML = time.minutes.toString().padStart(2, '0')
        dSeconds.innerHTML = time.seconds.toString().padStart(2, '0')
        dTenth.innerHTML = time.tenths.toString()
    },

    renderNewItem: (time) => {
        const newItem = document.createElement('div')
        newItem.setAttribute('class', 'history-item')
        newItem.innerText = time.print()
        const flag = document.createElement('div')
        flag.setAttribute('class', 'history-item-flag')
        newItem.appendChild(flag)
        historyList.prepend(newItem)
    },

    renderDeleteLastItem: () => {
        historyList.firstChild.remove()
    },

    renderClearList: () => {
        while (historyList.firstChild) {
            historyList.firstChild.remove()
        }
    },

    renderMarkedItem: (state) => {
        if (!state) {
            historyList.firstChild.childNodes[1].classList.add('history-item-marked')
        } else {
            historyList.firstChild.childNodes[1].classList.remove('history-item-marked')
        }
        console.log('marked')
    },

    renderButton: (button) => {
        button.classList.remove('ui-button-inactive')
        enterButton.classList.remove('ui-button-inactive')
    },

    renderUnselectButton: () => {
        for (const button of uiButtons.childNodes) {
            if (button.nodeName === 'DIV') {
                button.classList.add('ui-button-inactive')
            }
        }
    },

    renderStartStopButton: (state) => {
        startStopBtn.childNodes[1].textContent = state
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