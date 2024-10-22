const object = document.querySelector('.movable-object');
    const gameArea = document.querySelector('.game-area');
    let posX = 0;
    let posY = 0;
    const moveSpeed = 10; // Швидкість переміщення об'єкта
    let isMoving = false; // Відслідковуємо, чи об'єкт у русі

    // Функція для оновлення позиції об'єкта
    function updatePosition() {
        object.style.transform = `translate(${posX}px, ${posY}px)`;
    }

    // Обробка натискань клавіш
    document.addEventListener('keydown', function(e) {
        if (!isMoving) {
            isMoving = true; // Поставимо прапорець, що об'єкт починає рухатися
            switch (e.key) {
                case 'ArrowUp':
                    posY -= moveSpeed; // Рух вверх
                    break;
                case 'ArrowDown':
                    posY += moveSpeed; // Рух вниз
                    break;
                case 'ArrowLeft':
                    posX -= moveSpeed; // Рух вліво
                    break;
                case 'ArrowRight':
                    posX += moveSpeed; // Рух вправо
                    break;
            }
            updatePosition();
        }
    });

    // Зупинка руху при відпусканні клавіші
    document.addEventListener('keyup', function() {
        isMoving = false; // Прапорець знову скидається
    });