// Створи змінну counterValue, в якій буде зберігатися поточне
//  значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
//  або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;

const incrementButton = document.querySelector('button[data-action="increment"]')
incrementButton.addEventListener("click", () => {
    counterValue +=1
    value.textContent = counterValue;
  });

const decrementButton = document.querySelector('button[data-action="decrement"]')
decrementButton.addEventListener("click", () => {
    counterValue -=1
    value.textContent = counterValue;
  });

let value = document.getElementById('value');



