function filterItems(event) {
    event.preventDefault();

    const items = document.querySelectorAll('li');
    const textInput = event.target.value.toLowerCase();
    console.log(textInput);
    items.forEach(item => {
        if ((item.firstElementChild.lastChild.textContent.trim().toLowerCase())
            .indexOf(textInput) !== -1) {
            item.classList.remove('filtered');
        } else {
            item.classList.add('filtered');
        }
    })
}

export default filterItems;