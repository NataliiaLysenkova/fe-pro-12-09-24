let taskInput = document.getElementById('task-input');
let addBtn = document.getElementById('add-btn');
let taskList = document.querySelector('.task-list');
let todoItems = [];  // Масив для зберігання задач

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

    // Додавання задачі в масив
    todoItems.push(taskValue);
    console.log("Поточний список задач:", todoItems);

    // Створення кнопки для видалення задачі
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm');
    deleteBtn.textContent = 'Видалити';

    // Додавання події для видалення задачі
    deleteBtn.addEventListener('click', function () {
        // Знайти індекс задачі
        let index = todoItems.indexOf(taskValue);
        if (index !== -1) {
            todoItems.splice(index, 1);  // Видалити елемент із масиву
            console.log("Список задач після видалення:", todoItems);
        }

        // Видалити елемент зі списку на сторінці
        taskList.removeChild(taskItem);
    });

    // Додавання кнопки видалення до елемента задачі
    taskItem.appendChild(deleteBtn);

    // Додавання елемента задачі до списку на сторінці
    taskList.appendChild(taskItem);

    // Очищення поля введення після додавання задачі
    taskInput.value = '';
});
