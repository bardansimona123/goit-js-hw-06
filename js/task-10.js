function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  
  destroyBoxes();
  
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
  }
}

function destroyBoxes() {
  
  boxesContainer.innerHTML = '';
}

createButton.addEventListener('click', function() {
  const amount = input.value;
  createBoxes(amount);
});

destroyButton.addEventListener('click', function() {
  destroyBoxes();
});
