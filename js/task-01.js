//Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.
const numOfCat = document.querySelectorAll('.item');

console.log('Number of categories:', numOfCat.length)

for (let i = 0; i < numOfCat.length; i += 1) {
    console.log('Category: ', numOfCat[i].querySelector('h2').textContent);
    console.log('Elements: ', numOfCat[i].querySelectorAll('ul li').length)
}








