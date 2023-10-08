function displayZeroItemsMessage() {
    checkShoppingList();
    checkCompletedList();
}

function zeroListItemsMessage(text) {
    const span = document.createElement('span');
    span.className = 'zero-items-message';
    const message = document.createTextNode(text);
    span.appendChild(message);
    return span;
}

function checkShoppingList() {
    // Checks for items in shopping-list container - Display no list items message if none
    const slContainer = document.querySelector('.sl-list--container');
    if (slContainer.firstChild === null) {
        slContainer.appendChild(zeroListItemsMessage('Add items to your shopping-list'));
    } else if (slContainer.firstElementChild.textContent === 'Add items to your shopping-list') {
        slContainer.removeChild(slContainer.firstElementChild);
    }
    console.log(slContainer.firstElementChild.textContent)
}

function checkCompletedList() {
    // Checks for items in completed-list container - Display no list items message if none
    const clContainer = document.querySelector('.cl-list--container');
    if (clContainer.firstChild === null) {
        clContainer.appendChild(zeroListItemsMessage('No completed items'));
    } else if (clContainer.lastElementChild.textContent === 'No completed items') {
        clContainer.removeChild(clContainer.lastElementChild);
    }
    console.log(clContainer.lastElementChild.textContent)
}

export default displayZeroItemsMessage;