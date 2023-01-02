// const runningSum = function (nums) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     let sum = nums[i];

//     for (let j = 0; j < i; j++) {
//       sum += nums[j];
//     }
//     result.push(sum);
//   }

//   return result;
// };

nums = [1, 2, 3, 4];

// console.log(runningSum(nums));

// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

//took 25 mins on Jan 2, 2023.
//need to speed up the runtime/take less memory

// attempt after watching intro video
//second way runs MUCH faster and takes up much less memory!
//time complexity = O(n)
//space complexity = O(1) constant

const runningSum2 = function (nums) {
  let result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let prev = result[i - 1];
    let sum = prev + nums[i];
    result.push(sum);
  }

  return result;
};

console.log(runningSum2(nums));

// could also OVERWRITE the original array with the new sums
//FROM THE VIDEO:
//time complexity = O(n)
//space complexity = O(1) also constant

const runningSum3 = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};

console.log(runningSum3(nums));
