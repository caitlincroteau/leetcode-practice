// Jan 4, 2023
//704. Binary Search

const search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 9;
console.log(search(nums, target));
//Output: 4
//Explanation: 9 exists in nums and its index is 4
//O(log n) runtime complexity.
