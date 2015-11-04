var fs = require('fs'),
    pathToFile = process.argv[2],
    permArr = [],
    usedChars = [];

var arrayText = fs.readFileSync(pathToFile).toString().split(/\n/);

iterate(arrayText);

function permutate (input) {
  var i, ch;
  console.log(input.split());
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permutate(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

function iterate (a) {
  console.log(permutate(a));
  for (var i = a.length - 1; i >= 0; i--) {
     console.log(a[i].split()[0]);
     permutate(a[i].split());
   };
}