var fs = require('fs'),
    pathToFile = process.argv[2],
    usedLetters = [];


var arrayText = fs.readFileSync(pathToFile).toString().split(/\n/).reverse();

iterate(arrayText);

function permutate (input) {
  var i, letter;
  var partial = [];

  for (i = 0; i < input.length; i++) {
    letter = input.splice(i,1)[0];
    console.log(i, letter);
    usedLetters.push(letter);

    if (input.length == 0) {
      partial.push(usedLetters.slice());
    }
    permutate(input);
    input.splice(i, 0, letter);
    usedLetters.pop();
  }

  return partial;
}

function iterate (a) {
  var response = [];

  for (var i = 0; i < a.length; i++) {
    response.push(permutate(a[i].split('')));
  };
   console.log(response);
}

// for (i = 0; i < input.length; i++) {
  //   ch = input.splice(i, 1)[0]; /get the first char
  //   usedChars.push(ch); /push char to usedChars
  //   if (input.length == 0) { if input is empty push all usedChars
  //     permArr.push(usedChars.slice());
  //   }
  //   permutate(input);
  //   input.splice(i, 0, ch);
  //   usedChars.pop();
  // }
  // return permArr