var Twit = require("twit")
var T = new Twit({
    consumer_key: "la2B2hL4PuQn3ShHc1llZtol6"
  , consumer_secret: "n8MpdwDAa9m36hNmEehzwdbmRQEZavtuqcy2XDla8UkLB7WgPs"
  , access_token: "2823130017-87Ne146opB4ONmJj7ySFJQfKcsOSTxzKGu8Q042"
  , access_token_secret: "YwVljy4NTi1kO8wsbkHR1P1PsBrPqVY8wiiqlaQBMmDwQ"
})

module.exports = function(text){
  T.post('statuses/update', { status: text }, function(err, data, response) {
    console.log(err)
  console.log(data)
})
}
