function getItemLocalStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('shopping-list') === null) {
        itemsFromStorage = {};
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('shopping-list'));
    }

    return itemsFromStorage;
}

export default getItemLocalStorage;

