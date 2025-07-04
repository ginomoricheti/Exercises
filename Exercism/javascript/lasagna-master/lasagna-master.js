/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const cookingStatus = (minutes) => {
  if (minutes === undefined || minutes < 0) {
    return "You forgot to set the timer."
  } else if (minutes === 0) {
    return "Lasagna is done."
  } else {
    return "Not done, please wait."
  }
}

export const preparationTime = (layers, prepTime = 2) => {
  return layers.length * prepTime;
}

export const quantities = (layers) => {
  const quantities = {
    noodles: 0,
    sauce: 0
  };

  layers.map((el) => {
    if (el === 'noodles') quantities.noodles += 50;
    if (el === 'sauce') quantities.sauce += 0.2;
  });

  return quantities;
}

export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length-1]);
}

export const scaleRecipe = (recipe, portions) => {
  const scaledPortions = {};

  for (let ingredient in recipe) {
    scaledPortions[ingredient] = (recipe[ingredient] / 2) * portions;
  }

  return scaledPortions;
}