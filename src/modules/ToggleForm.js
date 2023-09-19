function toggleForm(event) {
    event.preventDefault();
    if (event.target.classList.contains('add-item')) {
        toggleActiveClass(event.target);
        toggleActiveClass(event.target.nextElementSibling);
    } else if (event.target.id === 'cancel-form') {
        toggleActiveClass(event.target.parentElement.parentElement);
        toggleActiveClass(event.target.parentElement.parentElement.previousElementSibling);
        clearFormValue(event.target.previousElementSibling);
    }
}

function toggleActiveClass(element) {
    element.classList.toggle('active');
}

function clearFormValue(element) {
    element.value = '';
}

export default toggleForm;