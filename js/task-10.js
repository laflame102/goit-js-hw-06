function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click', onDestroyBoxes);

function onCreateBoxes(amount) {
  amount = refs.input.value;
  console.log(amount);

  let boxesCollection = [];

  for (let i = 0; i < amount; i += 1){
    const newBox = document.createElement('div');
    const boxSize = 30;

    newBox.style.width = `${boxSize + 10}px`
    newBox.style.height = `${boxSize + 10}px`
    newBox.style.backgroundColor = getRandomHexColor();

    boxesCollection.push(newBox);
  }
  refs.box.append(...boxesCollection);
}

function onDestroyBoxes() {
  refs.box.innerHTML = '';
}



