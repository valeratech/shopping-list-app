function displayItemCount() {
    countListItems();
}

function countListItems() {
    const itemList = document.querySelectorAll('.shopping-list--item');
    console.log(Array.from(itemList));

}

export default displayItemCount;