const inputRangeRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputRangeRef.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
}