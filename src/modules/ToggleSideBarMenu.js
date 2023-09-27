function toggleSideBarMenu(event) {
    const listSidebar = document.getElementById('list-sidebar');
    if (event.target.checked) {
        listSidebar.classList.remove('hide');
    } else {
        listSidebar.classList.add('hide');
    }
}

export default toggleSideBarMenu;