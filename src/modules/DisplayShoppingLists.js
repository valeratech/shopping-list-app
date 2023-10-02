import getShoppingListLocalStorage from "./GetShoppingListLocalStorage";
import addListNameDOM from "./AddListNameDOM";

function displayShoppingLists() {
    const shoppingListsFromStorage = getShoppingListLocalStorage();
    Object.keys(shoppingListsFromStorage).forEach(list => {
        if (list !== 'Default Shopping List') {
            addListNameDOM(list);
        }
    });
}

export default displayShoppingLists;