function clearListItems() {
    removeAllChildren('.sl-list-container');
    removeAllChildren('.cl-list-container');
}

function removeAllChildren(containerClassName) {
    const parent = document.querySelector(containerClassName);
    let child = parent.lastChild;
    while(child) {
        parent.removeChild(child);
        child = parent.lastChild;
    }
}

export default clearListItems;