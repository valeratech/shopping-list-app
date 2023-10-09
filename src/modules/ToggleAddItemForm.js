import clearFormValue from "./ClearFormValue";
import toggleAddItemActiveClassname from './ToggleAddItemActiveClassname';


function toggleAddItemForm(event) {
    event.preventDefault();

    // Target the button container and the nested font-awesome element to toggle the active class on the correct element
    if (event.target.classList.contains('add-item')) {
        toggleAddItemActiveClassname(
            event.target,
            event.target.nextElementSibling
        );
    } else if (event.target.id === 'cancel-form') {
        console.log(event.target.parentElement.parentElement, event.target.parentElement.parentElement.previousElementSibling)
        toggleAddItemActiveClassname(
            event.target.parentElement.parentElement,
            event.target.parentElement.parentElement.previousElementSibling
        );
        clearFormValue(event.target.previousElementSibling);
    }
}

export default toggleAddItemForm;