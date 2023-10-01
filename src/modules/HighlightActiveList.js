import displayListItems from "./DisplayListItems";

function highlightActiveList(event) {
    const isListItem = event.target.classList.contains('list-name');

    removeActiveListClass(isListItem);

    if (isListItem) {
        event.target.classList.add('active-list');
        displayListItems(event.target.lastChild.textContent.trim())
    };
}

function removeActiveListClass(isListItem) {
    const lists = document.querySelectorAll('.list-name');
    lists.forEach(list => {
        if (isListItem) {
            list.classList.remove('active-list');
        }
    });
}

export default highlightActiveList;