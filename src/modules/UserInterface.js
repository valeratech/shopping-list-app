import toggleForm from "./ToggleForm";
import addListItem from "./AddItem";
import displayItemCount from "./DisplayItemCount";
import toggleItemList from "./ToggleItemList";

function userInterface() {
    init();
}

function init() {
    // The event listener will listen for clicks on the nested button elements 'add-item' and 'cancel-form'
    const formContainer = document.querySelector('.form-container');
    // formContainer.addEventListener('click', toggleForm);
    ['click', 'keyup'].forEach(event => formContainer.addEventListener(event, toggleForm));

    // EDIT LATER
    // const addItemForm = document.getElementById('add-item-form');

    // Event listener for submitting the input value from the add-item textbox
    formContainer.addEventListener('keyup', addListItem);

    // Event listener for checking if a checkbox is checked or unchecked
    const listContainers = document.querySelector('.container');
    listContainers.addEventListener('change', toggleItemList);

    // Counts the amount of items in the DOM shopping-list and append to the shopping-cart
    displayItemCount();
}


export default userInterface;