import getListItemsLocalStorage from "./GetListItemsLocalStorage";
import displayListItems from "../UI/DisplayListItems";
import displayZeroItemsMessage from ".././UI/DisplayZeroItemsMessage";
import deleteShoppingListDOM from "../UI/DeleteShoppingListDOM";
import setDefaultShoppingListActive from "../UI/SetDefaultShoppingListActive";
import displayItemCount from "../UI/DisplayItemCount";

function deleteDataLocalStorage(type, listName) {
    let shoppingList = listName;
    let listItemsStorage;

    switch(type) {
        case 'all':
            listItemsStorage = getListItemsLocalStorage();
            listItemsStorage[shoppingList] = [];
            localStorage.setItem('shopping-list', JSON.stringify(listItemsStorage));
            break;
        case 'completed':
            listItemsStorage = getListItemsLocalStorage();
            // Filter out items with completed equal to true into a new array reference value
            listItemsStorage[shoppingList] = listItemsStorage[shoppingList].filter(item => !item.completed);
            localStorage.setItem('shopping-list', JSON.stringify(listItemsStorage));
            break;
        case 'list':
            listItemsStorage = getListItemsLocalStorage();
            delete listItemsStorage[shoppingList];
            localStorage.setItem('shopping-list', JSON.stringify(listItemsStorage));
            deleteShoppingListDOM();
            setDefaultShoppingListActive();
            break;
    }

    displayListItems(type === 'list' ? 'Default Shopping List' : shoppingList);
    displayItemCount();
    displayZeroItemsMessage();
}

export default deleteDataLocalStorage;