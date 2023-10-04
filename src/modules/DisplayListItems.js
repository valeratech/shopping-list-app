import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import createDOMListItem from "./CreateDOMListItem";
import clearListItems from "./ClearListItems";

function displayListItems(shoppingList) {
    clearListItems();
    const itemsFromStorage = getListsItemsLocalStorage();
    console.log(itemsFromStorage)
    if (Object.keys(itemsFromStorage).length !== 0) {
        console.log(itemsFromStorage[shoppingList])
        itemsFromStorage[shoppingList].forEach(item => {
            createDOMListItem(item.item, item.completed);
        })
    }
}

export default displayListItems;