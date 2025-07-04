# Elyses Analytic Enchantments

Welcome to Elyses Analytic Enchantments on Exercism's JavaScript Track.
If you need help running the tests or submitting your code, check out `HELP.md`.
If you get stuck on the exercise, check out `HINTS.md`, but try and solve it without using those first :)

## Introduction

## Arrow Functions

Besides function declarations and function expressions, JavaScript also has another very concise syntax for defining a function.
These functions are called _arrow functions_.

Here is a comparison between a function declaration and an arrow function.

```javascript
function addUpTwoNumbers(num1, num2) {
  return num1 + num2;
}
// function keyword removed and => added
const addUpTwoNumbers = (num1, num2) => {
  return num1 + num2;
};
```

If the function body contains only a return statement, like in the example above, the `{}` and the `return` keyword can be omitted.
If there is only one parameter, the parenthesis `()` can be omitted as well.

<!-- prettier-ignore-start -->
```javascript
const addUpTwoNumbers = (num1, num2) => num1 + num2;
const square = num => num * num;
```
<!-- prettier-ignore-end -->

Arrow functions are often used to define short callback functions directly in the function call.

<!-- prettier-ignore-start -->
```javascript
applyToSquare(number => number * number);
```
<!-- prettier-ignore-end -->

## Array Analysis

[Arrays][arrays-concept] have built-in methods to analyse the contents of the array.
Most of these methods take a function that returns true or false as an argument.
Such a function is called a [`predicate`][predicate_in_programming].

The built-in methods are meant to be used _instead of a `for` loop_ or the built-in `forEach` method:

Example of analysis using a for loop :

```javascript
const numbers = [1, 'two', 3, 'four'];
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] === 'two') {
    return i;
  }
}
// => 1
```

Example of analysis using a built-in method:

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.indexOf('two');
// => 1
```

Some other helpful built-in methods that are available to analyze an array are shown below.
See [MDN][mdn-array-methods] for a full list of array methods.

### `includes`

The `includes(value)` method determines whether an array includes a certain value.
It returns `true` when the value is included, `false` otherwise.

```javascript
const numbers = [1, 'two', 3, 'four'];
numbers.includes(1);
// => true
numbers.includes('one');
// => false
```

### `every`

The `every(predicate)` method take a function which is _a predicate_.
It tests whether all elements in the array return `true` when passed to the predicate.
In other words: the methods tests that all its elements pass the test passed to the function call.
It returns `true` when every element passes the predicate test, `false` otherwise.

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.every((num) => num % 2 !== 0);
// => true
```

### `some`

The `some(predicate)` method is the same as the `every` method, but returns `true` if at least one item in the array passes the _predicate_ test.

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.some((num) => num % 2 !== 0);
// => true
```

### `find`

The `find(predicate)` method returns the value of the first element in the array that passes the `predicate` test.
Where `some()` returns `true` when it passes, `find()` returns the actual value in the array.
The method returns `undefined` when none of the elements in the array pass the _predicate_ test.

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.find((num) => num < 5);
// => 1
```

### `findIndex`

The `findIndex(predicate)` is the same as the `find()` method, but it returns the (first) _index_ of the element that passes the _predicate_ test instead of the `value`.
The method returns `-1` when none of the elements in the array pass the _predicate_ test.

```javascript
const numbers = [1, 3, 5, 7, 9];
numbers.findIndex((num) => num > 7);
// => 4
numbers.findIndex((num) => num > 9);
// => -1
```

[predicate_in_programming]: https://derk-jan.com/2020/05/predicate/
[mdn-array-methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods
[arrays-concept]: /tracks/javascript/concepts/arrays

## Instructions

Elyse, magician-to-be, continues her training. She will be given several stacks of cards that she needs to perform her tricks.
To make things a bit easier, she only uses the cards 1 to 10.

In this exercise, use built-in methods to analyse the contents of an array.

## 1. Find the position of a card

Elyse wants to know the position (index) of a card in the stack.

```javascript
const card = 2;
getCardPosition([9, 7, 3, 2], card);
// => 3
```

## 2. Determine if a card is present

Elyse wants to determine if a card is present in the stack -- in other words, if the stack contains a specific `number`.

```javascript
const card = 3;
doesStackIncludeCard([2, 3, 4, 5], card);
// => true
```

## 3. Determine if each card is even

Elyse wants to know if every card is even -- in other words, if each number in the stack is an even `number`.

```javascript
isEachCardEven([2, 4, 6, 7]);
// => false
```

## 4. Check if the stack contains an odd-value card

Elyse wants to know if there is an odd number in the stack.

```javascript
doesStackIncludeOddCard([3, 2, 6, 4, 8]);
// => true
```

## 5. Get the first odd card from the stack

Elyse wants to know the value of the first card that is odd.

```javascript
getFirstOddCard([4, 2, 8, 7, 9]);
// => 7
```

## 6. Determine the position of the first card that is even

Elyse wants to know the position of the first card that is even.

```javascript
getFirstEvenCardPosition([5, 2, 3, 1]);
// => 1
```

## Source

### Created by

- @peterchu999
- @SleeplessByte

### Contributed to by

- @pertrai1