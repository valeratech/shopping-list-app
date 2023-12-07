import getListItemsLocalStorage from "../LocalStorage/GetListItemsLocalStorage";
import createDOMListItem from "./CreateDOMListItem";
import clearListItems from "./ClearListItems";

function displayListItems(shoppingList) {
    // Refreshes Shopping-List and Completed List containers and then populates items
    clearListItems();
    const itemsFromStorage = getListItemsLocalStorage();
    if (Object.keys(itemsFromStorage).length !== 0) {
        itemsFromStorage[shoppingList].forEach(item => {
            createDOMListItem(item.item, item.completed, item.date);
        })
    }
}

export default displayListItems;