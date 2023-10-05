function filterItems(event) {
    const items = document.querySelectorAll('.list-item');
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
    const items = document.querySelectorAll('.list-item');
    const buttonLayer = event.target.parentElement.firstElementChild
    const svgLayer = event.target.parentElement.parentElement.firstElementChild;
    const pathLayer = event.target.parentElement.parentElement.parentElement.firstElementChild;

    // The clear-filter button has 3 different layers that make up the clear-filter-button (<i> after rendered)
    // 3 conditionals statements are needed/created to execute the clear function: <button>/<svg>/<path>
    if (buttonLayer.classList.contains('filter-input')) {
        const textInput = buttonLayer.value = '';
        toggleClearFilterBtn(textInput);
        toggleFilterClass(items, textInput);
    } else if (svgLayer.classList.contains('filter-input')) {
        const textInput = svgLayer.value = '';
        toggleClearFilterBtn(textInput);
        toggleFilterClass(items, textInput);
    } else if (pathLayer.classList.contains('filter-input')) {
        const textInput = pathLayer.value = '';
        toggleClearFilterBtn(textInput);
        toggleFilterClass(items, textInput);
    }
}


export { filterItems, clearFilter };