import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import getActiveShoppingList from "./GetActiveShoppingList";

function updateItemLocalStorage(event) {
    const listsItemsStorage = getListsItemsLocalStorage();
    const activeList = getActiveShoppingList();
    const shoppingList = listsItemsStorage[activeList];
    const item = event.target.nextSibling.nextSibling;

    let x = 0;
    while (x !== shoppingList.length) {
        // Loop through to get to the selected item and update the 'completed' boolean key
        if (shoppingList[x].item === item.textContent) {
            listsItemsStorage[activeList][x]['completed'] = !shoppingList[x]['completed'];
            localStorage.setItem('shopping-list', JSON.stringify(listsItemsStorage));
        }
        x++
    }

}

export default updateItemLocalStorage;