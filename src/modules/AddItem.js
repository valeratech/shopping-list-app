function addListItem(event) {
    const item = getItemValue(event);
    console.log(item);
}

function getItemValue(event) {
    if (event.key === 'Enter') {
        return event.target.value;
    }
}

export default addListItem;