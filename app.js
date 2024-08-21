function encrypt() {
    const inputText = document.getElementById("inputText").value;
    const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    updateOutput(encryptedText);
}

function decrypt() {
    const inputText = document.getElementById("inputText").value;
    const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    updateOutput(decryptedText);
}

function updateOutput(text) {
    document.getElementById("outputText").innerHTML = text;

    const lockIcon = document.getElementById("lockIcon");
    lockIcon.classList.add("open");
    lockIcon.classList.remove('fa-lock');
    lockIcon.classList.add('fa-unlock');
}

function copyToClipboard() {
    const outputText = document.getElementById("outputText").innerHTML;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

function clearText() {
    document.getElementById("inputText").value = "";
    document.getElementById("outputText").innerHTML = "";

    const lockIcon = document.getElementById("lockIcon");
    lockIcon.classList.remove("open");
    lockIcon.classList.remove('fa-unlock');
    lockIcon.classList.add('fa-lock');
}
