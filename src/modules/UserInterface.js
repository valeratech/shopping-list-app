import toggleForm from "./ToggleForm";
import addListItem from "./AddItem";
import displayItemCount from "./DisplayItemCount";

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

    // Counts the amount of items in the DOM shopping-list and append to the shopping-cart
    displayItemCount();
}


export default userInterface;