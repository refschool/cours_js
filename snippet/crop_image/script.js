// éléments DOM
const upload = document.getElementById("upload");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const cropBtn = document.getElementById("cropBtn");
const resultCanvas = document.getElementById("result"); // <--- bien déclaré
const resultCtx = resultCanvas.getContext("2d");

const downloadBtn = document.getElementById("downloadBtn");

// état
let image = null;
let startX = 0, startY = 0;
let rectX = 0, rectY = 0, rectW = 0, rectH = 0;
let isDrawing = false;

// upload de l'image
upload.addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        image = new Image();
        image.onload = () => {
            // dimensionner le canvas à la taille de l'image (pixel)
            canvas.width = image.width;
            canvas.height = image.height;

            // réinitialiser sélection
            rectX = rectY = rectW = rectH = 0;

            draw();
        };
        image.src = ev.target.result;
    };
    reader.readAsDataURL(file);
});

// gestion des événements de pointer (mouse/touch unified)
canvas.addEventListener("pointerdown", (e) => {
    if (!image) return;
    const r = canvas.getBoundingClientRect();
    const scaleX = canvas.width / r.width;
    const scaleY = canvas.height / r.height;

    startX = (e.clientX - r.left) * scaleX;
    startY = (e.clientY - r.top) * scaleY;
    isDrawing = true;
});

canvas.addEventListener("pointermove", (e) => {
    if (!isDrawing) return;
    const r = canvas.getBoundingClientRect();
    const scaleX = canvas.width / r.width;
    const scaleY = canvas.height / r.height;

    const x = (e.clientX - r.left) * scaleX;
    const y = (e.clientY - r.top) * scaleY;

    rectX = Math.min(startX, x);
    rectY = Math.min(startY, y);
    rectW = Math.abs(x - startX);
    rectH = Math.abs(y - startY);

    draw();
});

canvas.addEventListener("pointerup", () => {
    isDrawing = false;
});

canvas.addEventListener("pointerleave", () => {
    isDrawing = false;
});

// dessin principal : image, couche sombre, et zone claire/contour
function draw() {
    if (!image) return;

    // image entière
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // couche sombre par-dessus
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // si sélection : dessiner la zone claire en copiant la portion d'origine
    if (rectW > 0 && rectH > 0) {
        // on restaure la portion de l'image dans le rectangle (clair)
        ctx.drawImage(
            image,
            rectX, rectY, rectW, rectH, // source
            rectX, rectY, rectW, rectH  // destination (même place)
        );

        // contour
        ctx.strokeStyle = "red";
        ctx.lineWidth = 2;
        ctx.strokeRect(rectX, rectY, rectW, rectH);
    }
}

// bouton "Cropper l'image" : affiche le crop dans resultCanvas
cropBtn.addEventListener("click", () => {
    if (!image || rectW <= 0 || rectH <= 0) return;

    resultCanvas.width = rectW;
    resultCanvas.height = rectH;

    resultCtx.clearRect(0, 0, resultCanvas.width, resultCanvas.height);

    resultCtx.drawImage(
        image,
        rectX, rectY, rectW, rectH, // source
        0, 0, rectW, rectH          // destination
    );
});

// bouton "Télécharger" : sauvegarde le contenu de resultCanvas en PNG
downloadBtn.addEventListener("click", () => {
    if (!resultCanvas || resultCanvas.width === 0 || resultCanvas.height === 0) return;

    const link = document.createElement("a");
    link.download = "crop.png";
    link.href = resultCanvas.toDataURL("image/png");
    link.click();
});
