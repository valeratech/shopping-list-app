import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import getActiveShoppingList from "../UI/GetActiveShoppingList";
function deleteShoppingListLocalStorage() {
    const shoppingList = getActiveShoppingList();
    const listsItemsStorage = getListsItemsLocalStorage();
    console.log(listsItemsStorage)
    delete listsItemsStorage[shoppingList];
    localStorage.setItem('shopping-list', JSON.stringify(listsItemsStorage));
}

export default deleteShoppingListLocalStorage;