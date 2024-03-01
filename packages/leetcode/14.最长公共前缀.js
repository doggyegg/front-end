/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let arr = [];
  strs.forEach((str, index) => {
    if (index === 0) {
      arr = str.split("");
    }
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === str[i]) {
        temp.push(str[i]);
      } else {
        break;
      }
    }

    arr = temp;
  });
  return arr.join("");
};
// @lc code=end
