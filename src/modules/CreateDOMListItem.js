function createDOMListItem() {
    const list = document.querySelector('ul');
    const listItem = document.createElement('li')
}

function createItemLabel() {
    const label = document.createElement('label');

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


// <li>
//     <label class="box-container">
//         <input type="checkbox">
//         <span class="checkmark"></span>
//         My Item Goes Here
//     </label>
// </li>