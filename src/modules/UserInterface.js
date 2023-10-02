import toggleForm from "./ToggleForm";
import addListItem from "./AddItem";
import displayItemCount from "./DisplayItemCount";
import toggleItemList from "./ToggleItemList";
import {filterItems, clearFilter} from "./FilterItems";
import toggleShoppingListInput from "./ToggleShoppingListInput";
import toggleSideBarMenu from "./ToggleSideBarMenu";
import addItemLocalStorage from "./AddItemLocalStorage";
import displayListItems from "./DisplayListItems";
import highlightActiveList from "./HighlightActiveList";

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
    const addShoppingListBtn = document.getElementById('add-list-container');
    addShoppingListBtn.addEventListener('click', toggleShoppingListInput);


    // Toggle the sidebar menu by listening for a change which displays the shopping-lists/names
    const menu = document.getElementById('menu-list');
    menu.addEventListener('change', toggleSideBarMenu);


    const shoppingLists = document.getElementById('list-sidebar');
    shoppingLists.addEventListener('click', highlightActiveList);

    addItemLocalStorage();
    displayListItems('Default Shopping List');
    // Counts the amount of items in the DOM shopping-list and append to the shopping-cart
    displayItemCount();

}


export default userInterface;