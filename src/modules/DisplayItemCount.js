function displayItemCount() {
    const cart = document.querySelector('.count-cart');

    const itemCount = countListItems();

    // Clear the current cart count before appending a new count (number)
    cart.textContent = '';

    if (itemCount === 0) {
        cart.classList.add('hide')
    } else if (itemCount < 10) {
        if (itemCount === 1) {
            cart.appendChild(document.createTextNode(itemCount));
            cart.classList.remove('hide')
        } else {
            cart.appendChild(document.createTextNode(itemCount));
        }
    } else if (itemCount < 100) {
        if (itemCount === 11) {
            cart.appendChild(document.createTextNode(itemCount));
        } else {
            cart.appendChild(document.createTextNode(itemCount));
        }
    } else {
        cart.appendChild(document.createTextNode(itemCount));
    }
}

function countListItems() {
    const itemList = document.querySelectorAll('.shopping-list--item');
    return Array.from(itemList).length;
}

export default displayItemCount;