function displayItemCount() {
    const cart = document.getElementById('count-cart');
    const itemCount = countListItems();
    if (itemCount === 0) {
        // do nothing
    } else if (itemCount < 10) {
        if (itemCount === 1) {
            cart.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0' + itemCount));
        } else {
            cart.removeChild(cart.firstChild);
            cart.appendChild(document.createTextNode('\u00A0\u00A0\u00A0' + itemCount));
        }
    } else if (itemCount < 100) {
        if (itemCount === 11) {
            cart.removeChild(cart.firstChild);
            cart.appendChild(document.createTextNode('\u00A0\u00A0\u00A0' + itemCount));
        } else {
            cart.removeChild(cart.firstChild);
            cart.appendChild(document.createTextNode('\u00A0\u00A0' + itemCount));
        }
    } else {
        cart.removeChild(cart.firstChild);
        cart.appendChild(document.createTextNode(itemCount));
    }
}

function countListItems() {
    const itemList = document.querySelectorAll('.shopping-list--item');
    return Array.from(itemList).length;
}

export default displayItemCount;