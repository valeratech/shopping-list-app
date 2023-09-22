function toggleItemList(event) {
    const shoppingContainer = document.querySelector('.sl-list--container');
    const completedContainer = document.querySelector('.cl-list--container');

   if (event.target.checked) {
       completedContainer.insertBefore(event.target.parentElement.parentElement, completedContainer.firstChild);
   } else {
       shoppingContainer.appendChild(event.target.parentElement.parentElement);
   }

}

export default toggleItemList;