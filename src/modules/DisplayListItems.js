import getItemLocalStorage from "./GetItemLocalStorage";
import createDOMListItem from "./CreateDOMListItem";
import clearListItems from "./ClearListItems";

function displayListItems(shoppingList) {
    clearListItems();

    const itemsFromStorage = getItemLocalStorage(shoppingList);
    itemsFromStorage[shoppingList].forEach(item => {
        createDOMListItem(item.item, item.completed);
    })
}

export default displayListItems;