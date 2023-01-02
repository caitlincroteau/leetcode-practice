//jan 2, 2023

var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }
    if (wealth > maxWealth) {
      maxWealth = wealth;
    }
  }
  return maxWealth;
};

accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

console.log(maximumWealth(accounts));
//output = 6

//aprox 10 mins
//too slow and too much memory
//time complexity = O(n * m)
//space complexity = O(1) constant

//from Video:
//could use for.Each loops
// maxWealth = Math.max(maxWealth, wealth);
//compares the two values and overwrites if needed
//but this slows things down!

//faster version:
var maximumWealth2 = function(accounts) {
  let maxWealth = 0;
  for (let customer of accounts) {
      let wealth = 0;
      for (let amount of customer) {
          wealth += amount;
      }
      if (wealth > maxWealth) {
          maxWealth = wealth
      }
  }
  return maxWealth;
};