// Jan 4, 2023
// 278. First Bad Version

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
const test = function (num) {
  if ((num) >= 4) {
    return false;
  }

  return true;
};

const solution = function (isBadVersion) {
  let start = 1;
  let end = n;
  let mid

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (test(mid)) {
      start = mid++;
    } else {
      return mid;
    }
  }
};

let n = 5;
console.log(solution(n));
// bad is 4;
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
