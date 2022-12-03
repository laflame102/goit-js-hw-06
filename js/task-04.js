// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
    decrem: document.querySelector('[data-action="decrement"]'),
    increm: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

refs.decrem.addEventListener('click', onDecrement);
refs.increm.addEventListener('click', onIncrement);

let counterValue = 0;

function onDecrement() {
    counterValue -= 1;
    refs.value.textContent = counterValue;
}

function onIncrement() {
    counterValue += 1;
    refs.value.textContent = counterValue;
}



