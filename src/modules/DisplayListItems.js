import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import createDOMListItem from "./CreateDOMListItem";
import clearListItems from "./ClearListItems";

function displayListItems(shoppingList) {
    clearListItems();

    const itemsFromStorage = getListsItemsLocalStorage(shoppingList);
    itemsFromStorage[shoppingList].forEach(item => {
        createDOMListItem(item.item, item.completed);
    })
}

export default displayListItems;