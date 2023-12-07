function displayItemCount() {
    const cart = document.querySelector('.count-cart');

    const itemCount = countListItems();
    console.log(itemCount)
    // Clear the current cart count before appending a new count (number)
    cart.textContent = '';

    if (itemCount === 0) {
        cart.classList.add('hide')
    } else if (itemCount < 10) {
        cart.classList.remove('hide')
        if (itemCount === 1) {
            cart.textContent = itemCount;
        } else {
            cart.textContent = itemCount;
        }
    } else if (itemCount < 100) {
        if (itemCount === 11) {
            cart.textContent = itemCount;
        } else {
            cart.textContent = itemCount;
        }
    } else {
        cart.textContent = itemCount;
    }
}

function countListItems() {
    const itemList = document.querySelectorAll('.sl-list--item');
    return Array.from(itemList).length;
}

export default displayItemCount;