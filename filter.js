// filter code for json project

var data = require('./types.js');
var types = JSON.parse(data);

function filter(arr, test) {
  var passed = [];
  for (var i = 0; i < arr.length; i++) {
    if (test(arr[i]))
      passed.push(arr[i]);
  }
  return passed;
}

// print fire
console.log(filter(types, function(item) {
  return item.type == "Fire";
}));


//console.log(types[1]);       // prints entire fire entry
//console.log(types[1].type);  // <------ HERE LIES THE ANSWER TO MY PROBLEM

// Solve not using the filter function
for (var i = 0; i < types.length; i++) {
  if (types[i].type == "Fire")
    console.log(types[i]);
}


// sexy input your own filter using node
var readline = require('readline');

var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.question("Apply a filter using JavaScript syntax: ", function(answer) {
  // Log answer
  console.log("Here's you filter:", answer);

  rl.close();
});

//console.log(types);    // prints everything
