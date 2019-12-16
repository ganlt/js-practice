/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 */
/**
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @return {number[]} 
 */
// 问题：没有返回数组下标；重复利用该数组中同样的元素
// var twoSum = (nums, target) => {
//   nums.forEach((num1, i) => {
//     nums.forEach((num2, j) => {
//       if (num1 + num2 === target) {
//         console.log(`下标为${i}和${j}`)
//       }
//     })
//   })
// }

// 返回下标；不重复利用数组中同样的元素
// 缺点：双层循环，时间复杂度为O(n * (n-1))
// let twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length ; i++) {
//     for (let j = i + 1; j < nums.length ; j++) {
//       if (nums[i] === target - nums[j]) {
//         return [i, j]
//       }
//     }
//   }
// }

// 使用Map数据结构，单层循环，时间复杂度为O(n)
// let twoSum = (nums, target) => {
//   const map = new Map();
//   for (let i = 0; i < nums.length ; i++) {
//     const end = target - nums[i];
//     if (map.has(end)) {
//       return [map.get(end), i]
//     } else {
//       map.set(nums[i], i)
//     }
//   }
// }

// 将目标值与数组每一项做减法，将值和各项下标以键值对存入对象
// 判断将要执行的下一项是否存在对象中,若在,取出下标,输出拿到的下标以及下一项的下标,得到返回值
let twoSum = (nums, target) => {
  const map = {};
  for (let i = 0 ; i < nums.length ; i++) {
    map[target - nums[i]] = i;
    if (nums[i + 1] in map) {
      return [map[nums[i + 1]], i + 1];
    }
  }
}
 
const nums = [1,3,5,31,3,56, 34], target = 34;
const index = twoSum(nums, target);
console.log(index)