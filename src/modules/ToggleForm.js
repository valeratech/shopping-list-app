function toggleForm(event) {
    event.preventDefault();
    if (event.target.id === 'add-item') {
        toggleActiveClass(event.target);
        toggleInactiveClass(event.target);
    } else if (event.target.id === 'cancel-from') {
        // event.target.classList.toggle('inactive');
        // event.target.nextElementSibling.classList.toggle('active');
        // event.target.nextElementSibling.classList.toggle('inactive');
    }
}

function toggleActiveClass(element) {
    element.nextElementSibling.classList.toggle('active');
}

function toggleInactiveClass(element) {
    element.classList.toggle('inactive');
    element.nextElementSibling.classList.toggle('inactive');
}


export default toggleForm;