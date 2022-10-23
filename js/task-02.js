const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const element = document.createElement("li");
element.textContent = 'Potatoes';
console.log(element);
const elementTwo =document.createElement("li");
elementTwo.textContent = 'Mushrooms';
console.log(elementTwo);

// Напиши скрипт, який для кожного елемента
//  масиву ingredients:

// Створить окремий елемент <li>. Обов'язково 
// використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за 
// одну операцію у список ul#ingredients.