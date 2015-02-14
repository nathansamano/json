// filter code for json project

var data = require('./types.js');
var types = JSON.parse(data);

function filter(arr, type) {
  var passed = [];
  for (var i = 0; i < arr.length; i++) {
    if (type(arr[i]))
      passed.push(type[i]);
  }
  return passed;
}

// get the whole entry where type is Fire (I know this is wrong)
var getFire = types.filter(function(field) {
  if (field == "Fire")
    return types.field;
});

// print out one entry
console.log(JSON.stringify(filter(types, function(key) {
  return key.type == "Fire";
})));

console.log(types[1].type);  // <------ HERE LIES THE ANSWER TO MY PROBLEM

//console.log(types);    // prints everything
//console.log(getFire);  // supposed to print the line where type == "Fire"
