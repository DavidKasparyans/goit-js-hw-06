const inputRef = document.querySelector('input#name-input');
const outputRef = document.querySelector('span#name-output');
inputRef.addEventListener('input', onNameOutput);

function onNameOutput({ target }) {
  outputRef.textContent = target.value ? target.value : 'Anonymous';
}