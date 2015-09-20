var destructure = require('./destructure')
var wordfilter = require("wordfilter")
var prettify = require('./prettify')

var Wordnik = require('wordnik');

var wn = new Wordnik({
    api_key: '22a201c39ce6403ec02a10baec5098bc885a6b3900cae75db'
});

module.exports = function (toot_text, cb) {
  var offers = toot_text.split(" ").sort(function(a, b){
    return b.length - a.length; // ASC -> a - b; DESC -> b - a
  }).filter(function (a) {
    return a.indexOf('@') === -1
  })

  wn.word(offers[0].replace(/\W/g, ''), {
      useCanonical: false
    , includeSuggestions: true
  }, function(e, word) {
    word.topExample({
        useCanonical: false, limit: 1
    }, function (e, ex) {
        console.log(e, ex)
        if(ex){
      var other = ex.text
      var newish = destructure(other)
      console.log(newish)

      if (newish.length > 140) {
        if (Math.random() < 0.5) {
          newish = newish.split(" ").filter(function (x, i) {
            return i % 2 === 0
          }).join(" ")
        } else {
          var tmp = newish.substr(0, 100).split(" ")
          tmp.pop()
          newish = tmp.join(" ")
        }
      }

      if(!wordfilter.blacklisted(newish)){
        console.log("DOING IT")
        cb(prettify(newish))
      } else {
        console.log("bonk")
      }
        }
    });
  });
}
