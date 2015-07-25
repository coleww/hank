var request = require("request")
var cheerio = require("cheerio")

// fetch the lyrics to a random song that is in the itunes top 100

module.exports = function(cb){
  var pages = []
  request('http://lyrics.wikia.com/LyricWiki:Top_100', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('li b a').each(function(i, element){
        pages.push('http://lyrics.wikia.com' + $(element).attr('href'))
      });

      pages = pages.filter(function(p){
          return p.indexOf('redlink') === -1
      })
      var page = pages[~~(Math.random() * pages.length)]

      request(page, function (error, response, html) {
        if (!error && response.statusCode == 200) {
          var $ = cheerio.load(html);
          var text = $('.lyricbox').html()
          text = text.replace(/<script>.+<\/script>/g, '').replace(/&apos;/g, "'")
          lines = text.slice(0, text.indexOf('<!')).split('<br>')
          cb(lines)
        }
      })
    }
  })
}