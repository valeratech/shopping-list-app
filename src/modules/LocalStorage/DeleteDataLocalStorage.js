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
            break;
    }

    displayListItems(shoppingList);
    displayZeroItemsMessage();
}

export default deleteDataLocalStorage;