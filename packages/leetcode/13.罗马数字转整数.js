/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (typeof s !== "string") return s;
  let result = 0;
  const arr = s.split("");
  arr.forEach((char, index) => {
    switch (char) {
      case "I":
        ["V", "X"].includes(arr[index + 1]) ? (result -= 1) : (result += 1);
        break;
      case "V":
        result += 5;
        break;
      case "X":
        ["L", "C"].includes(arr[index + 1]) ? (result -= 10) : (result += 10);
        break;
      case "L":
        result += 50;
        break;
      case "C":
        ["D", "M"].includes(arr[index + 1]) ? (result -= 100) : (result += 100);
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;

      default:
        break;
    }
  });
  return result;
};
// @lc code=end
