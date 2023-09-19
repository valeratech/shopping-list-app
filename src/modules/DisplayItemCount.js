function displayItemCount() {
    countListItems();
}

function countListItems() {
    const itemList = document.querySelectorAll('li');
    console.log(Array.from(itemList));

}

export default displayItemCount;