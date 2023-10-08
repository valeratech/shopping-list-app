function displayZeroItemsMessage() {
    checkShoppingList();
    checkCompletedList();
}

function zeroListItemsMessage(text) {
    const span = document.createElement('span');
    const message = document.createTextNode(text);
    return span.appendChild(message);
}

function checkShoppingList() {
    // Checks for items in shopping-list container - Display no list items message if none
    const slContainer = document.querySelector('.sl-list--container');
    if (slContainer.firstChild === null) {
        slContainer.appendChild(zeroListItemsMessage('Add items to your shopping-list'));
    };
}

function checkCompletedList() {
    // Checks for items in completed-list container - Display no list items message if none
    const clContainer = document.querySelector('.cl-list--container');
    if (clContainer.firstChild === null) {
        clContainer.appendChild(zeroListItemsMessage('No completed items'));
    };
}

export default displayZeroItemsMessage;