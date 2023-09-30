import getItemLocalStorage from "./GetItemLocalStorage";
import createDOMListItem from "./CreateDOMListItem";

function displayListItems() {
    const itemsFromStorage = getItemLocalStorage();

    itemsFromStorage["Shopping List"].forEach(item => {
        createDOMListItem(item.item, item.completed);
    })
}

export default displayListItems;