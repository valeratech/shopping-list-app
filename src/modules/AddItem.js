function getItemValue(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log(event.target.value);
    }
}

export {getItemValue};