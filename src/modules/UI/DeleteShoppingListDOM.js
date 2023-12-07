import getActiveShoppingList from "./GetActiveShoppingList";
import updateMainHeading from "./UpdateMainHeading";

function deleteShoppingListDOM() {
    console.log('run this')
    const shoppingList = getActiveShoppingList();
    const shoppingLists = document.querySelectorAll('.list-text');
    shoppingLists.forEach(list => {
        console.log(list.parentElement.textContent);
        list.parentElement.textContent === shoppingList && list.parentElement.remove();
    })
    updateMainHeading();
}

export default deleteShoppingListDOM;