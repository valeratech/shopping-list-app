import createDOMListItem from "./CreateDOMListItem";
import clearFormValue from "./ClearFormValue";

function addListItem(event) {
    const item = getItemValue(event);
    if (event.key === 'Enter' && item !== '') {
        createDOMListItem(item);
        clearFormValue(event.target);
    }
}

function getItemValue(event) {
    return event.target.value;
}

export default addListItem;