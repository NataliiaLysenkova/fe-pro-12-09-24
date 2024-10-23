let gameArea = document.querySelector('.game-area');
let gameObj = document.querySelector('.movable-object');
let posX = 0;
let posY = 0;
let moveStep = 10;

document.addEventListener('keydown', function(e){
    console.log(e.key);
    switch(e.key){
        // Рух вверх
        case 'ArrowUp':
            posY = Math.max(0, posY-moveStep);
            break;
            // Рух вниз
        case 'ArrowDown':
       // Значення крайньої точки => перевірка, щоб об'єкт не виходив за межі ігрового поля
            posY = Math.min(gameArea.clientHeight - gameObj.clientHeight, posY+moveStep);
            break;
            // Рух вліво
        case 'ArrowLeft':
            posX = Math.max(0, posX-moveStep);
            break;
            // Рух вправо
        case 'ArrowRight':
     // Значення крайньої точки => перевірка, щоб об'єкт не виходив за межі ігрового поля
            posX = Math.min(gameArea.clientWidth - gameObj.clientWidth, posX+moveStep);
            break;            
    }
    // Рух об'єкта
    gameObj.style.top = `${posY}px`;
    gameObj.style.left = `${posX}px`;
});
