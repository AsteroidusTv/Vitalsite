function copyPhrase() {
    
    var phraseText = document.getElementById("phrase").textContent;
    navigator.clipboard.writeText(phraseText);
    
    var adress = document.getElementById("adress");
    var copyIcon = document.getElementById("copyIcon");
    var copiedIcon = document.getElementById("copiedIcon");
    var phraseText = document.getElementById("phrase");
    
    copyIcon.style.display = "none";
    copiedIcon.style.display = "inline-block";
    adress.style.display = "none";
    phraseText.style.display = "block";

}