document.addEventListener('mauseup', (event) =>{
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
    }else{
        return 0;
    }
})