export async function translateText(text, targetLeng = "uk"){
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|${targetLeng}`);
    const data = await response.json();
    return data.responseData.translatedText;
}