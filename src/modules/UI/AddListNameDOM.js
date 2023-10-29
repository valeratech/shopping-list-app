import removeActiveListClass from "./RemoveActiveListClass";
import addActiveListClass from "./AddActiveListClass";
import displayListItems from "./DisplayListItems";
import displayItemCount from "./DisplayItemCount";
import updateMainHeading from "./UpdateMainHeading";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";

function addListNameDOM(name) {
    const container = document.getElementById('list-sidebar');
    const addListContainer = document.getElementById('add-list-container');
    container.insertBefore(createNewShoppingList(name), addListContainer);
    removeActiveListClass(true);
    addActiveListClass(addListContainer.previousElementSibling);
    displayListItems(addListContainer.previousElementSibling.firstChild.textContent);
    displayItemCount();
    updateMainHeading(name);
    displayZeroItemsMessage();
}

function createNewShoppingList(name) {
    const listName = document.createElement('li');
    listName.className = 'list-name';
    listName.append(createListName(name), createListIcon());
    return listName;
}

function createListIcon() {
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-ellipsis-vertical';
    return icon;
}

function createListName(name) {
    const span = document.createElement('span');
    span.className = 'list-text';
    span.appendChild(document.createTextNode(name));
    return span;
}


export default addListNameDOM;