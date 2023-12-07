import getListItemsLocalStorage from "./GetListItemsLocalStorage";
import displayListItems from "../UI/DisplayListItems";
import displayZeroItemsMessage from ".././UI/DisplayZeroItemsMessage";

function deleteDataLocalStorage(type, listName) {
    let shoppingList = listName;
    let listItemsStorage;

    switch(type) {
        case 'list':
            listItemsStorage = getListItemsLocalStorage();
            delete listItemsStorage[shoppingList];
            localStorage.setItem('shopping-list', JSON.stringify(listItemsStorage));
            break;
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
    }

    displayListItems(shoppingList);
    displayZeroItemsMessage();
}

export default deleteDataLocalStorage;