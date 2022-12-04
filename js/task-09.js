function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  colorEl: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
}

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.colorEl.textContent = document.body.style.backgroundColor
}
