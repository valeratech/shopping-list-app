import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import getActiveShoppingList from "../UI/GetActiveShoppingList";
import displayListItems from "../UI/DisplayListItems";
import setDefaultShoppingListActive from "../UI/SetDefaultShoppingListActive";


function deleteShoppingListLocalStorage(activeShoppingList) {
    const shoppingList = activeShoppingList;
    const listsItemsStorage = getListsItemsLocalStorage();
    console.log(listsItemsStorage, shoppingList)
    delete listsItemsStorage[shoppingList];
    localStorage.setItem('shopping-list', JSON.stringify(listsItemsStorage));
    displayListItems('Default Shopping List');
}

export default deleteShoppingListLocalStorage;