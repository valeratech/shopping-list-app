function filterItems(event) {

    const items = document.querySelectorAll('li');
    const textInput = event.target.value.toLowerCase();
    console.log(textInput)
    items.forEach(item => {
        if ((item.firstElementChild.lastChild.textContent
            .trim()
            .toLowerCase())
            .indexOf(textInput) !== -1) {
            item.classList.remove('filtered');
            toggleClearFilterBtn(textInput);
        } else {
            item.classList.add('filtered');
            toggleClearFilterBtn(textInput);
        }
    })
}

function toggleClearFilterBtn(text) {
    const clearBtn = document.querySelector('.clear-filter')
    if (text.length !== 0) {
        clearBtn.classList.add('show-x');
    } else {
        clearBtn.classList.remove('show-x');
    }
}

function clearFilter(event) {
    console.log(event.target.parentElement.firstElementChild)
    if (event.target.parentElement.firstElementChild.classList.contains('filter-input')) {
        event.target.parentElement.firstElementChild.value = '';
        toggleClearFilterBtn(event.target.parentElement.firstElementChild.value);
    } else if (event.target.parentElement.parentElement.firstElementChild.classList.contains('filter-input')) {
        event.target.parentElement.parentElement.firstElementChild.value = '';
        toggleClearFilterBtn(event.target.parentElement.parentElement.firstElementChild.value);
    } else if (event.target.parentElement.parentElement.parentElement.firstElementChild.classList.contains('filter-input')) {
        event.target.parentElement.parentElement.parentElement.firstElementChild.value = '';
        toggleClearFilterBtn(event.target.parentElement.parentElement.parentElement.firstElementChild.value);

    }
}


export { filterItems, clearFilter };