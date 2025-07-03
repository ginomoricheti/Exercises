/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let basePrice;
  if (pizza === 'Margherita') {
    basePrice = 7;
  } else if (pizza === 'Caprese') {
    basePrice = 9;
  } else if (pizza === 'Formaggio') {
    basePrice = 10;
  } else { throw new Error("No pusiste una pizza correcta") }

  function extrasPriceCalc(extrasList) {
    if (extrasList.length === 0) {
      return 0;
    }

    const [first, ...rest] = extrasList;

    let extraPrice = 0;
    if (first === 'ExtraSauce') {
      extraPrice = 1;
    } else if (first === 'ExtraToppings') {
      extraPrice = 2;
    } else {
      throw new Error(`Extra inválido: ${first}`)
    }

    return extraPrice + extrasPriceCalc(rest); // <- Recursion
  }

  return basePrice + extrasPriceCalc(extras);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;

  for (const order of pizzaOrders) {
    const extras = Array.isArray(order.extras) ? order.extras : [];
    total += pizzaPrice(order.pizza, ...extras);
  }

  return total;
}


