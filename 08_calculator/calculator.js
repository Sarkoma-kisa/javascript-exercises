const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return Math.max(a, b) - Math.min(a, b)
};

const sum = function(array) {
  return array.length === 0 ? 0 : array.reduce((first, next) => first + next)
};

const multiply = function(array) {
  return array.reduce((first, next) => first * next)
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
	let sum = 1
  for(i = 1; i < (a + 1); i++) {
    sum *= i
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
