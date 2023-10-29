import getActiveShoppingList from "../GetActiveShoppingList";

const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.modal-overlay');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

export { openModal, closeModal };