/**
 * @param {object} recipe
 * @param {object} available
 * @returns
 */
const cakes = (recipe, available) => {
  const initialValue = Object.entries(recipe).reduce((acc, [key]) => {
    acc[key] = 0;
    return acc;
  }, {});

  const recipeIngredientsAmount = Object.entries(recipe).reduce(
    (acc, [ingredient, amount]) => {
      if (!available[ingredient]) return acc;
      acc[ingredient] = Math.floor(available[ingredient] / amount);
      return acc;
    },
    initialValue
  );

  return Math.min(...Object.values(recipeIngredientsAmount));
};

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available), 2);

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available), 0);
