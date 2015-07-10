var toUnicode = require("to-unicode")
var diacrit = require("diacriticize")
var font = ['circled', 'fullWidth', 'parenthesized', 'rockDots', 'smallCaps', 'stroked'][~~(Math.random() * 6)]
module.exports = function(text){
  return diacrit(toUnicode(text, font), 0.05)
}