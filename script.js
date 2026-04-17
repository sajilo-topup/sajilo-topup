// script.js for To-Do List Application

// Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

// Save tasks to local storage
function saveTasks() {
    const tasks = Array.from(document.querySelectorAll('.task')).map(task => task.textContent);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task to the DOM
function addTaskToDOM(task) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.textContent = task;
    taskItem.classList.add('task');
    taskList.appendChild(taskItem);
}

// Add new task
document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
    if (task) {
        addTaskToDOM(task);
        saveTasks();
        taskInput.value = '';
    }
});

// Initial load of tasks
loadTasks();