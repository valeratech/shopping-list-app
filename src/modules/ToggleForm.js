function toggleForm(event) {
    event.preventDefault();
    if (event.target.id === 'add-item') {
        toggleActiveClass(event.target.nextElementSibling);
        toggleInactiveClass(event.target.nextElementSibling);
        toggleInactiveClass(event.target);
    } else if (event.target.id === 'cancel-form') {
        toggleInactiveClass(event.target.parentElement.parentElement);
        toggleInactiveClass(event.target.parentElement.parentElement.previousElementSibling);
        toggleActiveClass(event.target.parentElement.parentElement.previousElementSibling);
        clearFormValue(event.target.previousElementSibling);
    }
}

function toggleActiveClass(element) {
    element.classList.toggle('active');
}

function toggleInactiveClass(element) {
    element.classList.toggle('inactive');
}

function clearFormValue(element) {
    element.value = '';
}


export default toggleForm;