// // Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
//  оновлюючи властивість font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
    controller: document.querySelector('#font-size-control'),
    text: document.querySelector('#text')
}

refs.controller.addEventListener('input', onChangeRange);

function onChangeRange(event) {
    const step = event.currentTarget.value;
    refs.text.style.fontSize = `${step}px`;
}

