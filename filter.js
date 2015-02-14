// filter code for json project using node

var data = require('./types.js');
var types = JSON.parse(data);

function filter(arr, test) {
  var passed = [];
  for (var i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      // code to go through the values of arrays
      if (test(arr[i]) && typeof(arr[i].weakness) == 'object') {
        console.log("RECOGNIZES OBJECT");
	// push the whole array
//	for (var j = 0; j < arr[i].weakness.length; j++) {
//          passed.push(arr[i].weakness[j]);
//	}
      }
        console.log(arr[1].weakness + test(arr[i]));  // <-- here's the syntax to get at array
        passed.push(arr[i]);
    }
  }
  return passed;
}

// print from data with user specified filter(s)
function filterlicious(arg) {
  console.log(filter(types, function(pokemon) {
    /*if (arg.indexOf("weakness." > -1)) {
      for (var i = 0; i < pokemon.weakness.length; i++) {
        if (pokemon.weakness[i] == arg.replace("pokemon.weakness == ", "")) {
	  return eval("pokemon.weakness[i]");
	}
      }
    }
    else {
      */
       if (arg[0] != 'p' && arg[1] != 'o' && arg[2] != 'k' &&
	   arg[3] != 'e' && arg[4] != 'm' && arg[5] != 'o' &&
	   arg[6] != 'n') return null;
       return eval(arg); // eval() evaluates a string for script execution
   // }
  }));
}

// test to make sure function works properly, it does
//filterlicious('pokemon.type == "Fire"');

console.log("\nkeys are:\ntype, super_effective, not_effective, no_effect, weakness, resistance, immune");
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
