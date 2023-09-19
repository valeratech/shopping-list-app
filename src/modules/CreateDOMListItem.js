function createDOMListItem(itemText) {
    const list = document.querySelector('.item-list');
    const listItem = document.createElement('li');
    listItem.appendChild(createItemLabel(itemText));
    list.appendChild(listItem);
}

function createItemLabel(itemText) {
    const label = document.createElement('label');
    label.append(createCheckbox(), createSpan(), createItemText(itemText));
    label.className = 'box-container';
    return label;

}

function createCheckbox() {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    return checkbox;
}

function createSpan() {
    const span = document.createElement('span');
    span.className = 'checkmark';
    return span;
}

function createItemText(itemText) {
    const textNode = document.createTextNode(itemText);
    return textNode;
}

export default createDOMListItem;
