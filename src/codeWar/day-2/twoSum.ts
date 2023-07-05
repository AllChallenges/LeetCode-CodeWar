/**
 * * Two Sum
 * Write a function that takes an array of numbers (integers for the tests) and a target number. 
 * It should find two different items in the array that, when added together, give the target value. 
 * The indices of these items should then be returned in a tuple / list (depending on your language) like so:
   (index1, index2).
    For the purposes of this kata, some tests may have multiple answers;
    any valid solutions will be accepted.
    The input will always be valid (numbers will be an array of length 2 or greater, 
    and all of the items will be numbers; target will always be the sum of two different items from that array).
    Based on: http://oj.leetcode.com/problems/two-sum/
*   Help:
    twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
**/

export function twoSum(numbers: number[], target: number) {
  const map = new Map();
  return numbers.reduce((arr, currVal, currIndex) => {
    const num = target - currVal; // Calculate the correct difference
    if (map.has(num)) {
      return [map.get(num), currIndex];
    }
    map.set(currVal, currIndex);
    return arr;
  }, []);
}

export function twoSum1(numbers: number[], target: number) {
  const obj = {};
  return numbers.reduce((arr, currVal, currIndex) => {
    const num = target - currVal; // Calculate the correct difference
    if (Object.hasOwn(obj, num)) {
      return [obj[num], currIndex];
    }
    // if (obj.hasOwnProperty(num)) {
    //   return [obj[num], currIndex];
    // }
    obj[currVal] = currIndex;
    return arr;
  }, []);
}