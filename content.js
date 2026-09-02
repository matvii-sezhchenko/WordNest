function removeButton() {
    const existingBtn = document.getElementById('translate-btn');
    if (existingBtn) existingBtn.remove();
}

function createButton(rect, selectionText) {
    removeButton();

    const btn = document.createElement('button');
    btn.id = 'translate-btn';
    btn.innerText = '🌐';

    btn.style.position = 'absolute';
    btn.style.zIndex = '10000';
    btn.style.left = `${rect.left + window.scrollX}px`;
    btn.style.top = `${rect.bottom + window.scrollY + 5}px`;

    btn.addEventListener('click', async (e) => {
        e.stopPropagation();
s
        const response = await chrome.runtime.sendMessage({
            action: 'translate',
            text: selectionText
        });

        showTooltip(rect, response.translation);
    });

    document.body.appendChild(btn);
    return btn;
}


document.addEventListener('mouseup', (event) =>{
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        createButton(rect);
    }else{
        return 0;
    }
})