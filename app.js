/**
 * Permutation of array of strings
 * By: Michael Brown
 * 11/03/2015
 */

var fs = require('fs'),
    pathToFile = process.argv[2],
    usedLetters = [],
    response = [];

// Read file that is passed as third argument from command line. 
var arrayText = fs.readFileSync(pathToFile).toString().split(/\n/);

iterate(arrayText);

/**
 * @param  {array}
 * @return {array}
 * Execute permutation on given string. 
 */
function permutate (input) {
  var i, letter;

  for (i = 0; i < input.length; i++) {
    letter = input.splice(i,1)[0];
    usedLetters.push(letter);

    if (input.length == 0) {
      response.push(usedLetters.join(''));
    }

    permutate(input);
    input.splice(i, 0, letter);
    usedLetters.pop();
  }
  return response;
}

/**
 * @param  {array}
 * @return {String}
 * Iterate over array of strings in file and call purmutate()
 */
function iterate (a) {
  
  for (var i = 0; i < a.length; i++) {
    var string = a[i].split('');
    response.push(permutate(string));
    response.pop();
  };

  return response.sort().join(); 
}