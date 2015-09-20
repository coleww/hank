var topHundo = require('./topHundo')
var randoPoem = require('./randoPoem')
//var train = require('./train')
var destructure = require('./destructure')
var wordfilter = require("wordfilter")
var makeIsCool = require('iscool')
var isCool = makeIsCool()
var prettify = require('./prettify')
var addEnder = require('add-ender')
var capitalize = require('capitalize')

var toot = require('./toot').toot

var quiddle = require('./quiddle')
var getReplies = require('./toot').getReplies


quiddle()
getReplies(doThatHank)


function doThatHank () {
  topHundo(function(songLines){
    console.log("SONGS:", songLines.length)
    randoPoem(function(poemLines){
      console.log("POEMS:", poemLines.length)
      console.log("starting training")
      //train(songLines, "song")
      //train(poemLines, "poem")
      var line = songLines[~~(Math.random() * songLines.length)] + ' ' + poemLines[~~(Math.random() * poemLines.length)]
      console.log(line)
      var newish = destructure(line)
      console.log(newish)
      if(!wordfilter.blacklisted(newish) && isCool(newish)){
        console.log("DOING IT")
          toot(addEnder(capitalize(prettify(newish).toLowerCase()) ))
      } else {
        console.log("bonk")
      }
    })
  })
}
