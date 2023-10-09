import addListLocalStorage from "../LocalStorage/AddListLocalStorage";
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
            clearShoppingListInput();
            hideShoppingList();
            break;
        case "button-cancel-list-popup":
            clearShoppingListInput();
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

function clearShoppingListInput() {
    document.getElementById('input-add-list-popup').value = '';
}

export default toggleShoppingListInput;