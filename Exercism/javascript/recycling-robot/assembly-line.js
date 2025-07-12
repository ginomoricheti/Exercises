// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
  return (
    (typeof value === 'number' && Number.isFinite(value)) ||
    typeof value === 'bigint'
  );
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
  return typeof value === 'object' && value != null;
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
  return typeof value === 'string' &&
    value.trim() !== '' && !isNaN(Number(value));
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a value is an empty array.
*
* @param {unknown} value
* @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {undefined} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
  const hasIdProp = 'id' in object;
  const hasIdMethod = typeof object.getId === 'function';

  if (hasIdProp || hasIdMethod) return;

  if (!hasIdProp && !hasIdMethod) {
    throw new Error("Object is missing both the 'id' property and the 'getId' method");
  } else if (!hasIdProp) {
    throw new Error("Object is missing the 'id' property");
  } else {
    throw new Error("Object is missing the 'getId' method");
  }
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
  return (
    object != null &&
    typeof object === 'object' &&
    (
      typeof object.type === 'function' || typeof object.type === 'string'
    )
  );
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {
  return (
    object != null &&
    typeof object === 'object' &&
    Object.prototype.hasOwnProperty.call(object, 'id')
  );
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
  return (
    object != null &&
    typeof object === 'object' &&
    'type' in object &&
    object.type !== undefined
  );
}
