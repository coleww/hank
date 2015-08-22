var topHundo = require('./topHundo')
var randoPoem = require('./randoPoem')
var train = require('./train')
var destructure = require('./destructure')
var wordfilter = require("wordfilter")
var prettify = require('./prettify')
var toot = require('./toot')

var quiddle = require('./quiddle')


topHundo(function(songLines){
  console.log("SONGS:", songLines.length)
  randoPoem(function(poemLines){
    console.log("POEMS:", poemLines.length)
    console.log("starting training")
    train(songLines, "song")
    train(poemLines, "poem")
    var line = songLines[~~(Math.random() * songLines.length)] + ' ' + poemLines[~~(Math.random() * poemLines.length)]
    console.log(line)
    var newish = destructure(line)
    console.log(newish)
    if(!wordfilter.blacklisted(newish)){
      console.log("DOING IT")
        toot(prettify(newish))
        quiddle()
    } else {
      console.log("bonk")
    }
  })
})



quiddle()
