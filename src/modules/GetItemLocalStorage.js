function getItemLocalStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('shopping-list') === null) {
        itemsFromStorage = {};
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('shopping-list'));
    }
    console.log(itemsFromStorage)
    return itemsFromStorage;
}

export default getItemLocalStorage;

