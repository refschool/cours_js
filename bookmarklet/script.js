const selectionBox = document.getElementById("selection");
let startX, startY, isSelecting = false;

document.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return; // clic gauche uniquement
    isSelecting = true;
    startX = e.pageX;
    startY = e.pageY;

    selectionBox.style.position = "absolute";
    selectionBox.style.border = "1px dashed black";
    selectionBox.style.background = "rgba(0,0,255,0.1)";
    selectionBox.style.left = `${startX}px`;
    selectionBox.style.top = `${startY}px`;
    selectionBox.style.width = "0px";
    selectionBox.style.height = "0px";
    selectionBox.style.display = "block";
    selectionBox.style.zIndex = 9999;
});

document.addEventListener("mousemove", (e) => {
    if (!isSelecting) return;
    const x = Math.min(e.pageX, startX);
    const y = Math.min(e.pageY, startY);
    const w = Math.abs(e.pageX - startX);
    const h = Math.abs(e.pageY - startY);

    selectionBox.style.left = `${x}px`;
    selectionBox.style.top = `${y}px`;
    selectionBox.style.width = `${w}px`;
    selectionBox.style.height = `${h}px`;
});

document.addEventListener("mouseup", () => {
    if (!isSelecting) return;
    isSelecting = false;

    const rect = selectionBox.getBoundingClientRect();
    selectionBox.style.display = "none";

    document.querySelectorAll("input[type=checkbox]").forEach(cb => {
        const box = cb.getBoundingClientRect();
        if (
            box.left >= rect.left &&
            box.right <= rect.right &&
            box.top >= rect.top &&
            box.bottom <= rect.bottom
        ) {
            cb.checked = !cb.checked; // coche si complètement inclus
        }
    });
});