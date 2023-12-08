function deleteDataPromptDOM(displayValue, title, message) {
    console.log('cancel')
    const prompt = document.getElementById("prompt");
    prompt.style.display = displayValue;
}

export default deleteDataPromptDOM;