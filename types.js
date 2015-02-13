var TYPES_FILE = "[\n " + [
'{ "type": "Normal", "not_effective": ["Rock", "Steel"], "no_effect": "Ghost", "weakness": "Fighting", "immune": "Ghost" }',
'{ "type": "Fire", "super_effective": ["Grass", "Ice", "Bug", "Steel"], "not_effective": ["Fire", "Water", "Rock", "Dragon"], "weakness": ["Water", "Ground", "Rock"], "resistance": ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"] }',
'{ "type": "Water", "super_effective": ["Fire", "Ground", "Rock"], "not_effective": ["Water", "Grass", "Dragon"], "weakness": ["Grass", "Electric"], "resistance": ["Fire", "Water", "Ice", "Steel"] }',
'{ "type": "Grass", "super_effective": ["Water", "Ground", "Rock"], "not_effective": ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon", "Steel"], "weakness": ["Fire", "Ice", "Poison", "Flying", "Bug"], "resistance": ["Water", "Grass", "Electric", "Ground"] }',
'{ "type": "Electric", "super_effective": ["Water", "Flying"], "not_effective": ["Grass", "Electric", "Dragon"], "no_effect": "Ground", "weakness": "Ground", "resistance": ["Electric", "Flying", "Steel"] }',
'{ "type": "Ice", "super_effective": ["Grass", "Ground", "Flying", "Dragon"], "not_effective": ["Fire", "Water", "Ice", "Steel"], "weakness": ["Fire", "Fighting", "Rock", "Steel"], "resistance": "Ice" }',
'{ "type": "Fighting", "super_effective": ["Normal", "Ice", "Rock", "Dark", "Steel"], "not_effective": ["Poison", "Flying", "Psychic", "Bug", "Fairy"], "no_effect": "Ghost", "weakness": ["Flying", "Psychic", "Fairy"], "resistance": ["Bug", "Rock", "Dark"] }',
'{ "type": "Poison", "super_effective": ["Grass", "Fairy"], "not_effective": ["Poison", "Ground", "Rock", "Ghost"], "no_effect": "Steel", "weakness": ["Ground", "Psychic"], "resistance": ["Grass", "Fighting", "Poison", "Bug", "Fairy"] }',
'{ "type": "Ground", "super_effective": ["Fire", "Electric", "Poison", "Rock", "Steel"], "not_effective": ["Grass", "Bug"], "no_effect": "Flying", "weakness": ["Water", "Grass", "Ice"], "resistance": ["Poison", "Rock"], "immune": "Electric" }',
'{ "type": "Flying", "super_effective": ["Grass", "Flying", "Bug"], "not_effective": ["Electric", "Rock", "Steel"], "weakness": ["Electric", "Ice", "Rock"], "resistance": ["Grass", "Fighting", "Bug"], "immune": "Ground" }',
'{ "type": "Psychic", "super_effective": ["Fighting", "Poison"], "not_effective": ["Psychic", "Steel"], "no_effect": "Dark", "weakness": ["Bug", "Ghost", "Dark"], "resistance": ["Fighting", "Psychic"] }',
'{ "type": "Bug", "super_effective": ["Grass", "Psychic", "Dark"], "not_effective": ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel", "Fairy"], "weakness": ["Fire", "Flying", "Rock"], "resistance": ["Grass", "Fighting", "Ground"] }',
'{ "type": "Rock", "super_effective": ["Fire", "Ice", "Flying", "Bug"], "not_effective": ["Fighting", "Ground", "Steel"], "weakness": ["Water", "Grass", "Fighting", "Ground", "Steel"], "resistance": ["Normal", "Fire", "Poison", "Flying"] '},
'{ "type": "Ghost", "super_effective": ["Psychic", "Ghost"], "not_effective": "Dark", "no_effect": "Normal", "weakness": ["Ghost", "Dark"], "resistance": ["Poison", "Bug"], "immune": ["Normal", "Fighting"] }',
'{ "type": "Dragon", "super_effective": "Dragon", "not_effective": "Steel", "no_effect": "Fairy", "weakness": ["Ice", "Dragon", "Fairy"], "resistance": ["Fire", "Water", "Grass", "Electric"] }',
'{ "type": "Dark", "super_effective": ["Pyschic", "Ghost"], "not_effective": ["Fighting", "Dark", "Fairy"], "weakness": ["Fighting", "Bug", "Fairy"], "resistance": ["Ghost", "Dark"], "immune": "Psychic" }',
'{ "type": "Steel", "super_effective": ["Ice", "Rock", "Fairy"], "not_effective": ["Fire", "Water", "Electric", "Steel"], "weakness": ["Fire", "Fighting", "Ground"], "resistance": ["Noraml", "Grass", "Ice", "Flying", "Psychic", "Bug", "Rock", "Dragon", "Steel", "Fairy"], "immune": "Poison" }',
'{ "type": "Fairy", "super_effective": ["Fighting", "Dragon", "Dark"], "not_effective": ["Water", "Poison", "Steel"], "weakness": ["Poison", "Steel"], "resistance": ["Fighting", "Bug", "Dark"], "immune": "Dragon" }'
].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = TYPES_FILE ;
