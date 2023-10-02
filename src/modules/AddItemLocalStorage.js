import shoppingList from "./TestShoppingListData";
import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";

function addItemLocalStorage(shoppingList, item, completed) {
    console.log(shoppingList)
    const itemsFromStorage = getListsItemsLocalStorage();
    const newItem = {
        item,
        completed
    };
    if (itemsFromStorage[shoppingList] === undefined) {
        itemsFromStorage[shoppingList] = [];
        itemsFromStorage[shoppingList].push(newItem);
    } else {
        itemsFromStorage[shoppingList].push(newItem);
    }

    localStorage.setItem('shopping-list', JSON.stringify(itemsFromStorage));
}

export default addItemLocalStorage;