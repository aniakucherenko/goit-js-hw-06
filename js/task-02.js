// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

const elementOne = document.createElement("li");
elementOne.textContent = 'Potatoes';
elementOne.classList.add('item');

const elementTwo =document.createElement("li");
elementTwo.textContent = 'Mushrooms';
elementTwo.classList.add('item');

const elementThree = document.createElement("li");
elementThree.textContent = 'Garlic';
elementThree.classList.add('item');

const elementFour = document.createElement("li");
elementFour.textContent = 'Tomatos';
elementFour.classList.add('item');

const elementFive = document.createElement("li");
elementFive.textContent = 'Herbs';
elementFive.classList.add('item');

const elementSix = document.createElement("li");
elementSix.textContent = 'Condiments';
elementSix.classList.add('item');


ingredients.append(elementOne, elementTwo, elementThree, elementFour, elementFive, elementSix);
console.log(ingredients);


// Напиши скрипт, який для кожного елемента
//  масиву ingredients:

// Створить окремий елемент <li>. Обов'язково 
// використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за 
// одну операцію у список ul#ingredients.