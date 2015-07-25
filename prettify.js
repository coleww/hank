var toUnicode = require("to-unicode")
var diacrit = require("diacriticize")
var font = ['circled', 'fullWidth', 'parenthesized', 'rockDots', 'smallCaps', 'stroked'][~~(Math.random() * 6)]

module.exports = function(text){
  // half the time, we add some diacritic marks. The other half, we use a unicode font
  return (Math.random() < 0.5) ? diacrit(text, 0.15) : toUnicode(text, font)
}