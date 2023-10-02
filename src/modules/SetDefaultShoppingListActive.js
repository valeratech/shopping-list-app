import removeActiveListClass from "./RemoveActiveListClass";

function setDefaultShoppingListActive() {
    const sideBar = document.getElementById('list-sidebar');
    removeActiveListClass(true);
    sideBar.firstElementChild.classList.add('active-list');
}

export default setDefaultShoppingListActive;