import createDOMListItem from "./CreateDOMListItem";
import clearFormValue from "./ClearFormValue";
import getActiveShoppingList from "./GetActiveShoppingList";
import addItemLocalStorage from "./AddItemLocalStorage";
import shoppingList from "./TestShoppingListData";


function addListItem(event) {
    const item = getItemValue(event);

    if (event.key === 'Enter' && item !== '') {
        createDOMListItem(item, false);
        clearFormValue(event.target);
        const activeList = getActiveShoppingList();
        addItemLocalStorage(activeList, item, false);
    }
}

function getItemValue(event) {
    return event.target.value;
}

export default addListItem;