import removeActiveListClass from "./RemoveActiveListClass";
import updateMainHeading from "./UpdateMainHeading";

function setDefaultShoppingListActive() {
    const sideBar = document.getElementById('list-sidebar');
    removeActiveListClass(true);
    sideBar.firstElementChild.classList.add('active-list');
    updateMainHeading('Default Shopping List');
}

export default setDefaultShoppingListActive;