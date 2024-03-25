class Storage {
    static saveItem(key, item) {
        localStorage.setItem(key, JSON.stringify(item));
    }

    static getItem(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    static deleteItem(key) {
        localStorage.removeItem(key);
    }
}

class TaskStorage {
    static getTasks() {
        return Storage.getItem('tasks');
    }

    static saveTasks(tasks) {
        Storage.saveItem('tasks', tasks);
    }
}

class NoteStorage {
    static getNotes() {
        return Storage.getItem('notes');
    }

    static saveNotes(notes) {
        Storage.saveItem('notes', notes);
    }
}
