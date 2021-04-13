export function renderHistory (list, time) {
    const fragment = document.createDocumentFragment()
    // Entry Wrapper
    const entry = document.createElement('div')
    entry.classList.add('time-entry')
    entry.innerHTML = time.print()
    // Delete Icon
    const deleteIcon = document.createElement('div')
    deleteIcon.classList.add('delete-icon')
    deleteIcon.innerHTML = '<span>↵</span> to delete'

    entry.appendChild(deleteIcon)
    fragment.appendChild(entry)
    list.prepend(fragment)
}

export function deleteHistory (list) {
    while (list.firstChild) {
        console.log('deleting List')
        list.removeChild(list.firstChild)
    }
}
