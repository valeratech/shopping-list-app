function removeActiveListClass(isListItem) {
    const lists = document.querySelectorAll('.list-name');
    lists.forEach(list => {
        if (isListItem) {
            list.classList.remove('active-list');
        }
    });
}

export default removeActiveListClass;