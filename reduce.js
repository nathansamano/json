/* Generic Reduce code for types
 * Nathan Samano
 * February 26, 2015
 */

datafile = require('./types.js');
var types = JSON.parse(datafile);

// Find the type that is weak to Ground
console.log(types.reduce(function(weak, pokemon) {
  return (pokemon.weakness == 'Ground')? pokemon : 'none';
}));
