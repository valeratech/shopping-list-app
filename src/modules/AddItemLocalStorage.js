import shoppingList from "./TestShoppingListData";
import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import displayItemCount from "./DisplayItemCount";

function addItemLocalStorage(shoppingList, item, completed) {
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
    displayItemCount();
}

export default addItemLocalStorage;