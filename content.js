document.addEventListener('mouseup', (event) =>{
    const selectedText = window.getSelection().toString().trim();

    if (selectedText.length > 0) {
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        const existingBtn = document.getElementById('translate-btn');
        if (existingBtn) existingBtn.remove();

        const btn = document.createElement('button');
        btn.id = 'translate-btn';
        btn.innerText = '🌐';

        btn.style.position = 'absolute';
        btn.style.zIndex = '10000';
        btn.style.left = `${rect.left + window.scrollX}px`;
        btn.style.top = `${rect.bottom + window.scrollY + 5}px`;

        document.body.appendChild(btn);
    }else{
        return 0;
    }
})