//Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

for (let i = 0; i < ingredients.length; i += 1){
  const li = document.createElement('li');
  li.textContent = `${ingredients[i]}`;
  li.classList.add('item')
  list.append(li);
}


// const list = document.querySelector('#ingredients');

// let result = '';

// for (let i = 0; i < ingredients.length; i += 1){
//   result += `<li class="item">${ingredients[i]}</li>`
// }
// list.insertAdjacentHTML('beforeend', result)

// console.log(result)