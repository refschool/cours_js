// select the item element
const item = document.querySelector('.item');
// attach the dragstart event handler
item.addEventListener('dragstart', dragStart);
// handle the dragstart
function dragStart(e) {
    console.log('drag starts...', e.target);
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        //cette ligne pose problème, au drop ça l'item disparait quand même
        // e.target.classList.add("hide")
    }, 1000)
}


const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    console.log(draggable)
    // add it to the drop target
    e.target.appendChild(draggable);
    // display the draggable element
    draggable.classList.remove('hide');
    console.log(draggable)
}