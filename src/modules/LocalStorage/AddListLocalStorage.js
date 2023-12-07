import shoppingList from "../Data/TestShoppingListData";
import getListItemsLocalStorage from "./GetListItemsLocalStorage";

function addListLocalStorage(listName) {

    const listsItemsStorage = getListItemsLocalStorage();
    listsItemsStorage[listName] = [];

    localStorage.setItem('shopping-list', JSON.stringify(listsItemsStorage));
}

export default addListLocalStorage;