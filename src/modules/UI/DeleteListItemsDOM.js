import deleteDataLocalStorage from "../LocalStorage/DeleteDataLocalStorage";
import getActiveShoppingList from "./GetActiveShoppingList";

function deleteListItemsDOM() {
    const shoppingList = getActiveShoppingList();
    const shoppingLists = document.querySelectorAll('.list-text');
    shoppingLists.forEach(list => {
        // filter through shopping list items/names and remove if name is equal to the active shopping list
        list.parentElement.textContent === shoppingList && list.parentElement.remove();
    })
    deleteDataLocalStorage(shoppingList);
}

export default deleteListItemsDOM;