import displayItemCount from "./DisplayItemCount";
import updateItemLocalStorage from "../LocalStorage/UpdateItemLocalStorage";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";
import updateDOMItemDate from "./UpdateDOMItemDate";

function toggleItemList(event) {
    const shoppingContainer = document.querySelector('.sl-list--container');
    const completedContainer = document.querySelector('.cl-list--container');
    const dateStatus = event.target.parentElement.nextElementSibling.firstElementChild;
    const listItem = event.target.parentElement.parentElement;
    if (event.target.checked === true) {
        toggleClassName(listItem, 'completed-list--item', 'shopping-list--item');
        completedContainer.insertBefore(listItem, completedContainer.firstChild);
        dateStatus.textContent = 'Completed, ';
        updateDOMItemDate(event);
    } else if (event.target.checked === false) {
        toggleClassName(listItem, 'shopping-list--item', 'completed-list--item');
        shoppingContainer.appendChild(listItem);
        dateStatus.textContent = 'Added, '
        updateDOMItemDate(event);
    }
    updateItemLocalStorage(event);
    displayItemCount();
    displayZeroItemsMessage();
}

function toggleClassName(item, classNameAdd, classNameRemove) {
    item.classList.remove(classNameRemove);
    item.classList.add(classNameAdd);
}

export default toggleItemList;