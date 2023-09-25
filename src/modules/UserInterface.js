import toggleForm from "./ToggleForm";
import addListItem from "./AddItem";
import displayItemCount from "./DisplayItemCount";
import toggleItemList from "./ToggleItemList";
import {filterItems, clearFilter} from "./FilterItems";

function userInterface() {
    init();
}

function init() {
    // The event listener will listen for clicks on the nested button elements 'add-item' and 'cancel-form'
    const formContainer = document.querySelector('.form-container');
    formContainer.addEventListener('click', toggleForm);
    // ['click', 'keyup'].forEach(event => formContainer.addEventListener(event, toggleForm));

    // EDIT LATER
    // const addItemForm = document.getElementById('add-item-form');

    // Event listener for submitting the input value from the add-item textbox
    formContainer.addEventListener('keyup', addListItem);

    // Event listener for checking if a checkbox is checked or unchecked
    const listContainers = document.querySelector('.lists-container');
    listContainers.addEventListener('change', toggleItemList);

    // Event listener for filtering items on 'keydown' strokes using a text-input box
    const filter = document.getElementById('filter');
    filter.addEventListener('input', filterItems);

    // Event listener for clearing the filter input-text box on click
    const clearFilterBtn = document.querySelector('.clear-filter');
    clearFilterBtn.addEventListener('click', clearFilter);

    // Counts the amount of items in the DOM shopping-list and append to the shopping-cart
    displayItemCount();
}


export default userInterface;