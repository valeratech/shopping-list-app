import displayItemCount from "./DisplayItemCount";

function createDOMListItem(itemText, completed) {
    const shopList = document.querySelector('.sl-list--container');
    const compList = document.querySelector('.cl-list--container');
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.appendChild(createItemLabel(itemText, completed));

    if (completed) {
        listItem.className = 'completed-list--item';
        compList.appendChild(listItem);
    } else {
        listItem.className = 'shopping-list--item';
        shopList.appendChild(listItem)
    }
}

function createItemLabel(itemText, completed) {
    const label = document.createElement('label');
    label.append(createCheckbox(completed), createSpan(), createItemText(itemText));
    label.className = 'box-container';
    return label;

}

function createCheckbox(completed) {
    console.log(completed)
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    completed ? checkbox.checked = completed : checkbox.check = completed;
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
