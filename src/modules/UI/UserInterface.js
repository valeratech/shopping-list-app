import toggleAddItemForm from "./ToggleAddItemForm";
import addItemDom from "./AddItemDOM";
import displayItemCount from "./DisplayItemCount";
import toggleListItemStatus from "./ToggleListItemStatus";
import {filterItems, clearFilter} from "../ItemFilter/FilterItems";
import toggleShoppingListForm from "./ToggleShoppingListForm";
import toggleSideBarMenu from "./ToggleSideBarMenu";
import displayListItems from "./DisplayListItems";
import toggleActiveShoppingList from "./ToggleActiveShoppingList";
import displayShoppingLists from "./DisplayShoppingLists";
import createDefaultShoppingList from "./CreateDefaultShoppingList";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";
import {openModal, closeModal} from "./ToggleShoppingListMenuModal";
import deleteDataPromptDOM from "./DeleteDataPromptDOM";
import getActiveShoppingList from "./GetActiveShoppingList";
import deleteDataConfirmationDOM from "./DeleteDataConfirmationDOM";

function userInterface() {
    init();
}

function init() {

    const createState = () => {
        const state = {
            value: ''
        }

        const setState = (newValue) => {
            state.value = newValue;
        };

        const getState = () => state.value;

        return {setState, getState};
    };


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

    const listState = createState();
    const typeState = createState();

    const btnCloseModal = document.querySelector('.close-modal');
    btnCloseModal.addEventListener('click', closeModal);

    const overlay = document.querySelector('.modal-overlay');
    overlay.addEventListener('click', closeModal);

    const modalMenuItems = document.querySelectorAll('.modal-menu-items');

    modalMenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const menuItem = e.target.textContent;
            switch (menuItem) {
                case 'Clear All List Items':
                    deleteDataPromptDOM('block', `clear ALL "${getActiveShoppingList()}" list items`);
                    listState.setState(getActiveShoppingList());
                    typeState.setState('all');
                    break;
                case 'Clear All Completed List Items':
                    listState.setState(getActiveShoppingList());
                    typeState.setState('completed');
                    deleteDataPromptDOM('block', `clear the COMPLETED "${getActiveShoppingList()}" list items`);
                    break;
                case 'Delete Shopping List':
                    listState.setState(getActiveShoppingList());
                    typeState.setState('list');
                    deleteDataPromptDOM('block', `DELETE the "${getActiveShoppingList()}" shopping list`);
                    break;
            }
        })
    })

    const closeBtn = document.querySelector(".cancel-prompt");
    closeBtn.addEventListener('click', () => {
        deleteDataPromptDOM('none')
    });

    const confirmBtn = document.querySelector(".confirm-prompt");
    confirmBtn.addEventListener('click', () => {
        const deleteType = typeState.getState();
        const shoppingList = listState.getState();
        console.log(shoppingList, deleteType)
        deleteDataConfirmationDOM(deleteType, shoppingList);
    });

    // Initialize all default settings and display the correct shopping list info on webpage load.
    createDefaultShoppingList();
    displayShoppingLists();
    displayListItems('Default Shopping List');
    displayZeroItemsMessage();
    displayItemCount();
}


export default userInterface;