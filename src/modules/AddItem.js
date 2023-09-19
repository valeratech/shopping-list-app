import createDOMListItem from "./CreateDOMListItem";

function addListItem(event) {
    const item = getItemValue(event);
    if (event.key === 'Enter')
        createDOMListItem(item);
}

function getItemValue(event) {
    return event.target.value;
}

export default addListItem;