/* --------------------- PHRASES DE LA FONTAINE --------------------- */
const sentences0 = [
    "Rien ne sert de courir il faut partir à point.",
    "La raison du plus fort est toujours la meilleure.",
    "On a souvent besoin d'un plus petit que soi.",
    "Le corbeau et le renard ne sont pas amis.",
    "Selon que vous serez puissant ou misérable les jugements de cour vous rendront blanc ou noir.",
    "Patience et longueur de temps font plus que force ni que rage.",
    "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.",
    "Aide toi le ciel t'aidera.",
    "Tout flatteur vit aux dépens de celui qui l'écoute.",
    "Rien ne pèse tant qu'un secret."
];

const sentences = sentences0.slice(0, 2)
let currentSentenceIndex = 0;
let words = [];
let currentWordIndex = 0;
let typedWords = 0;
let startTime = null;
let totalMistakes = 0;
let wrongWords = [];

const textContainer = document.getElementById("text");
const input = document.getElementById("input");
const wpmDisplay = document.getElementById("wpm");
const keyboardContainer = document.getElementById("keyboard");
const summaryDiv = document.getElementById("summary");

/* --------------------- FONCTIONS PRINCIPALES --------------------- */

function renderSentence() {
    const sentence = sentences[currentSentenceIndex];
    words = sentence.split(" ");
    currentWordIndex = 0;
    input.value = "";
    textContainer.classList.remove("fade-out");
    textContainer.classList.add("fade-in");
    textContainer.innerHTML = words
        .map((word, i) => `<span class="word" id="word-${i}">${word}</span>`)
        .join(" ");
}

function showSummary() {
    input.disabled = true;
    const elapsedMinutes = (new Date() - startTime) / 60000;
    const wpm = Math.round(typedWords / elapsedMinutes);

    summaryDiv.innerHTML = `
    <h2>🏁 Entraînement terminé !</h2>
    <p><strong>Vitesse moyenne :</strong> ${wpm} mots/min</p>
    <p><strong>Total de mots :</strong> ${typedWords}</p>
    <p><strong>Fautes :</strong> ${totalMistakes}</p>
    ${wrongWords.length > 0
            ? `<h3>Mots incorrects :</h3><div>${wrongWords
                .map(w => `<span class="error-word">${w}</span>`)
                .join("")}</div>`
            : "<p>👏 Aucune erreur ! Bravo !</p>"} 
  `;
}

function nextSentence() {
    textContainer.classList.remove("fade-in");
    textContainer.classList.add("fade-out");
    setTimeout(() => {
        currentSentenceIndex++;
        if (currentSentenceIndex >= sentences.length) {
            textContainer.innerHTML = "";
            showSummary();
            return;
        }
        renderSentence();
    }, 600);
}

/* --------------------- CLAVIER FRANÇAIS --------------------- */
const keyLayout = [
    ["²", "&", "é", "\"", "'", "(", "-", "è", "_", "ç", "à", ")", "=", "Backspace"],
    ["Tab", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "Enter"],
    ["CapsLock", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*"],
    ["Shift", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!", "Shift"],
    ["Ctrl", "Win", "Alt", "Space", "AltGr", "Menu", "Ctrl"]
];

function renderKeyboard() {
    keyboardContainer.innerHTML = "";
    keyLayout.forEach(row => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "key-row";
        row.forEach(key => {
            const keyDiv = document.createElement("div");
            keyDiv.className = "key";
            keyDiv.textContent = key;
            if (key === "Space") keyDiv.classList.add("extra-wide");
            if (["Backspace", "Enter", "Shift", "CapsLock", "Tab"].includes(key))
                keyDiv.classList.add("wide");
            keyDiv.dataset.key = key.toLowerCase();
            rowDiv.appendChild(keyDiv);
        });
        keyboardContainer.appendChild(rowDiv);
    });
}
renderKeyboard();

/* --------------------- FRAPPE DE TEXTE --------------------- */
input.addEventListener("input", (e) => {
    const typed = e.target.value.trim();

    if (!startTime) startTime = new Date();

    const currentWord = words[currentWordIndex];
    const currentSpan = document.getElementById(`word-${currentWordIndex}`);

    // Fin d'un mot
    if (e.data === " " || typed.endsWith(" ")) {
        if (typed === currentWord) {
            currentSpan.className = "word correct";
            typedWords++;
        } else {
            currentSpan.className = "word incorrect";
            totalMistakes++;
            wrongWords.push(currentWord);
        }

        currentWordIndex++;
        e.target.value = "";

        const elapsedMinutes = (new Date() - startTime) / 60000;
        const wpm = Math.round(typedWords / elapsedMinutes);
        wpmDisplay.textContent = isFinite(wpm) ? wpm : 0;

        if (currentWordIndex === words.length) nextSentence();
        return;
    }

    // Vérification partielle
    if (currentWord && currentWord.startsWith(typed)) {
        currentSpan.className = "word";
    } else {
        currentSpan.className = "word incorrect";
    }
});

/* --------------------- CLAVIER ANIMÉ --------------------- */
window.addEventListener("keydown", (e) => {
    let key = e.key.toLowerCase();
    if (key === " ") key = "space";
    if (key === "control") key = "ctrl";
    if (key === "meta") key = "win";
    if (key === "altgraph") key = "altgr";
    const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
    if (keyDiv) keyDiv.classList.add("active");
});

window.addEventListener("keyup", (e) => {
    let key = e.key.toLowerCase();
    if (key === " ") key = "space";
    if (key === "control") key = "ctrl";
    if (key === "meta") key = "win";
    if (key === "altgraph") key = "altgr";
    const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
    if (keyDiv) keyDiv.classList.remove("active");
});

/* --------------------- INITIALISATION --------------------- */
renderSentence();
