function deleteDataPromptDOM(displayValue, description) {
    const prompt = document.getElementById("prompt");
    prompt.style.display = displayValue;
    displayDataPromptInfo(description);
}

function displayDataPromptInfo(description) {
    const promptHeader = document.querySelector('.prompt-header');
    const promptDescription = document.querySelector('.prompt-description');
    promptHeader.textContent = 'WARNING!';
    promptDescription.textContent = `Are you sure you want to ${description}?`;
}

export default deleteDataPromptDOM;