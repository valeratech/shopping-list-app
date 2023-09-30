function highlightActiveList(event) {
    const lists = document.querySelectorAll('.list-name');
    lists.forEach(list => {
        list.classList.remove('active-list');
    });
    return event.target.classList.add('active-list');
}

export default highlightActiveList;