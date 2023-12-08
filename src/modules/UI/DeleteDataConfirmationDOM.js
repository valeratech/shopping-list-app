import deleteDataLocalStorage from "../LocalStorage/DeleteDataLocalStorage";
import deleteDataPromptDOM from "./DeleteDataPromptDOM";
import { closeModal} from "./ToggleShoppingListMenuModal";

function deleteDataConfirmationDOM(type, shoppingList) {
    deleteDataLocalStorage(type, shoppingList);
    deleteDataPromptDOM('none');
    closeModal();
}

export default deleteDataConfirmationDOM;