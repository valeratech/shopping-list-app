function getActiveShoppingList() {
    const lists = document.querySelectorAll('.list-name');
    let activeList;
    lists.forEach(list => {
      if (list.classList.contains('active-list')) {
          activeList = list.lastElementChild.firstChild.textContent;
      }
    })
    return activeList;
}

export default getActiveShoppingList;