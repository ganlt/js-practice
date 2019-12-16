/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 */
let reverseNumber = (num) => {
  return parseInt(num.toString().split('').reverse().join(''))
}
reverseNumber(243254255254);