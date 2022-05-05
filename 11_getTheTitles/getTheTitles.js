const getTheTitles = function(item) {
  let newArray = item.map(book => [book.title].join(''))
  return newArray
};

// Do not edit below this line
module.exports = getTheTitles;
