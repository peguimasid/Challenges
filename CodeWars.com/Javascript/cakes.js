/**
 * @param {object} recipe
 * @param {object} available
 * @returns
 */
const cakes = (recipe, available) => {
  return Object.keys(recipe).reduce((acc, ingredient) => {
    return Math.min(
      acc,
      Math.floor(available[ingredient] / recipe[ingredient] || 0)
    );
  }, Number.MAX_SAFE_INTEGER);
};

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available), 2);

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available), 0);
