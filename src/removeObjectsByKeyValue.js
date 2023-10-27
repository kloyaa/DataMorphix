/**
 * Removes objects from an array where a specified key has a specific value.
 * @param {Array} array - The array of objects to filter.
 * @param {string} key - The key to match against.
 * @param {string} value - The value to compare with the key's value.
 * @returns {Array} A filtered array with objects that do not match the key-value pair.
 */
module.exports = function removeObjectsByKeyValue(array, key, value) {
  // Use the Array.filter() method to create a new array with objects that do not match the key-value pair.
  return array.filter((item) => item[key] !== value);
};
