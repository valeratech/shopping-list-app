function filterItems(event) {
    event.preventDefault();

    const items = document.querySelectorAll('li');
    const textInput = event.target.value.toLowerCase();
    console.log(textInput);
    items.forEach(item => {
        if ((item.firstElementChild.lastChild.textContent.trim().toLowerCase())
            .indexOf(textInput) !== -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })

}

export default filterItems;