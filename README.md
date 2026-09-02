# WordNest

WordNest is a lightweight Chrome extension for quick word lookup and translation. Select any text on a webpage, trigger a translation, and see the result instantly without leaving the page.

## Overview

This project was built as a simple browser utility for learning and memorizing vocabulary while reading English-language content. It uses the browser's content script API to detect text selection and then calls a translation service to return the translated result.

## Features

- Select any word or phrase on a webpage
- Show a floating translation button near the selection
- Translate text using the MyMemory translation API
- Display translation directly on the current page
- Add a browser context-menu action for text translation
- Works as a Manifest V3 Chrome extension

## Current Implementation

The extension currently supports:

- text selection detection via content scripts
- translation request from the page to the extension background script
- translation result displayed in a small tooltip near the selected text
- browser context menu entry for translation actions

## Tech Stack

- JavaScript
- Chrome Extension API
- Manifest V3
- MyMemory Translation API

## Usage

1. Open any webpage.
2. Highlight a word or phrase.
3. Click the floating translate button that appears.
4. The translation will be displayed near the selected text.
5. You can also use the context menu option when text is selected.

## Contact

For questions or suggestions, feel free to open an issue in the repository.

---

Built with JavaScript and Chrome Extension APIs.
