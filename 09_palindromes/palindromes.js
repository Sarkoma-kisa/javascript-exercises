const palindromes = function (string) {
  let newStr = string.split('').filter(value => value !== ' ' && value !== '!' && value !== ',' && value !== '.')
  
  let filteredStr = newStr.join('').toLowerCase()

  let reverseStr = newStr.reverse().join('').toLowerCase()
 

  if(filteredStr === reverseStr) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
