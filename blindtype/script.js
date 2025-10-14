const paragraph = "Le soleil brille sur la mer bleue calme. Les mouettes volent haut dans le ciel clair.";
const textContainer = document.getElementById("text");
const input = document.getElementById("input");
const wpmDisplay = document.getElementById("wpm");
const keyboardContainer = document.getElementById("keyboard");

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
            if (["Backspace", "Enter", "Shift", "CapsLock", "Tab"].includes(key)) keyDiv.classList.add("wide");
            keyDiv.dataset.key = key.toLowerCase();
            rowDiv.appendChild(keyDiv);
        });
        keyboardContainer.appendChild(rowDiv);
    });
}
renderKeyboard();

/* ------------------- ÉVÉNEMENTS DE FRAPPE ------------------- */

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
        }

        currentWordIndex++;
        e.target.value = "";

        const elapsedMinutes = (new Date() - startTime) / 60000;
        const wpm = Math.round(typedWords / elapsedMinutes);
        wpmDisplay.textContent = isFinite(wpm) ? wpm : 0;

        if (currentWordIndex === words.length) {
            input.disabled = true;
            wpmDisplay.textContent += " ✅";
        }
        return;
    }

    // Vérification partielle
    if (currentWord.startsWith(typed)) {
        currentSpan.className = "word";
    } else {
        currentSpan.className = "word incorrect";
    }
});

/* ------------------- CLAVIER VISUEL ------------------- */

window.addEventListener("keydown", (e) => {
    let key = e.key.toLowerCase();

    // Gérer les touches spéciales
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
