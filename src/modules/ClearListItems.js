function clearListItems() {
    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => item.remove());
}

export default clearListItems;