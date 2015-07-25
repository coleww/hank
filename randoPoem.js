var request = require("request")

// grabs some poems by a random author
module.exports = function(cb){
  var pages = []
  request('http://poetrydb.org/author', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var authors = JSON.parse(body)["authors"]
      var author = authors[~~(Math.random() * authors.length)]
      request('http://poetrydb.org/author/' + author, function(error, response, body){
        if (!error && response.statusCode == 200) {
          var poems = JSON.parse(body)
          var poem = poems[~~(Math.random() * poems.length)]
          cb(poem["lines"])
        }
      })
    }
  })
}
