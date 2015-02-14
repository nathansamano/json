// filter code for json project using node

var data = require('./types.js');
var types = JSON.parse(data);

function filter(arr, test) {
  var passed = [];
  for (var i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      // code to go through the values of arrays
      if (test(arr[i])) {
        console.log(arr[1].weakness);  // <-- here's the syntax to get at array
      }
        passed.push(arr[i]);
    }
  }
  return passed;
}

// print from data with user specified filter(s)
function filterlicious(arg) {
  console.log(filter(types, function(pokemon) {
    return eval(arg); // eval() evaluates a string for script execution
  }));
}

// test to make sure function works properly, it does
//filterlicious('pokemon.type == "Fire"');

console.log('\nExample: pokemon.type == "Fire"\n');

// sexy input your own filter using node; nodejs.org/api/readline.html
var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.question("Apply a filter using JavaScript syntax: ", function(answer) {
  // Log answer to be sure what is being passed
  console.log("Here's you filter:", answer);

  // Here comes the magic, send input as parameter for filter..waitforit..licious
  filterlicious(answer);

  rl.close();
});

//console.log(types);    // prints everything
