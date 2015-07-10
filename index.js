var topHundo = require('./topHundo')
var randoPoem = require('./randoPoem')
var destructure = require('./destructure')
var wordfilter = require("wordfilter")

module.exports = function(text){
  return
var prettify = require('./prettify')
var toot = require('./toot')

// MIGHT AS WELL TRAIN A THING WHILE WE'RE AT IT? EH?

topHundo(function(songLines){
  console.log(songLines.length)
  randoPoem(function(poemLines){
    console.log(poemLines.length)
    aLines = songLines//.filter(function(l){return l.length && filter(l)})
    bLines = poemLines//.filter(function(l){return l.length && filter(l)})
    console.log(aLines.length, bLines.length)
    var line = aLines[~~(Math.random() * aLines.length)] + ' ' + bLines[~~(Math.random() * bLines.length)]
    var newish = destructure(line)
    console.log(line)
    console.log(newish)
    if(!wordfilter.blacklisted(newish)){
      console.log("DOING IT")
      toot(prettify(newish))
    } else {
      console.log("bonk")
    }
  })
})
