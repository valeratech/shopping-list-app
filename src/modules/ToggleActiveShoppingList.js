import displayListItems from "./DisplayListItems";
import removeActiveListClass from "./RemoveActiveListClass";
import addActiveListClass from "./AddActiveListClass";
import displayItemCount from "./DisplayItemCount";
import updateMainHeading from "./UpdateMainHeading";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";


function toggleActiveShoppingList(event) {
    const shoppingListName = event.target;
    console.log(shoppingListName);
    // Create a Boolean to make sure the onClick event is referencing the correct element (shopping-list-container)
    const isListItem = shoppingListName.classList.contains('list-name');

    removeActiveListClass(isListItem);
    // If 'isListItem' is true then populate the shopping and completed lists
    if (isListItem) {
        addActiveListClass(shoppingListName);
        displayListItems(shoppingListName.textContent.trim());
        updateMainHeading(shoppingListName.textContent.trim());
        displayZeroItemsMessage();

    };
    displayItemCount();
}

export default toggleActiveShoppingList;