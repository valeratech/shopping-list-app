import displayItemCount from "./DisplayItemCount";
import updateItemLocalStorage from "../LocalStorage/UpdateItemLocalStorage";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";
import updateDOMItemDate from "./UpdateDOMItemDate";

function toggleListItemStatus(event) {
    const shoppingContainer = document.querySelector('.sl-list--container');
    const completedContainer = document.querySelector('.cl-list--container');
    const dateStatus = event.target.parentElement.nextElementSibling.firstElementChild;
    const listItem = event.target.parentElement.parentElement;
    if (event.target.checked === true) {
        setTimeout(() => {
            toggleClassName(listItem, 'cl-list--item', 'sl-list--item');
            completedContainer.insertBefore(listItem, completedContainer.firstChild);
            dateStatus.textContent = 'Completed, ';
            updateDOMItemDate(event);
            displayZeroItemsMessage();
        }, 600);

    } else if (event.target.checked === false) {
        setTimeout(() => {
            toggleClassName(listItem, 'sl-list--item', 'cl-list--item');
            shoppingContainer.appendChild(listItem);
            dateStatus.textContent = 'Added, '
            updateDOMItemDate(event);
            displayZeroItemsMessage();
        },600);
    }
    updateItemLocalStorage(event);
    displayItemCount();
}

function toggleClassName(item, classNameAdd, classNameRemove) {
    item.classList.remove(classNameRemove);
    item.classList.add(classNameAdd);
}

export default toggleListItemStatus;