function addListNameDOM(name) {
    const container = document.getElementById('list-sidebar');
    const addListContainer = document.getElementById('add-list-container');
    container.insertBefore(createNewShoppingList(name), addListContainer);
}

function createNewShoppingList(name) {
    const listName = document.createElement('li');
    listName.className = 'list-name';
    console.log(createListName(name))
    listName.append(createListIcon(), createListName(name));
    return listName;
}

function createListIcon() {
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-list-ul';
    return icon;
}

function createListName(name) {
    const span = document.createElement('span');
    span.className = 'list-text';
    span.appendChild(document.createTextNode(name));
    return span;
}


export default addListNameDOM;