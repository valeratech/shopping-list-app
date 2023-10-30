import deleteShoppingListLocalStorage from "../LocalStorage/DeleteShoppingListLocalStorage";
import getActiveShoppingList from "./GetActiveShoppingList";

function deleteShoppingListDOM() {
    const shoppingList = getActiveShoppingList();
    const shoppingLists = document.querySelectorAll('.list-text');
    shoppingLists.forEach(list => {
        // filter through shopping list items/names and remove if name is equal to the active shopping list
        console.log(list.parentElement.textContent);
        list.parentElement.textContent === shoppingList && list.parentElement.remove();
    })
    deleteShoppingListLocalStorage(shoppingList);
}

export default deleteShoppingListDOM;