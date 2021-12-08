const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории`);

itemsRef.forEach(item => {
  const titleRef = item.querySelector('h2').textContent;
  console.log(`
Категория: ${titleRef}
Количество элементов: ${item.querySelectorAll('li').length}`);
});