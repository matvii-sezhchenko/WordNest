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

        const response = await chrome.runtime.sendMessage({
            action: 'translate',
            text: selectionText
        });

        showTooltip(rect, response.translation);
    });

    document.body.appendChild(btn);
    return btn;
}

function showTooltip(rect, translationText) {
  removeButton();

  const tooltip = document.createElement('div');
  tooltip.id = 'translate-tooltip';
  tooltip.innerText = translationText;

  tooltip.style.position = 'absolute';
  tooltip.style.zIndex = '10000';
  tooltip.style.padding = '4px 8px';
  tooltip.style.background = '#333';
  tooltip.style.color = '#fff';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '14px';
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.style.top = `${rect.top + window.scrollY - 30}px`;

  document.body.appendChild(tooltip);
}

document.addEventListener('mouseup', (event) =>{
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        createButton(rect, selectedText);
    }else{
        return 0;
    }
})