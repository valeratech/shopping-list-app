import toggleForm from "./ToggleForm";

function userInterface() {
    init();
}

function init() {
    const addItemButton = document.getElementById('add-item')
    addItemButton.addEventListener('click', toggleForm);
    const addItemForm = document.getElementById('add-item-form');
}


export default userInterface;