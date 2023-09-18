function toggleForm(event) {
    event.preventDefault();
    if (event.target.id === 'add-item') {
        event.target.classList.toggle('inactive');
        event.target.nextElementSibling.classList.toggle('active');
        event.target.nextElementSibling.classList.toggle('inactive');
    } else if (event.target.id === 'add-item-form') {
        event.target.classList.toggle('inactive');
        event.target.nextElementSibling.classList.toggle('active');
        event.target.nextElementSibling.classList.toggle('inactive');
    }
}

export default toggleForm;