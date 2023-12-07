import deleteDataLocalStorage from "../LocalStorage/DeleteDataLocalStorage";
import getActiveShoppingList from "./GetActiveShoppingList";
import updateMainHeading from "./UpdateMainHeading";

function deleteShoppingListDOM() {
    const shoppingList = getActiveShoppingList();
    const shoppingLists = document.querySelectorAll('.list-text');
    shoppingLists.forEach(list => {
        console.log(list.parentElement.textContent);
        list.parentElement.textContent === shoppingList && list.parentElement.remove();
    })
    deleteDataLocalStorage('list', shoppingList);
    updateMainHeading();
}

export default deleteShoppingListDOM;