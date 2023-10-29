import getListsItemsLocalStorage from "./GetListsItemsLocalStorage";
import getActiveShoppingList from "../UI/GetActiveShoppingList";

function updateItemLocalStorage(event) {
    const listsItemsStorage = getListsItemsLocalStorage();
    const activeList = getActiveShoppingList();
    console.log(activeList)
    const shoppingList = listsItemsStorage[activeList];
    const item = event.target.nextSibling.nextSibling;

    let index = 0;
    while (index !== shoppingList.length) {
        // Loop through to get to the selected item and update the 'completed' boolean key
        if (shoppingList[index].item === item.textContent) {
            listsItemsStorage[activeList][index]['completed'] = !shoppingList[index]['completed'];
            listsItemsStorage[activeList][index]['date'] = new Date();
            localStorage.setItem('shopping-list', JSON.stringify(listsItemsStorage));
        }
        index++
    }

}

export default updateItemLocalStorage;