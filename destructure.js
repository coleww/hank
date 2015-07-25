var nPlus = require("n-plus-7")
var wordVomit = require("word-vomit")
var poeticVomit = require("poetic-vomit")
var newSlang = require("new-slang")

module.exports = function(text){
  // roll some dice and maybe perform some transforms
  var the_odds = 0.33
  var toot = text
  if (Math.random() < the_odds) toot = nPlus(toot)
  if (Math.random() < the_odds) toot = poeticVomit(toot, 0.33)
  if (Math.random() < the_odds) toot = wordVomit(toot, 0.33)
  if (Math.random() < the_odds) toot = newSlang(toot, 0.33)

  return toot
}