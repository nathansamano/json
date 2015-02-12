var TYPES_FILE = "[\n " + [
'{ "type": "Normal", "super_effective": "", "not_effective": ["Rock", "Steel"], "no_effect": "Ghost", "weakness": "Fighting", "immune": "Ghost" }',
'{ "type": "Fire", "super_effective": ["Grass", "Ice", "Bug", "Steel"], "not_effective": ["Fire", "Water", "Rock", "Dragon"], "weakness": ["Water", "Ground", "Rock"], "resistance": ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"] }',

'{ "type": "Fairy", "super_effective": ["Fighting", "Dragon", "Dark"], "not_effective": ["Water", "Poison", "Steel"], "weakness": ["Poison", "Steel"], "resistance": ["Fighting", "Bug", "Dark"], "immune": "Dragon" }
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = TYPES_FILE ;
