const valueRef = document.querySelector('#value');

let counterValue = 0;

const btnIncrementRef = document.querySelector(
  '#counter button[data-action="increment"]',
);

btnIncrementRef.addEventListener('click', onIncrementClick);

function onIncrementClick(click) {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

const btnDecrementRef = document.querySelector(
  '#counter button[data-action="decrement"]',
);

btnDecrementRef.addEventListener('click', onDecrementClick);

function onDecrementClick(click) {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}