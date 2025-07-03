/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  let firstCard, rest;
  [firstCard, ...rest] = deck;
  return firstCard;
}

/**
 * Get the second card in the given deck
*
* @param {Card[]} deck
*
* @returns {Card} the second card in the deck
*/
export function getSecondCard(deck) {
  let secondCard;
  [ , secondCard, ] = deck;
  return secondCard;
}

/**
 * Switch the position of the two cards
 *
 * @param {[Card, Card]} deck
 *
 * @returns {[Card, Card]} new deck with the 2 cards swapped
 */
export function swapTwoCards(deck) {
  let firstCard, seconCard, rest;
  [firstCard, seconCard, ...rest] = deck;
  return [firstCard, seconCard] = [seconCard, firstCard];
}

/**
 * Rotate (shift) the position of the three cards (by one place)
*
* @param {[Card, Card, Card]} deck
*
* @returns {[Card, Card, Card]} new deck with the 3 cards shifted by one position
*/
export function shiftThreeCardsAround(deck) {
  let firstCard, seconCard, thirdCard, rest;
  [firstCard, seconCard, thirdCard,...rest] = deck;
  return [firstCard, seconCard, thirdCard] = [seconCard, thirdCard, firstCard];
}

/**
 * Grab the chosen pile from the available piles
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 *
 * @returns {Card[]} the pile named chosen
 */
export function pickNamedPile(piles) {
  const {chosen} = piles;
  return chosen;
}

/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 * @returns {{ chosen: Card[], disregarded: Card[] }} new piles where the two piles are swapped
 */
export function swapNamedPile(piles) {
  const { chosen: disregarded, disregarded: chosen } = piles;
  return { chosen, disregarded };
}
