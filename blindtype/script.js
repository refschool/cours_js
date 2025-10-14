const paragraph = "Le soleil brille sur la mer bleue calme. Les mouettes volent haut dans le ciel clair.";
const textContainer = document.getElementById("text");
const input = document.getElementById("input");
const wpmDisplay = document.getElementById("wpm");

let words = paragraph.split(" ");
let currentWordIndex = 0;
let startTime = null;
let typedWords = 0;

function renderText() {
    textContainer.innerHTML = words
        .map((word, index) => `<span class="word" id="word-${index}">${word}</span>`)
        .join(" ");
}
renderText();

input.addEventListener("input", (e) => {
    const typed = e.target.value.trim();

    if (!startTime) startTime = new Date(); // démarrage chrono au premier mot

    const currentWord = words[currentWordIndex];
    const currentSpan = document.getElementById(`word-${currentWordIndex}`);

    // Si l'apprenant appuie sur espace → mot terminé
    if (e.data === " " || typed.endsWith(" ")) {
        if (typed === currentWord) {
            currentSpan.className = "word correct";
            typedWords++;
        } else {
            currentSpan.className = "word incorrect";
        }

        currentWordIndex++;
        e.target.value = "";

        // Calcul du WPM
        const elapsedMinutes = (new Date() - startTime) / 60000;
        const wpm = Math.round(typedWords / elapsedMinutes);
        wpmDisplay.textContent = isFinite(wpm) ? wpm : 0;

        // Si tout est tapé
        if (currentWordIndex === words.length) {
            input.disabled = true;
            wpmDisplay.textContent += " ✅";
        }

        return;
    }

    // Pendant la frappe → vérifie si le mot partiellement correspond
    if (currentWord.startsWith(typed)) {
        currentSpan.className = "word";
    } else {
        currentSpan.className = "word incorrect";
    }
});
