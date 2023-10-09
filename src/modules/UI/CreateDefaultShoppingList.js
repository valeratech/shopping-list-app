import TestShoppingListData from "../Data/TestShoppingListData";

function createDefaultShoppingList() {
    const shoppingListsFromStorage = JSON.parse(localStorage.getItem('shopping-list'));
    if (shoppingListsFromStorage === null) {
        localStorage.setItem('shopping-list', JSON.stringify(TestShoppingListData));
    }
}

export default createDefaultShoppingList;