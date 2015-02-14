// filter code for json project

load('types.js');
var types = JSON.parse(TYPES_FILE);

function filter(arr, test) {
  var passed = [];
  for (var i = 0; i < arr.length; i++) {
    if (test(arr[i]))
      passed.push(arr[i]);
  }
  return passed;
}

print(types[1]);       // prints entire fire entry
print(types[1].type);  // <------ HERE LIES THE ANSWER TO MY PROBLEM

print(JSON.stringify(filter(types, function(item) {
  return item.type == "Fire";
})));

/*
// Solve not using the filter function
for (var i = 0; i < types.length; i++) {
  if (types[i].type == "Fire")
    print(types[i]);
}*/

//console.log(types);    // prints everything
//console.log(getFire);  // supposed to print the line where type == "Fire"
