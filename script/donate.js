function copyPhrase() {
    var _a;
    var phraseText = (_a = document.getElementById("phrase")) === null || _a === void 0 ? void 0 : _a.textContent;
    if (phraseText) {
        navigator.clipboard.writeText(phraseText);
    }
    var adress = document.getElementById("adress");
    var copyIcon = document.getElementById("copyIcon");
    var copiedIcon = document.getElementById("copiedIcon");
    var phraseTextElement = document.getElementById("phrase");
    if (copyIcon) {
        copyIcon.style.display = "none";
    }
    if (copiedIcon) {
        copiedIcon.style.display = "inline-block";
    }
    if (adress) {
        adress.style.display = "none";
    }
    if (phraseTextElement) {
        phraseTextElement.style.display = "block";
    }
}
