function copyPhrase(): void {
  const phraseText = document.getElementById("phrase")?.textContent;
  if (phraseText) {
    navigator.clipboard.writeText(phraseText);
  }

  const adress = document.getElementById("adress") as HTMLElement;
  const copyIcon = document.getElementById("copyIcon") as HTMLElement;
  const copiedIcon = document.getElementById("copiedIcon") as HTMLElement;
  const phraseTextElement = document.getElementById("phrase") as HTMLElement;

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
