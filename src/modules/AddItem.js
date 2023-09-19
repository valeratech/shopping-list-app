import createDOMListItem from "./CreateDOMListItem";

function addListItem(event) {
    const item = getItemValue(event);
    if (event.key === 'Enter') {
        createDOMListItem(item);
        clearItemValue(event.target);
    }
}

function getItemValue(event) {
    return event.target.value;
}

function clearItemValue(item) {
    item.value = '';
}

export default addListItem;