import addListLocalStorage from "./AddListLocalStorage";
import addListNameDOM from "./AddListNameDOM";

function toggleShoppingListInput(event) {
    const listName = event.target.parentElement.parentElement.firstElementChild.value;
    switch (event.target.id) {
        case "button-add-list-name":
            showShoppingListInput();
            break;
        case "button-add-list-popup":
            addListLocalStorage(listName);
            addListNameDOM(listName);
            hideShoppingList();
            break;
        case "button-cancel-list-popup":
            console.log('Cancel');
            hideShoppingList();
            break;
    }
}

function showShoppingListInput() {
    document.querySelector('.add-list-name').classList.remove('active');
    document.querySelector('.add-list-popup').classList.add('active');
}

function hideShoppingList() {
    document.querySelector('.add-list-name').classList.add('active');
    document.querySelector('.add-list-popup').classList.remove('active');
}

export default toggleShoppingListInput;