// // Порахує і виведе в консоль кількість категорій в ul#categories,
// //  тобто елементів li.item.
// // Для кожного элемента li.item у спиcку ul#categories,
// //  знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// //  і кількість елементів в категорії (усіх <li>, вкладених в нього).



const categoriesNumber = document.querySelectorAll('li.item');

console.log('Number of categories: ' + categoriesNumber.length);

categoriesNumber.forEach((element) => {
    console.log('Category: ' + `${element.firstElementChild.textContent}`);
    console.log('Elements: ' + `${element.lastElementChild.children.length}`);
   });










//  const categoriesCount = header.children.length;
// selector.forEach(item => {
//     const categoryName = item.querySelector("h2").textContent;
//     const counter = item.querySelectorAll("ul li").length;
//     console.log(`Category: ${categoryName}`);
//     console.log('Elements: ' + counter);
// });



// Category: Animals
// Elements: 4

