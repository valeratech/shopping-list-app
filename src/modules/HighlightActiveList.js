import displayListItems from "./DisplayListItems";
import removeActiveListClass from "./RemoveActiveListClass";
import addActiveListClass from "./AddActiveListClass";
import displayItemCount from "./DisplayItemCount";

function highlightActiveList(event) {
    const isListItem = event.target.classList.contains('list-name');

    removeActiveListClass(isListItem);

    if (isListItem) {
        addActiveListClass(event.target)
        displayListItems(event.target.textContent.trim())
    };
    displayItemCount();
}

export default highlightActiveList;