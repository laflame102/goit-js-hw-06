//Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
const amountOfCat = document.querySelector('#categories');
const elemOfCat = document.querySelectorAll('.item');

console.log('Number of categories:', amountOfCat.children.length)

for (let i = 0; i < elemOfCat.length; i += 1) {
    console.log('Category: ', elemOfCat[i].firstElementChild.textContent);
    console.log('Elements: ', elemOfCat[i].querySelectorAll('ul li').length)
}








