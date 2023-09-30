import toggleForm from "./ToggleForm";
import addListItem from "./AddItem";
import displayItemCount from "./DisplayItemCount";
import toggleItemList from "./ToggleItemList";
import {filterItems, clearFilter} from "./FilterItems";
import toggleShoppingListInput from "./ToggleShoppingListInput";
import toggleSideBarMenu from "./ToggleSideBarMenu";
import createShoppingList from "./CreateShoppingList";
import addItemLocalStorage from "./AddItemLocalStorage";
import displayListItems from "./DisplayListItems";

function userInterface() {
    init();
}

function init() {
    // Listen for clicks on the nested button elements 'add-item' and 'cancel-form'
    const formContainer = document.querySelector('.form-container');
    formContainer.addEventListener('click', toggleForm);
    // ['click', 'keyup'].forEach(event => formContainer.addEventListener(event, toggleForm));

    // EDIT LATER
    // const addItemForm = document.getElementById('add-item-form');

    // Listen for a 'keyup' record the value from the add-item textbox
    formContainer.addEventListener('keyup', addListItem);

    // Check if a shopping/completed list checkbox is checked or unchecked
    const listContainers = document.querySelector('.lists-container');
    listContainers.addEventListener('change', toggleItemList);

    // Filter items on each 'keydown' stroke from the text-input box
    const filter = document.getElementById('filter');
    filter.addEventListener('input', filterItems);

    // Clear the filter contents of the text-input box by clicking the 'x' icon
    const clearFilterBtn = document.querySelector('.clear-filter');
    clearFilterBtn.addEventListener('click', clearFilter);

    // Add separate shopping-lists by name which will contain the individual items added
    const addShoppingListBtn = document.querySelector('.add-list-name');
    addShoppingListBtn.addEventListener('click', toggleShoppingListInput);

    // Cancel and hide the display of the 'add-list-popup' container
    const addListContainer = document.querySelector('.add-list-popup');
    addListContainer.addEventListener('click', createShoppingList);


    // Toggle the sidebar menu by listening for a change which displays the shopping-lists/names
    const menu = document.getElementById('menu-list');
    menu.addEventListener('change', toggleSideBarMenu);

    // Counts the amount of items in the DOM shopping-list and append to the shopping-cart
    displayItemCount();

    addItemLocalStorage();
    displayListItems();
}


export default userInterface;