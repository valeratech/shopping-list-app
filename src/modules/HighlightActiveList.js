import displayListItems from "./DisplayListItems";
import removeActiveListClass from "./RemoveActiveListClass";
import addActiveListClass from "./AddActiveListClass";
import displayItemCount from "./DisplayItemCount";
import updateMainHeading from "./UpdateMainHeading";

function highlightActiveList(event) {

    const shoppingListName = event.target;

    const isListItem = shoppingListName.classList.contains('list-name');

    removeActiveListClass(isListItem);
    if (isListItem) {
        addActiveListClass(shoppingListName);
        displayListItems(shoppingListName.textContent.trim());
        updateMainHeading(shoppingListName.textContent.trim());
    };

    displayItemCount();
}

export default highlightActiveList;