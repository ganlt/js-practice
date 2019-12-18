/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
/**
 * @param {number} x
 * @return {boolean}
 */
// 结果正确
// 思路：先将数字转化为字符串，遍历字符串将第一个字符和最后一个字符比较，第二个和倒数第二个比较。。。若不相等则返回false
// 不足：需要先将数字转化为字符串
// var isPalindrome = function(x) {
//   const xx = x.toString()
//   const len = xx.length
//   let res
//   if (x < 0) return false
//   for (let i = 0; i < len/2 ; i++) {
//     if (xx[i] !== xx[len - 1 - i]) {
//       res = false
//       return res
//     }
//     res = true
//   }
//   return res
// };

// 2. 将数字反转，判断反转后的数字是否等于原数字，若是则为true
// 3. 将数字反转一半，判断反转后的数字是否等于原数字的另一半，若是则为true
var isPalindrome = function(x) {
  if(x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let s = 0
  while (x > s) {
    s = s * 10 + x % 10
    x = Math.round(x / 10)
  }
  return s == x || x == s/10
}

// 不将数字转化为字符串的做法
console.log(isPalindrome(11))
console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))