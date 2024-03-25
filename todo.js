document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-task').addEventListener('click', addTask);
    renderTasks();
});

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const tasks = getTasks();
    tasks.push({ id: Date.now(), content: newTaskInput.value, completed: false });
    saveTasks(tasks);
    newTaskInput.value = ''; // Clear input field
    renderTasks();
}

function toggleTaskCompletion(taskId) {
    const tasks = getTasks();
    const task = tasks.find(task => task.id === taskId);
    task.completed = !task.completed;
    saveTasks(tasks);
    renderTasks();
}

function deleteTask(taskId) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks(tasks);
    renderTasks();
}

function renderTasks() {
    const tasks = getTasks();
    const taskList = document.getElementById('todo-list');
    taskList.innerHTML = ''; // Clear current tasks
    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.content;
        taskElement.className = task.completed ? 'completed' : '';
        taskElement.addEventListener('click', () => toggleTaskCompletion(task.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent toggling completion when clicking delete
            deleteTask(task.id);
        });

        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
    });
}

function getTasks() {
    return TaskStorage.getTasks();
}

function saveTasks(tasks) {
    TaskStorage.saveTasks(tasks);
}