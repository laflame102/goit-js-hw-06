//Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
const amountOfCategories = document.querySelector('#categories');

console.log('Number of categories: ', amountOfCategories.children.length);

// ------------------------------------------
const titleEl = document.querySelectorAll('#categories h2');
const headingEl = [...titleEl].map(elem => elem.textContent)

for (let i = 0; i < headingEl.length; i+=1) {
    console.log('Category: ', headingEl[i]);
}

const listEl = document.querySelectorAll('.item ul');







