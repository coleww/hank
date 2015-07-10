var nPlus = require("n-plus-7")
var wordVomit = require("word-vomit")
var poeticVomit = require("poetic-vomit")

module.exports = function(text){
  return wordVomit(poeticVomit(nPlus(text), 0.3), 0.3)
}