function getListsItemsLocalStorage() {
    let listsItemsStorage;

    if (localStorage.getItem('shopping-list') === null) {
        listsItemsStorage = {};
    } else {
        listsItemsStorage = JSON.parse(localStorage.getItem('shopping-list'));
    }

    return listsItemsStorage;
}

export default getListsItemsLocalStorage;

