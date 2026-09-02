function removeButton() {
    const existingBtn = document.getElementById('translate-btn');
    if (existingBtn) existingBtn.remove();
}

function removeTooltip() {
    const existingTooltip = document.getElementById('translate-tooltip');
    if (existingTooltip) existingTooltip.remove();
}  

function showTooltip(rect, translationText) {
  removeButton();

  const tooltip = document.createElement('div');
  tooltip.id = 'translate-tooltip';
  tooltip.innerText = translationText;

  tooltip.style.position = 'fixed';
  tooltip.style.zIndex = '10000';
  tooltip.style.padding = '6px 12px';
  tooltip.style.background = '#ffffff';
  tooltip.style.color = '#393939';
  tooltip.style.border = '1px solid #2a648a';
  tooltip.style.borderRadius = '4px';
  tooltip.style.fontSize = '16px';
  tooltip.style.left = `${rect.left}px`;
  tooltip.style.top = `${rect.top - 30}px`;

  document.body.appendChild(tooltip);
}

function createButton(rect, selectionText) {
    removeTooltip();
    removeButton();

    const btn = document.createElement('button');
    btn.id = 'translate-btn';
    btn.innerText = '🌐';

    btn.style.position = 'fixed';
    btn.style.zIndex = '10000';
    btn.style.background = '#ffffff';
    btn.style.padding = '4px 8px';
    btn.style.border = '1px solid #2a648a';
    btn.style.borderRadius = '4px';
    btn.style.left = `${rect.left}px`;
    btn.style.top = `${rect.bottom + 5}px`;

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

document.addEventListener('mouseup', (event) =>{

    if (event.target.closest('#translate-btn')) {
        return;
    }

    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        createButton(rect, selectedText);
    }else{
        removeTooltip();
        removeButton();
    }
})