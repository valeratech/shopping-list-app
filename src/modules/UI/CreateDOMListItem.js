import { formatDistanceToNow, parseISO } from "date-fns";

function createDOMListItem(itemText, completed, date) {
    const shopList = document.querySelector('.sl-list--container');
    const compList = document.querySelector('.cl-list--container');
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.append(
        createItemLabel(itemText, completed),
        createDateContainer(date, completed)
    );

    if (completed) {
        listItem.classList.add('cl-list--item');
        compList.appendChild(listItem);
    } else {
        listItem.classList.add('sl-list--item');
        shopList.appendChild(listItem);
    }

    // Trigger animation for adding item
    setTimeout(() => listItem.classList.add('list-item-appear'), 0);
}

function createItemLabel(itemText, completed) {
    const label = document.createElement('label');
    label.append(createCheckbox(completed), createSpan(), createItemText(itemText));
    label.className = 'box-container';
    return label;
}

function createCheckbox(completed) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    completed ? (checkbox.checked = completed) : (checkbox.check = completed);
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

function createDateContainer(date, completed) {
    const small = document.createElement('small');
    small.append(
        createDateStatus(completed),
        createDate(date),
        createDateStatusEnd()
    );
    return small;
}

function createDateStatus(completed) {
    const span = document.createElement('span');
    span.className = 'date-status';
    const spanStatus = document.createTextNode(completed ? 'Completed, ' : 'Added, ');
    span.appendChild(spanStatus);
    return span;
}

function createDateStatusEnd() {
    const span = document.createElement('span');
    span.className = 'date-status-end';
    const spanStatus = document.createTextNode(' ago');
    span.appendChild(spanStatus);
    return span;
}

function createDate(date) {
    const span = document.createElement('span');
    span.className = 'date';
    const dateEntered = parseISO(date);
    const distanceToNow = formatDistanceToNow(dateEntered, { includeSeconds: true });
    const dateInfo = document.createTextNode(distanceToNow);
    span.appendChild(dateInfo);
    return span;
}

export default createDOMListItem;
