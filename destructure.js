var nPlus = require("n-plus-7")
var wordVomit = require("word-vomit")
var poeticVomit = require("poetic-vomit")

module.exports = function(text){
  // do an n-plus-7 maneuver
  // or replace 1/3 of the words with rhyming words
  // or replace 1/3 of the words with words of the same part of speech
  return (Math.random() > 0.33) ? nPlus(text) : (dice > 0.66) ? poeticVomit(text, 0.33) : wordVomit(text, 0.33)
}