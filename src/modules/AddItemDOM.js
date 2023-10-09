import createDOMListItem from "./CreateDOMListItem";
import toggleAddItemActiveClassname from "./ToggleAddItemActiveClassname";
import clearFormValue from "./ClearFormValue";
import getActiveShoppingList from "./GetActiveShoppingList";
import addItemLocalStorage from "./AddItemLocalStorage";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";

function addListItem(event) {
    const item = getItemValue(event);

    if (event.key === 'Enter' && item !== '') {
        createDOMListItem(item, false);
        clearFormValue(event.target);
        const activeList = getActiveShoppingList();
        addItemLocalStorage(activeList, item, false);
        displayZeroItemsMessage();
        toggleAddItemActiveClassname(document.querySelector('.add-item'), document.querySelector('.add-item-form'))
    }
}

function getItemValue(event) {
    return event.target.value;
}

export default addListItem;