// filter code for json project using node

var data = require('./types.js');
var types = JSON.parse(data);

function filter(arr, test) {
  var passed = [];
  for (var i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      passed.push(arr[i]);
    }
  }
  return passed;
}

// print from data with user specified filter(s)
function filterlicious(arg) {
  console.log(filter(types, function(pokemon) {
    if (arg[0] != 'p' && arg[1] != 'o' && arg[2] != 'k' &&
	    arg[3] != 'e' && arg[4] != 'm' && arg[5] != 'o' &&
	    arg[6] != 'n') return null;
    return eval(arg); // eval() evaluates a string for script execution
  }));
}

// test to make sure function works properly, it does
//filterlicious('pokemon.type == "Fire"');

console.log("\nkeys are:\ntype, super_effective, not_effective, no_effect, weakness, resistance, immune");
console.log('\nExample: pokemon.type == "Fire"\n');

// input your own filter using node; nodejs.org/api/readline.html
var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

// Give the ability to run command after command
var reprompt = function() {
	                         /* This part here is a callback v */
  rl.question("Apply a filter using JavaScript syntax: ", function(answer) {
    // Log answer to be sure what is being passed
    console.log("Here's you filter:", answer);

    // Here comes the magic, send input as parameter for filterlicious
    filterlicious(answer);
    if (answer == "exit")
      rl.close();
    // start back up at reprompt and do it again
    else
      reprompt();
  });
  // prints right after very first prompt not waiting for user to enter their script
 // console.log("Testing to see if this prints before or after reprompting");
};reprompt(); // this is so it calls it the first time & wont' execute once rl closes

//console.log(types);    // prints everything
