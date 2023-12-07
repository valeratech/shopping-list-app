import toggleAddItemForm from "./ToggleAddItemForm";
import addItemDom from "./AddItemDOM";
import displayItemCount from "./DisplayItemCount";
import toggleListItemStatus from "./ToggleListItemStatus";
import {filterItems, clearFilter} from "../ItemFilter/FilterItems";
import toggleShoppingListForm from "./ToggleShoppingListForm";
import toggleSideBarMenu from "./ToggleSideBarMenu";
import addItemLocalStorage from "../LocalStorage/AddItemLocalStorage";
import displayListItems from "./DisplayListItems";
import toggleActiveShoppingList from "./ToggleActiveShoppingList";
import displayShoppingLists from "./DisplayShoppingLists";
import createDefaultShoppingList from "./CreateDefaultShoppingList";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";
import {openModal, closeModal} from "./ToggleShoppingListMenuModal";
import deleteDataLocalStorage from "../LocalStorage/DeleteDataLocalStorage";
import getActiveShoppingList from "./GetActiveShoppingList"

function userInterface() {
    init();
}

function init() {

    const formContainer = document.querySelector('.form-container');
    formContainer.addEventListener('click', toggleAddItemForm);
    formContainer.addEventListener('keyup', addItemDom);

    const listContainers = document.querySelector('.lists-container');
    listContainers.addEventListener('change', toggleListItemStatus);

    const filter = document.getElementById('filter');
    filter.addEventListener('input', filterItems);

    const clearFilterBtn = document.querySelector('.clear-filter');
    clearFilterBtn.addEventListener('click', clearFilter);

    const addShoppingListBtn = document.getElementById('add-list-container');
    addShoppingListBtn.addEventListener('click', toggleShoppingListForm);

    const menu = document.getElementById('menu-list');
    menu.addEventListener('change', toggleSideBarMenu);

    const shoppingLists = document.getElementById('list-sidebar');
    shoppingLists.addEventListener('click', (e) => {
        if (e.target.classList.contains('list-name') ||
            e.target.parentElement.classList.contains('list-name')) {
            toggleActiveShoppingList(e);
        }

        if (e.target.classList.contains('fa-ellipsis-vertical')) {
            toggleActiveShoppingList(e);
            openModal(e);
        } else if (e.target.parentElement.classList.contains('fa-ellipsis-vertical')) {
            toggleActiveShoppingList(e);
            openModal(e);
        }
    });
    
    const btnCloseModal = document.querySelector('.close-modal');
    btnCloseModal.addEventListener('click', closeModal);

    const overlay = document.querySelector('.modal-overlay');
    overlay.addEventListener('click', closeModal);

    const modalMenuItems = document.querySelectorAll('.modal-menu-items');
    const popup = document.getElementById("prompt");

    modalMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const menuItem = e.target.textContent;
            switch (menuItem) {
                case 'Delete All List Items':
                    console.log('all');
                    deleteDataLocalStorage('all', getActiveShoppingList());
                    break;
                case 'Delete All Completed List Items':
                    console.log('completed');
                    // deleteDataLocalStorage('all', getActiveShoppingList());
                    break;
                case 'Delete Shopping List':
                    popup.style.display = 'block';
                    deleteShoppingListDOM();
                    break;
            }
        })
    })

    const closeBtn = document.querySelector(".cancel-prompt");
    closeBtn.addEventListener('click', ()=>{
        popup.style.display = 'none';
    });

    // Initialize all default settings and display the correct shopping list info on webpage load.
    createDefaultShoppingList();
    displayShoppingLists();
    displayListItems('Default Shopping List');
    displayZeroItemsMessage();
    displayItemCount();
}


export default userInterface;