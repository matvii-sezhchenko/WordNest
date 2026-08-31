chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "translate-and-save",
        title: "Перекласти та запам'ятати",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "translate-and-save") {
        console.log("Selected text: " + info.selectionText);
    }
});