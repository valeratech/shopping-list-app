function checkForListItems() {
    checkShoppingList();
    checkCompletedList();
}

function zeroListItemsMessage(text) {
    const span = document.createElement('span');
    const message = document.createTextNode(text);
    return span.appendChild(message);
}

function checkShoppingList() {
    const slContainer = document.querySelector('.sl-list--container');
    console.log(slContainer.firstChild === null);
    // Check to see if there are items in the Shopping-List container
    if (slContainer.firstChild === null) {
        slContainer.appendChild(zeroListItemsMessage('Add items to your shopping-list'));
    };
}

function checkCompletedList() {
    const clContainer = document.querySelector('.cl-list--container');
    console.log(clContainer.firstChild === null);
    // Check to see if there are items in the Shopping-List container
    if (clContainer.firstChild === null) {
        clContainer.appendChild(zeroListItemsMessage('No completed items'));
    };
}

export default checkForListItems;