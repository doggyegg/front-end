/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length & (2 !== 0)) return false;
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];
  for (const char of s) {
    if (map[char]) {
      if (stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
};
// @lc code=end
