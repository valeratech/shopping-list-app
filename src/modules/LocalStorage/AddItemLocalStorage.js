import shoppingList from "../Data/TestShoppingListData";
import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import displayItemCount from "../UI/DisplayItemCount";

function addItemLocalStorage(shoppingList, item, completed, date) {
    const itemsFromStorage = getListsItemsLocalStorage();
    const newItem = {
        item,
        completed,
        date
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