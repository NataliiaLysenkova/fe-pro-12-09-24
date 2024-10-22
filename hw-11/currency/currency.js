const amountInput = document.getElementById('amount');
const exchangeRateInput = document.getElementById('exchange');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', function() {
    // Зчитування значень
    const amount = parseFloat(amountInput.value);
    const exchangeRate = parseFloat(exchangeRateInput.value);
    
  // Перевірка на неправильні числові значення або NaN
  if (isNaN(amount) || isNaN(exchangeRate) || amount <= 0 || exchangeRate <= 0) {
    resultDiv.textContent = "Будь ласка, введіть правильні числові значення більше 0.";
    resultDiv.style.color = 'red'; // Повідомлення про помилку червоним
    return;
}

    // Виконання конвертації
    const convertedAmount = amount * exchangeRate;

    // Вивід результату
    resultDiv.textContent = `Результат конвертації: ${convertedAmount.toFixed(2)}`;
    resultDiv.style.color = 'green';  // Повертаємо колір тексту на зелений для правильного результату
});
