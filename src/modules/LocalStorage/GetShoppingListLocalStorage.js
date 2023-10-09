function getShoppingListLocalStorage() {
    const shoppingListsFromStorage = JSON.parse(localStorage.getItem('shopping-list'));
    return shoppingListsFromStorage
}

export default getShoppingListLocalStorage;