import getShoppingListLocalStorage from "./GetShoppingListLocalStorage";
import addListNameDOM from "./AddListNameDOM";
import setDefaultShoppingListActive from "./SetDefaultShoppingListActive";

function displayShoppingLists() {
    const shoppingListsFromStorage = getShoppingListLocalStorage();
    Object.keys(shoppingListsFromStorage).forEach(list => {
        if (list !== 'Default Shopping List') {
            addListNameDOM(list);
        }
    });
    setDefaultShoppingListActive();
}

export default displayShoppingLists;