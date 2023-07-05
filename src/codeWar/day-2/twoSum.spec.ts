import { twoSum } from './twoSum.ts';

describe('Sample Tests', () => {
  const testCases: [number[], number, number[]][] = [
    [[1, 2, 3], 4, [0, 2]],
    [[1234, 5678, 9012], 14690, [1, 2]],
    [[2, 2, 3], 4, [0, 1]],
    [[2, 3, 1], 4, [1, 2]],
  ];

  testCases.forEach(([numbers, target, expected]) => {
    it(`Testing for numbers = [${numbers.join(', ')}], target = ${target}`, () => {
      const actual = twoSum(numbers, target); // Use spread operator to create a copy of the array
      expect(actual).toBeInstanceOf(Array);
      expect(actual.sort((a, b) => a - b)).toEqual(expected);
    });
  });
});
