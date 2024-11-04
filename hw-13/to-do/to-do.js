let taskInput = document.getElementById('task-input');
let addBtn = document.getElementById('add-btn');
let taskList = document.querySelector('.task-list');
let todoItems = JSON.parse(localStorage.getItem('todoItems')) || []; // Load tasks from localStorage or initialize as empty array

// Function to render tasks from the todoItems array
function renderTasks() {
    taskList.innerHTML = ''; // Clear current list
    todoItems.forEach((taskValue) => {
        let taskItem = createTaskElement(taskValue);
        taskList.appendChild(taskItem);
    });
}

// Array of Bootstrap color classes
const bootstrapColors = [
    'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'
];

// Function to get a random Bootstrap color
function getRandomBootstrapColor() {
    const randomIndex = Math.floor(Math.random() * bootstrapColors.length);
    return bootstrapColors[randomIndex];
}

// Function to create a list item element for a task with a random Bootstrap style
function createTaskElement(taskValue) {
    let type = getRandomBootstrapColor(); // Get a random color
    let taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'list-group-item-action', `list-group-item-${type}`, 'd-flex', 'justify-content-between', 'align-items-center');
    taskItem.textContent = taskValue;

    // Create delete button for the task item
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.textContent = 'Видалити';

    // Add delete functionality to the button
    deleteBtn.addEventListener('click', function () {
        deleteTask(taskValue);
        taskList.removeChild(taskItem); // Remove task from DOM
    });

    taskItem.appendChild(deleteBtn); // Append delete button to task item
    return taskItem;
}

// Function to add a task to the list and localStorage
function addTask(taskValue) {
    todoItems.push(taskValue); // Add to array
    localStorage.setItem('todoItems', JSON.stringify(todoItems)); // Save updated array to localStorage
    let taskItem = createTaskElement(taskValue);
    taskList.appendChild(taskItem); // Add task to the DOM
}

// Function to delete a task from the list and localStorage
function deleteTask(taskValue) {
    let index = todoItems.indexOf(taskValue);
    if (index !== -1) {
        todoItems.splice(index, 1); // Remove from array
        localStorage.setItem('todoItems', JSON.stringify(todoItems)); // Update localStorage
    }
}

// Add keypress event listener to allow adding task with Enter key
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});

// Event listener for the add button
addBtn.addEventListener('click', function () {
    let taskValue = taskInput.value.trim();

    // Check if input field is not empty
    if (taskValue === '') {
        alert('Введіть текст задачі');
        return;
    }

    addTask(taskValue); // Add task to the list and localStorage
    taskInput.value = ''; // Clear input field after adding task
});

// Initial render of tasks from localStorage on page load
renderTasks();
