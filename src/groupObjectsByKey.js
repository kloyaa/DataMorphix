/**
 * Groups an array of objects by a specified key and assigns a custom group name.
 * @param {Array} array - The array of objects to be grouped.
 * @param {string} key - The key to group objects by.
 * @param {string} group_name - The custom group name for the result.
 * @returns {Array} An array of grouped objects with the specified key and group name.
 */
module.exports = function groupObjectsByKey(array, key, group_name) {
  if (!Array.isArray(array)) {
    throw new Error("The 'array' parameter must be an array.");
  }

  if (typeof key !== "string" || typeof group_name !== "string") {
    throw new Error("The 'key' and 'group_name' parameters must be strings.");
  }

  try {
    const groupedData = {};

    for (const item of array) {
      const itemKey = item[key];

      if (itemKey === undefined) {
        continue; // Skip objects without the specified key
      }

      if (!groupedData[itemKey]) {
        groupedData[itemKey] = {
          [key]: itemKey,
          [group_name]: [],
        };
      }

      groupedData[itemKey][group_name].push(item);
    }

    return Object.values(groupedData);
  } catch (error) {
    throw error;
  }
};
