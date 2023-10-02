import displayItemCount from "./DisplayItemCount";

function toggleItemList(event) {
    console.log('toggle')
    const shoppingContainer = document.querySelector('.sl-list--container');
    const completedContainer = document.querySelector('.cl-list--container');

    const listItem = event.target.parentElement.parentElement

   if (event.target.checked) {
       toggleClassName(listItem, 'completed-list--item', 'shopping-list--item');
       completedContainer.insertBefore(listItem, completedContainer.firstChild);
   } else {
       toggleClassName(listItem, 'shopping-list--item', 'completed-list--item');
       shoppingContainer.appendChild(listItem);
   }
    displayItemCount();
}

function toggleClassName(item, add, remove) {
    item.classList.remove(remove);
    item.classList.add(add);
}



export default toggleItemList;