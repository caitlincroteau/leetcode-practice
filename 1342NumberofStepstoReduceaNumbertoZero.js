// jan 2 , 2023

const numberOfSteps = function (num) {
  let counter = num;
  let steps = 0;

  while (counter > 0) {
    if (counter % 2 === 0) {
      counter /= 2;
    } else {
      counter--;
    }
    steps++;
  }
  return steps;
};

num = 14;
//Output: 6

console.log(numberOfSteps(num));

//could do this but it's quite a bit slower (less memory tho)
// counter % 2 === 0 ? counter /= 2 : counter -= 1;

//Time complexity O(logn)
//because worst case the most steps will be,
//whenever we halve, we substract one in the following step
//Space complexity O(1) constant

//BITWISE approach
//doesn't improve time/space complexity

// considering binary rep of num

const numberOfSteps2 = function (num) {
  let counter = num;
  let steps = 0;

  while (counter > 0) {
    if ((counter & 1) === 0) {
      ///num : xxxxxxx1 & bitmask: 00000001
      counter >>= 1;
    } else {
      counter--;
    }
    steps++;
  }
  return steps;
};

console.log(numberOfSteps2(num));
