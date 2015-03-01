/* Nathan Samano
 * Using map function on dataset
 */

var data = require('./types.js');
var types = JSON.parse(data);

// maps everything
console.log(types.map(function(val) {
  return val;
}));
