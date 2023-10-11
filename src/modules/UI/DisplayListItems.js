import getListsItemsLocalStorage from "../LocalStorage/GetListsItemsLocalStorage";
import createDOMListItem from "./CreateDOMListItem";
import clearListItems from "./ClearListItems";

function displayListItems(shoppingList) {
    clearListItems();
    const itemsFromStorage = getListsItemsLocalStorage();
    console.log(itemsFromStorage);
    if (Object.keys(itemsFromStorage).length !== 0) {
        itemsFromStorage[shoppingList].forEach(item => {
            console.log(item.date);
            createDOMListItem(item.item, item.completed, item.date);
        })
    }
}

export default displayListItems;