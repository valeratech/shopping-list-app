import toggleAddItemActiveClassname from "./ToggleAddItemActiveClassname";
import clearFormValue from "./ClearFormValue";
import getActiveShoppingList from "./GetActiveShoppingList";
import addItemLocalStorage from "../LocalStorage/AddItemLocalStorage";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";
import displayListItems from "./DisplayListItems";
import displayItemCount from "./DisplayItemCount";

function addItemDom(event) {
    const item = getItemValue(event);

    const currentDate = new Date();

    if (event.key === 'Enter' && item !== '') {
        clearFormValue(event.target);
        const activeList = getActiveShoppingList();
        addItemLocalStorage(activeList, item, false, currentDate);
        displayListItems(activeList);
        displayItemCount();
        displayZeroItemsMessage();
        toggleAddItemActiveClassname(
            document.querySelector('.add-item'),
            document.querySelector('.add-item-form')
        )
    }
}

function getItemValue(event) {
    return event.target.value;
}

export default addItemDom;