# Coordinate Transformation

Welcome to Coordinate Transformation on Exercism's JavaScript Track.
If you need help running the tests or submitting your code, check out `HELP.md`.
If you get stuck on the exercise, check out `HINTS.md`, but try and solve it without using those first :)

## Introduction

**Closures** are a programming pattern in JavaScript which allows variables from an outer [lexical scope][wiki-lexical-scope] to be used inside of a nested block of code.
JavaScript supports closures transparently, and they are often used without knowing what they are.

```javascript
// Top-level declarations are global-scope
const dozen = 12;

{
  // Braces create a new block-scope
  // Referencing the outer variable is a closure.
  const twoDozen = dozen * 2;
}

// Because of the block-scope declaration, twoDozen is not available here.
twoDozen;
// => Uncaught ReferenceError: twoDozen is not defined
```

Except for braces `{}`, functions (and classes) als create new scopes, which can _enclose_ values:

```javascript
const dozen = 12;

// Functions create a new function-scope and block-scope.
// Referencing the outer variable here is a closure.
function nDozen(n) {
  // This is declared inside the function scope, and uses the top-level scope.
  // This works, and encloses the value 12.
  const twoDozen = dozen * 2;

  // This only uses the locally declared variable and the passed argument to the parameter `n`
  return (twoDozen / 2) * n;
}

// Because of the function-scope declaration, twoDozen is not available here.
twoDozen;
// => Uncaught ReferenceError: twoDozen is not defined
```

As the `twoDozen` examples show, values can be enclosed in a _nested_ scope (function, block, etc.), but cannot be pulled out of that context.
In the majority of cases, it is intended in Modern JavaScript that a value does not _leak_ to an outside scope.

## Closures to save state and pass along values

Using a mutable variable declaration (like `let` or `var`) allows for some state to be preserved:

```javascript
let counter = 0;

// This function closure increments the counter's state in the outer lexical context.
// This way the counter can be shared between many calling contexts.
export function increment() {
  counter += 1;
  return counter;
}

increment();
// => 1

counter;
// => 1
```

## Enclosing values without leaking the state

Combining the two ideas: enclosing a value to preserve state, and enclosed values do not leak to the outside, it's possible to create private values.

The most common method is to make a function that returns a function which encloses some state.

```javascript
export function makeCounter() {
  let counter = 0;

  // This returns a new function that encloses the local variable counter
  return function increment() {
    counter += 1;
    return counter;
  };
}

// Counter did not leak
counter;
// => Uncaught ReferenceError: counter is not defined

// This creates a new counter.
// This assigns the increment function to the variable myFirstCounter.
const myFirstCounter = makeCounter();

typeof myFirstCounter;
// => function

myFirstCounter.name;
// => increment

myFirstCounter();
// => 1
myFirstCounter();
// => 2

// This creates new counter (with new, separate local state / enclosed counter variable)
const mySecondCounter = makeCounter();

mySecondCounter();
// => 1

// It is not affect the first counter.

myFirstCounter();
// => 3
```

```exercism/note
Many programmers find closures a hard concept, and returning a function from a function is not common or not even possible in all programming languages.
If you want more reading material, the [guide on MDN on Closures][mdn-closures] is quite comprehensive.

[mdn-closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
```

[wiki-lexical-scope]: https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping

## Instructions

Your design company has primarily been working with CSS transformations to build web pages. After some discussion, a decision is made
to start using JavaScript to perform some calculations dynamically. Some of your teammates are less experienced with JavaScript,
so you decide to use a function closure to create reusable transformation for `{x, y}` coordinate pairs.

## 1. Translate the coordinates

Implement the `translate2d` function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.

> In Geometry, [translation][wiki-translate] refers to moving points, vectors or shapes the same distance in one direction.
> It can be interpreted as addition of a constant to every point.

```javascript
const moveCoordinatesRight2Px = translate2d(2, 0);
const result = moveCoordinatesRight2Px(4, 8);
// result => [6, 8]
```

## 2. Scale the coordinates

Implement the `scale2d` function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.

> In geometry, uniform [scaling][wiki-scale] refers to enlarging or shrinking vectors or shapes in the same direction.
> It can be interpreted as multiplying every point by a constant (scaling factor).
>
> For this exercise, assume only positive scaling values.

```javascript
const doubleScale = scale2d(2, 2);
const result = doubleScale(6, -3);
// result => [12, -6]
```

## 3. Compose transformation functions

Combine two transformation functions to perform a repeatable transformation. This is often called _function composition_, where the result of the first function _'f(x)'_ is used as the input to the second function _'g(x)'_.

```javascript
const moveCoordinatesRight2Px = translate2d(2, 0);
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleCoordinates,
);
const result = composedTransformations(0, 1);
// result => [4, 2]
```

## 4. Save the results of functions

Implement the `memoizeTransform` function. It takes a function to _memoize_, then returns a new function that remembers the inputs to the supplied function so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.

> Memoizing is sometimes used in _dynamic programming_.
> It allows for expensive operations to be done only once since their results are remembered.
> **Note** that in this exercise only the last result is remembered, unlike some solutions in dynamic programming that memoize _all_ results.

```javascript
const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

memoizedScale(4, 3); // => [12, 9], this is computed since it hasn't been computed before for the arguments
memoizedScale(4, 3); // => [12, 9], this is remembered, since it was computed already
```

[wiki-translate]: https://en.wikipedia.org/wiki/Translation_(geometry)
[wiki-scale]: https://en.wikipedia.org/wiki/Scaling_(geometry)

## Source

### Created by

- @neenjaw

### Contributed to by

- @SleeplessByte