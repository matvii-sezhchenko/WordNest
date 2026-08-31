import { translateText } from './services/translate.js';

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "translate-and-save",
        title: "Перекласти та запам'ятати",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "translate-and-save") {
        translateText(info.selectionText).then(translatedText => {
            console.log("Selected text: " + info.selectionText);
            console.log("Translated text: " + translatedText);
        });
    }
});