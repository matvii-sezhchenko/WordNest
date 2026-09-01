import { translateText } from './services/translate.js';

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "translate-and-save",
        title: "Перекласти та запам'ятати",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async function(info, tab) {
    if (info.menuItemId === "translate-and-save") {
        try {
            const translatedText = await translateText(info.selectionText);
            console.log("Selected text: " + info.selectionText);
            console.log("Translated text: " + translatedText);
        } catch (error) {
            console.error("Translation failed:", error);
        }
    }
});