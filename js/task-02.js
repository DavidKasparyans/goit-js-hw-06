const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
    const createIngredients = document.querySelector('#ingredients');
    
    const createIngredientsItem = ingredient => {
      const ingredientsItem = document.createElement('li');
      ingredientsItem.textContent = ingredient;
      return ingredientsItem;
    };
    
    const ingredientsRef = ingredients.map(createIngredientsItem);
    
    createIngredients.append(...ingredientsRef);