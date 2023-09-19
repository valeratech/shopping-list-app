import toggleForm from "./ToggleForm";
import {getItemValue} from "./AddItem";

function userInterface() {
    init();
}

function init() {
    // The event listener will listen for clicks on the nested button elements 'add-item' and 'cancel-form'
    const formContainer = document.querySelector('.form-container');
    formContainer.addEventListener('click', toggleForm);
    const addItemForm = document.getElementById('add-item-form');

    // Event listener for submitting the input value from the add-item textbox
    formContainer.addEventListener('keyup', getItemValue);
}


export default userInterface;