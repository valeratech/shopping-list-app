import {formatDistanceToNow, parseISO} from "date-fns";

function updateDOMItemDate(event) {
    const dateContainer = event.target.parentElement.nextElementSibling.children.item(1);
    const date = new Date();
    const parsedDate = parseISO(date);
    console.log(dateContainer.textContent)
    dateContainer.textContent = formatDistanceToNow(date,{includeSeconds: true})
    return dateContainer;
}

export default updateDOMItemDate;

