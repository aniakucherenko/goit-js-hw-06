function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeColor.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
});
