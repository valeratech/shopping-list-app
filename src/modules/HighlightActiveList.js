import displayListItems from "./DisplayListItems";
import removeActiveListClass from "./RemoveActiveListClass";

function highlightActiveList(event) {
    const isListItem = event.target.classList.contains('list-name');

    removeActiveListClass(isListItem);

    if (isListItem) {
        event.target.classList.add('active-list');
        displayListItems(event.target.textContent.trim())
    };
}

export default highlightActiveList;