import toggleAddItemForm from "./ToggleAddItemForm";
import addListItem from "./AddItemDOM";
import displayItemCount from "./DisplayItemCount";
import toggleItemList from "./ToggleItemList";
import {filterItems, clearFilter} from "../ItemFilter/FilterItems";
import toggleShoppingListInput from "./ToggleShoppingListInput";
import toggleSideBarMenu from "./ToggleSideBarMenu";
import addItemLocalStorage from "../LocalStorage/AddItemLocalStorage";
import displayListItems from "./DisplayListItems";
import toggleActiveShoppingList from "./ToggleActiveShoppingList";
import displayShoppingLists from "./DisplayShoppingLists";
import createDefaultShoppingList from "./CreateDefaultShoppingList";
import displayZeroItemsMessage from "./DisplayZeroItemsMessage";

function userInterface() {
    init();
}

function init() {

    const formContainer = document.querySelector('.form-container');
    formContainer.addEventListener('click', toggleAddItemForm);
    formContainer.addEventListener('keyup', addListItem);

    const listContainers = document.querySelector('.lists-container');
    listContainers.addEventListener('change', toggleItemList);

    const filter = document.getElementById('filter');
    filter.addEventListener('input', filterItems);

    const clearFilterBtn = document.querySelector('.clear-filter');
    clearFilterBtn.addEventListener('click', clearFilter);

    const addShoppingListBtn = document.getElementById('add-list-container');
    addShoppingListBtn.addEventListener('click', toggleShoppingListInput);

    const menu = document.getElementById('menu-list');
    menu.addEventListener('change', toggleSideBarMenu);

    const shoppingLists = document.getElementById('list-sidebar');
    shoppingLists.addEventListener('click', toggleActiveShoppingList);

    createDefaultShoppingList();
    displayShoppingLists();
    displayListItems('Default Shopping List');
    displayZeroItemsMessage();
    displayItemCount();
}


export default userInterface;