import getActiveShoppingList from "../GetActiveShoppingList";

const modal = document.querySelector('.modal-container');
const overlay = document.querySelector('.modal-overlay');

function openModal(e) {
    console.log('hi')
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

function closeModal(e) {
    console.log('close');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

export { openModal, closeModal };