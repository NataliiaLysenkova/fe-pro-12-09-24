let taskInput = document.getElementById('task-input');
let addBtn = document.getElementById('add-btn');
let taskList = document.querySelector('.task-list');

// Обробка натискання на кнопку додавання задачі
addBtn.addEventListener('click', function () {
    let taskValue = taskInput.value.trim();

    // Перевірка, чи не порожнє поле введення
    if (taskValue === '') {
        alert('Введіть текст задачі');
        return;
    }

    // Створення нового елемента списку задач
    let taskItem = document.createElement('li');
    taskItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    taskItem.textContent = taskValue;

    // Створення кнопки для видалення задачі
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.textContent = 'Видалити';

    // Додавання події для видалення задачі
    deleteBtn.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    // Додавання кнопки видалення до елемента задачі
    taskItem.appendChild(deleteBtn);

    // Додавання елемента задачі до списку
    taskList.appendChild(taskItem);

    // Очищення поля введення після додавання задачі
    taskInput.value = '';
});
