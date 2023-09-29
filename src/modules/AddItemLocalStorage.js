function addItemLocalStorage() {
    const shoppingList = {
        "Shopping List": [
            {
                "item": "Oranges",
                "completed": false
            },
            {
                "item": "Soda",
                "completed": false
            },
            {
                "item": "Eggs",
                "completed": false
            },
            {
                "item": "Paper Towels",
                "completed": false
            }
        ]
    }
    const itemsFromStorage = localStorage.getItem('items');

    localStorage.setItem('shopping-list', JSON.stringify(shoppingList));
}

export default addItemLocalStorage;