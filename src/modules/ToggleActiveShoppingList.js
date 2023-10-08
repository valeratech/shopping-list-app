import displayListItems from "./DisplayListItems";
import removeActiveListClass from "./RemoveActiveListClass";
import addActiveListClass from "./AddActiveListClass";
import displayItemCount from "./DisplayItemCount";
import updateMainHeading from "./UpdateMainHeading";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";


function toggleActiveShoppingList(event) {

    const shoppingListName = event.target;

    const isListItem = shoppingListName.classList.contains('list-name');

    removeActiveListClass(isListItem);
    if (isListItem) {
        addActiveListClass(shoppingListName);
        displayListItems(shoppingListName.textContent.trim());
        updateMainHeading(shoppingListName.textContent.trim());
    };

    displayItemCount();
    displayZeroItemsMessage();
}

export default toggleActiveShoppingList;