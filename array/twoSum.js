// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// first solution with time complexity of O(n^2)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

// second solution with with time complexity of O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumBest = function (nums, target) {
    let seen = {}
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (seen.hasOwnProperty(diff)) {

            return [seen[diff], i];
        } else {

            seen[nums[i]] = i;

        }
    }
};

console.log(twoSumBest([2, 7, 11, 15], 9))