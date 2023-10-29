function getActiveShoppingList() {
    // This is used to reference the JSON.parsed shopping list object from local storage
    const lists = document.querySelectorAll('.list-name');
    let activeList;
    lists.forEach(list => {
      if (list.classList.contains('active-list')) {
          activeList = list.firstElementChild.firstChild.textContent;
      }
    })
    return activeList;
}

export default getActiveShoppingList;