document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-note').addEventListener('click', addNote);
    renderNotes();
});

function addNote() {
    const newNoteInput = document.getElementById('new-note');
    const notes = getNotes();
    notes.push({ id: Date.now(), content: newNoteInput.value });
    saveNotes(notes);
    newNoteInput.value = ''; // Clear textarea
    renderNotes();
}

function deleteNote(noteId) {
    let notes = getNotes();
    notes = notes.filter(note => note.id !== noteId);
    saveNotes(notes);
    renderNotes();
}

function renderNotes() {
    const notes = getNotes();
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = ''; // Clear current notes
    notes.forEach(note => {
        const noteElement = document.createElement('li');
        noteElement.textContent = note.content;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteNote(note.id);
        });

        noteElement.appendChild(deleteButton);
        notesList.appendChild(noteElement);
    });
}

function getNotes() {
    return NoteStorage.getNotes();
}

function saveNotes(notes) {
    NoteStorage.saveNotes(notes);
}