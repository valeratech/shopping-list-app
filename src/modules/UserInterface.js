import toggleForm from "./ToggleForm";

function userInterface() {
    init();
}

function init() {
    // The event listener will listen for clicks on the nested button elements 'add-item' and 'cancel-form'
    const formContainer = document.querySelector('.form-container');
    formContainer.addEventListener('click', toggleForm);
    const addItemForm = document.getElementById('add-item-form');
}


export default userInterface;