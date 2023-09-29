import hideShoppingList from "./HideShoppingList";

function createShoppingList(event) {
    const button = event.target.id;
    if (button.includes('cancel')) {
        hideShoppingList();
    } else {
        console.log('false');
    }
}

export default createShoppingList;