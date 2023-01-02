//Jan 2, 2023

const fizzBuzz = function (n) {
  const result = [];
  let i = 1;
  while (i <= n) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
    i++;
  }
  return result;
};

n = 3;
//Output: ["1","2","Fizz"]

console.log(fizzBuzz(n));

//aprox 10 mins
//Time complexity O(n)
//Space complexity O(1) constant

//From Video: STRING CONCATENATION approach
//this is much slower!

const fizzBuzz2 = function (n) {
  const result = [];
  let i = 1;
  while (i <= n) {
    let currentString = "";

    if (i % 3 === 0) {
      currentString += "Fizz";
    }
    if (i % 5 === 0) {
      currentString += "Buzz";
    }
    if (currentString.length === 0) {
      currentString += i.toString();
    }

    result.push(currentString);
    i++;
  }
  return result;
};
//Time complexity O(n)
//Space complexity O(1) constant

console.log(fizzBuzz2(n));