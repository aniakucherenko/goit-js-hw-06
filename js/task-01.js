// // Порахує і виведе в консоль кількість категорій в ul#categories,
// //  тобто елементів li.item.
// // Для кожного элемента li.item у спиcку ul#categories,
// //  знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// //  і кількість елементів в категорії (усіх <li>, вкладених в нього).



const categoriesNumber = document.querySelectorAll('li.item');
console.log('Number of categories: ' + categoriesNumber.length);

const categoriesName = document.querySelectorAll('li.item>h2');
categoriesName.forEach(header => {
console.log('Category: ' + header.textContent);
const categoriesCount = header.querySelectorAll('ul li');
console.log('Elements: ' + categoriesCount.length);
});




// Category: Animals
// Elements: 4

