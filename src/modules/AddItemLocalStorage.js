import shoppingList from "./TestShoppingListData";

function addItemLocalStorage() {

    const itemsFromStorage = localStorage.getItem('items');

    localStorage.setItem('shopping-list', JSON.stringify(shoppingList));
}

export default addItemLocalStorage;