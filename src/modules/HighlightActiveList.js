import displayListItems from "./DisplayListItems";

function highlightActiveList(event) {
    const lists = document.querySelectorAll('.list-name');
    const isActiveClass = event.target.classList.contains('list-name');
    lists.forEach(list => {
        if (isActiveClass) {
            list.classList.remove('active-list');
        }
    });

    isActiveClass && event.target.classList.add('active-list');

    displayListItems(event.target.lastChild.textContent.trim());
}

export default highlightActiveList;