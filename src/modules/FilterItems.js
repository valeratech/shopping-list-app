function filterItems(event) {
    const items = document.querySelectorAll('li');
    const textInput = event.target.value.toLowerCase();

    toggleFilterClass(items, textInput);
}

function toggleFilterClass(items, text) {
    items.forEach(item => {
        if ((item.firstElementChild.lastChild.textContent
            .trim()
            .toLowerCase())
            .indexOf(text) !== -1) {
            item.classList.remove('filtered');
            toggleClearFilterBtn(text);
        } else {
            item.classList.add('filtered');
            toggleClearFilterBtn(text);
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
    const items = document.querySelectorAll('li');
    console.log(event.target.parentElement.firstElementChild)
    if (event.target.parentElement.firstElementChild.classList.contains('filter-input')) {
        const textInput = event.target.parentElement.firstElementChild.value = '';
        toggleClearFilterBtn(event.target.parentElement.firstElementChild.value);
        toggleFilterClass(items, textInput);
    } else if (event.target.parentElement.parentElement.firstElementChild.classList.contains('filter-input')) {
        const textInput = event.target.parentElement.parentElement.firstElementChild.value = '';
        toggleClearFilterBtn(event.target.parentElement.parentElement.firstElementChild.value);
        toggleFilterClass(items, textInput);
    } else if (event.target.parentElement.parentElement.parentElement.firstElementChild.classList.contains('filter-input')) {
        const textInput = event.target.parentElement.parentElement.parentElement.firstElementChild.value = '';
        toggleClearFilterBtn(event.target.parentElement.parentElement.parentElement.firstElementChild.value);
        toggleFilterClass(items, textInput);
    }
}


export { filterItems, clearFilter };