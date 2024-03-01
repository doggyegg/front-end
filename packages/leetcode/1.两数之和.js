/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) || map.get(target - nums[i]) === 0) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};
// @lc code=end
