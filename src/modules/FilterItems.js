function filterItems(event) {
    event.preventDefault();

    const items = document.querySelectorAll('li');
    const textInput = event.target.value.toLowerCase();
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
    const clearBtn = document.querySelector('.fa-fa-xmark--button')
    if (text.length !== 0) {
        clearBtn.classList.add('show-x');
    } else {
        clearBtn.classList.remove('show-x');
    }
}

export default filterItems;