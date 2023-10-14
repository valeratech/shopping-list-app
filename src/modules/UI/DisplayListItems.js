import getListsItemsLocalStorage from "../LocalStorage/GetListsItemsLocalStorage";
import createDOMListItem from "./CreateDOMListItem";
import clearListItems from "./ClearListItems";

function displayListItems(shoppingList) {
    clearListItems();
    const itemsFromStorage = getListsItemsLocalStorage();
    if (Object.keys(itemsFromStorage).length !== 0) {
        itemsFromStorage[shoppingList].forEach(item => {
            createDOMListItem(item.item, item.completed, item.date);
        })
    }
}

export default displayListItems;