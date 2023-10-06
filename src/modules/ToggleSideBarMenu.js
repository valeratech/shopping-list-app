function toggleSideBarMenu(event) {
    const listSidebar = document.getElementById('list-sidebar');
    if (event.target.checked) {
        listSidebar.classList.remove('hide');
    } else {
        listSidebar.classList.add('hide');
        listSidebar.style.transition = 'transition: all 5s';
    }
}

export default toggleSideBarMenu;