import displayItemCount from "./DisplayItemCount";
import updateItemLocalStorage from "../LocalStorage/UpdateItemLocalStorage";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";
import updateDOMItemDate from "./UpdateDOMItemDate";

function toggleListItemStatus(event) {
    if (event.target.checked === true) {
        setTimeout(() => toggleListItemHelper('Completed, ', event), 550);
    } else if (event.target.checked === false) {
        setTimeout(() => toggleListItemHelper('Added, ', event), 550);
    }
}

function toggleListItemHelper(list, event) {
    const shoppingContainer = document.querySelector('.sl-list-container');
    const completedContainer = document.querySelector('.cl-list-container');
    const dateStatus = event.target.parentElement.nextElementSibling.firstElementChild;
    const listItem = event.target.parentElement.parentElement;
    toggleClassName(listItem, 'cl-list--item', 'sl-list--item');
    list === 'Completed, ' ?
        completedContainer.insertBefore(listItem, completedContainer.firstChild) :
        shoppingContainer.appendChild(listItem);
    dateStatus.textContent = list;
    updateDOMItemDate(event);
    updateItemLocalStorage(event);
    displayItemCount();
    displayZeroItemsMessage();
}

function toggleClassName(item, classNameAdd, classNameRemove) {
    item.classList.remove(classNameRemove);
    item.classList.add(classNameAdd);
}

export default toggleListItemStatus;