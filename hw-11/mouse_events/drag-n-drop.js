const draggable = document.querySelector('.draggable');
    const gameField = document.querySelector('.game-field');

    let isDragging = false;
    let offsetX, offsetY;

    // Подія для натискання на об'єкт
    draggable.addEventListener('mousedown', function(e) {
        isDragging = true;

        // Визначаємо відступ від місця натискання до межі об'єкта
        offsetX = e.clientX - draggable.offsetLeft;
        offsetY = e.clientY - draggable.offsetTop;

        // Додаємо події для переміщення і відпускання миші
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    // Функція для переміщення об'єкта
    function onMouseMove(e) {
        if (isDragging) {
            // Визначаємо нові координати
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            // Обмежуємо об'єкт у межах ігрової області
            const areaRect = gameField.getBoundingClientRect();
            const objRect = draggable.getBoundingClientRect();

            // Перевірка меж для X
            if (newX < 0) newX = 0;
            if (newX + objRect.width > areaRect.width) newX = areaRect.width - objRect.width;

            // Перевірка меж для Y
            if (newY < 0) newY = 0;
            if (newY + objRect.height > areaRect.height) newY = areaRect.height - objRect.height;

            // Задаємо нові координати об'єкта
            draggable.style.left = `${newX}px`;
            draggable.style.top = `${newY}px`;
        }
    }

    // Функція для завершення перетягування
    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
