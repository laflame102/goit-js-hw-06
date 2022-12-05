// // Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// //     перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const refs = {
    input: document.querySelector('#validation-input'),
    characters: document.querySelector('[data-length="6"]'),
}

refs.input.addEventListener('blur', onValidAmountChar);

function onValidAmountChar() {
  if (refs.input.value.length >= Number(refs.characters.dataset.length)) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
  }
  
}
