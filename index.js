var topHundo = require('./topHundo')
var randoPoem = require('./randoPoem')
var train = require('./train')
var destructure = require('./destructure')
var wordfilter = require("wordfilter")
var prettify = require('./prettify')
var toot = require('./toot')
var quidprofollow = require('quidprofollow');
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




function quiddle () {
quidprofollow(
    {
        twitterAPIKeys: {
            consumer_key: "1123KEYS124124"
            , consumer_secret: "n8MpKEYSB7WgPs"
            , access_token: "2823KEYS"
            , access_token_secret: "YwKEYSMmDwQ"
        }
    },
    function done(error, followed, unfollowed) {
        console.log('Followed:', followed);
        console.log('Unfollowed:', unfollowed);
    }
);
}
