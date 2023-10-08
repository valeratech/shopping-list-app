import displayItemCount from "./DisplayItemCount";
import updateItemLocalStorage from "./UpdateItemLocalStorage";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";

function toggleItemList(event) {
    const shoppingContainer = document.querySelector('.sl-list--container');
    const completedContainer = document.querySelector('.cl-list--container');

    const listItem = event.target.parentElement.parentElement;

    if (event.target.checked) {
       toggleClassName(listItem, 'completed-list--item', 'shopping-list--item');
       completedContainer.insertBefore(listItem, completedContainer.firstChild);
    } else {
       toggleClassName(listItem, 'shopping-list--item', 'completed-list--item');
       shoppingContainer.appendChild(listItem);
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