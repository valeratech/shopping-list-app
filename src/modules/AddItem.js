import createDOMListItem from "./CreateDOMListItem";
import clearFormValue from "./ClearFormValue";
import displayItemCount from "./DisplayItemCount";

function addListItem(event) {
    const item = getItemValue(event);
    if (event.key === 'Enter' && item !== '') {
        console.log('Here')
        createDOMListItem(item);
        clearFormValue(event.target);
        displayItemCount();
    }
}

function getItemValue(event) {
    return event.target.value;
}

export default addListItem;