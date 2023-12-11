import getActiveShoppingList from "./GetActiveShoppingList";

function openModal(e) {
    const menuModal = document.querySelector('.modal-menu-container');
    console.log(e.target.parentElement.innerText);
    if (getActiveShoppingList() === 'Default Shopping List') {
        menuModal.lastElementChild.style.display = 'none'
    } else {
        menuModal.lastElementChild.style.display = 'block';
    }
    toggleModal('open');
};

function closeModal() {
    toggleModal('close');
};

function toggleModal(toggle) {
    const modal = document.querySelector('.modal-container');
    const overlay = document.querySelector('.modal-overlay');
    if (toggle === 'open') {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    } else {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    // Update Modal heading with active shopping list
    modal.children[1].textContent = getActiveShoppingList();
};

export { openModal, closeModal };