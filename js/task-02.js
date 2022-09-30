const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map(ingredientEl => {
  const ingredient = document.createElement('li');
  ingredient.textContent = ingredientEl;
  ingredient.classList.add('item');
  return ingredient;
});

ingredientsEl.append(...ingredientEl);