/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0
 */
/**
 * 
 * @param {number} x 
 */
// var reverseNumber = (x) => {
//   return parseInt(x.toString().split('').reverse().join(''))
// }
// 主要实现：parseInt(num.toString().split('').reverse().join(''))
// 注意：负数时，返回负数；零则返回零；末位为零是反转后首位零去除
// 问题：反转后若整数溢出未处理。三元表达式使用太多。
// var reverseNumber = (x) => {
//   let res = x.toString().charAt(0) === '-' ? '-' : ''
//   let num = x.toString().charAt(x.length - 1) === '0' ? x === 0 ? 0 : x.toString().substring(1) : x
//   return parseInt(res + parseInt(num.toString().split('').reverse().join('')))
// }

var reverseNumber = (x) => {
  if (x > 0) {
    const num = parseInt(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
    return num > Math.pow(2, 31) - 1 ? 0 : num;
  } else {
    const str = x.toString();
    const arr = str.slice(1);
    const num = parseInt(
      `${str[0]}${arr
        .split("")
        .reverse()
        .join("")}`
    );
    return num < Math.pow(-2, 31) ? 0 : num;
  }
}
console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(120));
console.log(reverseNumber(0));
console.log(reverseNumber(1534236469));
