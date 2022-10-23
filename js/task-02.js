const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const list = document.querySelector(".ingredients");
const elementOne = document.createElement("li");
elementOne.textContent = 'Potatoes';
elementOne.classList.add('item');
console.log(elementOne);
const elementTwo =document.createElement("li");
elementTwo.textContent = 'Mushrooms';
elementTwo.classList.add('item');
console.log(elementTwo);



// ul#ingredients.append(element, elementTwo);

// Напиши скрипт, який для кожного елемента
//  масиву ingredients:

// Створить окремий елемент <li>. Обов'язково 
// використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за 
// одну операцію у список ul#ingredients.