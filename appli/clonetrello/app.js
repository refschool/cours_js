

// State
let columns = [];
let stories = [];
let draggedCard = null;
let db;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeFirebase();
});

function initializeFirebase() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();

    // Load data and set up real-time listeners
    setupRealtimeListeners();
    setupEventListeners();
}

function setupRealtimeListeners() {
    // Listen to columns
    db.collection('columns').orderBy('order').onSnapshot((snapshot) => {
        columns = [];
        snapshot.forEach((doc) => {
            columns.push({ id: doc.id, ...doc.data() });
        });
        renderBoard();
    });

    // Listen to stories
    db.collection('stories').orderBy('order').onSnapshot((snapshot) => {
        stories = [];
        snapshot.forEach((doc) => {
            stories.push({ id: doc.id, ...doc.data() });
        });
        renderBoard();
    });
}

function setupEventListeners() {
    // Add column button
    document.getElementById('add-column-btn').addEventListener('click', openColumnModal);

    // Column form
    document.getElementById('column-form').addEventListener('submit', handleColumnSubmit);
    document.getElementById('cancel-column-btn').addEventListener('click', closeColumnModal);

    // Story form
    document.getElementById('story-form').addEventListener('submit', handleStorySubmit);
    document.getElementById('cancel-btn').addEventListener('click', closeStoryModal);

    // Close modals
    document.querySelectorAll('.close').forEach(close => {
        close.addEventListener('click', function () {
            this.closest('.modal').classList.remove('show');
        });
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });
}

// Firebase Functions
async function saveColumn(column) {
    if (column.id) {
        await db.collection('columns').doc(column.id).update(column);
    } else {
        await db.collection('columns').add(column);
    }
}

async function deleteColumn(columnId) {
    await db.collection('columns').doc(columnId).delete();

    // Delete all stories in this column
    const storiesSnapshot = await db.collection('stories').where('columnId', '==', columnId).get();
    const batch = db.batch();
    storiesSnapshot.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();
}

async function saveStory(story) {
    if (story.id) {
        const id = story.id;
        delete story.id;
        await db.collection('stories').doc(id).update(story);
    } else {
        await db.collection('stories').add(story);
    }
}

async function updateStoryPosition(storyId, newColumnId, newOrder) {
    await db.collection('stories').doc(storyId).update({
        columnId: newColumnId,
        order: newOrder
    });
}

// UI Functions
function renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';

    columns.forEach(column => {
        const columnEl = createColumnElement(column);
        board.appendChild(columnEl);
    });
}

function createColumnElement(column) {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';
    columnEl.dataset.columnId = column.id;

    const columnStories = stories.filter(s => s.columnId === column.id);

    columnEl.innerHTML = `
        <div class="column-header">
            <h3 class="column-title">${column.name}</h3>
            <button class="delete-column-btn" data-column-id="${column.id}">×</button>
        </div>
        <div class="cards-container" data-column-id="${column.id}"></div>
        <button class="add-card-btn" data-column-id="${column.id}">+ Add Card</button>
    `;

    const cardsContainer = columnEl.querySelector('.cards-container');
    columnStories.forEach(story => {
        const cardEl = createCardElement(story);
        cardsContainer.appendChild(cardEl);
    });

    // Event listeners
    columnEl.querySelector('.delete-column-btn').addEventListener('click', handleDeleteColumn);
    columnEl.querySelector('.add-card-btn').addEventListener('click', (e) => {
        openStoryModal(e.target.dataset.columnId);
    });

    // Drag and drop
    cardsContainer.addEventListener('dragover', handleDragOver);
    cardsContainer.addEventListener('drop', handleDrop);
    cardsContainer.addEventListener('dragleave', (e) => {
        if (e.target === cardsContainer) {
            cardsContainer.classList.remove('drag-over');
        }
    });

    return columnEl;
}

function createCardElement(story) {
    const cardEl = document.createElement('div');
    cardEl.className = 'card';
    cardEl.draggable = true;
    cardEl.dataset.storyId = story.id;

    const initials = story.assignee
        ? story.assignee.split(' ').map(n => n[0]).join('').toUpperCase()
        : '';

    cardEl.innerHTML = `
        <div class="card-title">${story.title}</div>
        ${story.description ? `<div class="card-description">${story.description}</div>` : ''}
        ${story.assignee ? `
            <div class="card-assignee">
                <div class="assignee-icon">${initials}</div>
                <span>${story.assignee}</span>
            </div>
        ` : ''}
    `;

    cardEl.addEventListener('dragstart', handleDragStart);
    cardEl.addEventListener('dragend', handleDragEnd);
    cardEl.addEventListener('click', () => openStoryModal(story.columnId, story));

    return cardEl;
}

// Modal Functions
function openColumnModal() {
    document.getElementById('column-modal').classList.add('show');
    document.getElementById('column-form').reset();
}

function closeColumnModal() {
    document.getElementById('column-modal').classList.remove('show');
}

function openStoryModal(columnId, story = null) {
    const modal = document.getElementById('story-modal');
    const form = document.getElementById('story-form');

    form.reset();
    document.getElementById('column-id').value = columnId;
    document.getElementById('story-id').value = ''; // Important: réinitialiser l'ID
    document.getElementById('modal-title').textContent = story ? 'Edit User Story' : 'Create User Story';

    if (story) {
        document.getElementById('story-id').value = story.id;
        document.getElementById('story-title').value = story.title;
        document.getElementById('story-description').value = story.description || '';
        document.getElementById('story-assignee').value = story.assignee || '';
    }

    modal.classList.add('show');
}

function closeStoryModal() {
    document.getElementById('story-modal').classList.remove('show');
}

// Event Handlers
async function handleColumnSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('column-name').value;
    const column = {
        name,
        order: columns.length
    };

    await saveColumn(column);
    closeColumnModal();
}

async function handleDeleteColumn(e) {
    const columnId = e.target.dataset.columnId;

    if (confirm('Delete this column and all its cards?')) {
        await deleteColumn(columnId);
    }
}

async function handleStorySubmit(e) {
    e.preventDefault();

    const storyId = document.getElementById('story-id').value;
    const columnId = document.getElementById('column-id').value;
    const title = document.getElementById('story-title').value;
    const description = document.getElementById('story-description').value;
    const assignee = document.getElementById('story-assignee').value;

    const story = {
        title,
        description,
        assignee,
        columnId
    };

    if (storyId) {
        story.id = storyId;
        story.order = stories.find(s => s.id === storyId).order;
    } else {
        story.order = stories.filter(s => s.columnId === columnId).length;
    }

    await saveStory(story);
    closeStoryModal();
}

// Drag and Drop Handlers
function handleDragStart(e) {
    draggedCard = e.target;
    e.target.classList.add('dragging');
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    document.querySelectorAll('.drag-over').forEach(el => {
        el.classList.remove('drag-over');
    });
    draggedCard = null;
}

function handleDragOver(e) {
    e.preventDefault();
    const container = e.currentTarget;
    container.classList.add('drag-over');

    const afterElement = getDragAfterElement(container, e.clientY);
    if (afterElement == null) {
        container.appendChild(draggedCard);
    } else {
        container.insertBefore(draggedCard, afterElement);
    }
}

async function handleDrop(e) {
    e.preventDefault();
    const container = e.currentTarget;
    container.classList.remove('drag-over');

    const newColumnId = container.dataset.columnId;
    const storyId = draggedCard.dataset.storyId;

    // Update order based on position in container
    const cards = Array.from(container.children);
    const newOrder = cards.indexOf(draggedCard);

    // Update in database
    await updateStoryPosition(storyId, newColumnId, newOrder);
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}