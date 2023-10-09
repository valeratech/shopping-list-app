import shoppingList from "../Data/TestShoppingListData";
import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";

function addListLocalStorage(listName) {

    const listsItemsStorage = getListsItemsLocalStorage();
    listsItemsStorage[listName] = [];

    localStorage.setItem('shopping-list', JSON.stringify(listsItemsStorage));
}

export default addListLocalStorage;