const findTheOldest = function(arr) {

  const date = new Date().getFullYear()
  const oldest = arr.sort((a, b) => {

    const lastPerson = (a.yearOfDeath || date) - a.yearOfBirth
    const nextPerson = (b.yearOfDeath || date) - b.yearOfBirth

    return lastPerson < nextPerson ? 1 : -1
  })

  return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
