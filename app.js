var fs = require('fs'),
    pathToFile = process.argv[2],
    usedLetters = [],
    response = [];


var arrayText = fs.readFileSync(pathToFile).toString().split(/\n/).reverse();

iterate(arrayText);

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

function iterate (a) {
  for (var i = 0; i < a.length; i++) {
    response.push(permutate(a[i].split('')));
  };
  
  console.log(response);
  return response.sort(); 
}