/**
 * Calculates the total based on the provided key in an array of objects.
 * @param {Array} array - The array of objects to calculate the total from.
 * @param {string} key - The key to use for calculating the total.
 * @returns {number} The total based on the specified key.
 */
module.exports = function sumObjectsByKey(array, key) {
  // Use the Array.reduce() method to sum up the values of the specified key.
  const total = array.reduce((acc, item) => {
    // Check if the key exists in the current item.
    if (item.hasOwnProperty(key)) {
      // Add the value of the key to the accumulator.
      acc += item[key];
    }
    return acc;
  }, 0); // Initialize the accumulator with 0.

  return total;
}