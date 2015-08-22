var Twit = require("twit")
var songOrDance = require('songOrDance')

var T = new Twit({
    consumer_key: "SPIDERS!!!!",
    consumer_secret: "SPIDERS!!!!",
    access_token: "SPIDERS!!!!",
    access_token_secret: "SPIDERS!!!!"
})

module.exports.toot = function(text){
  T.post('statuses/update', { status: text }, function(err, data, response) {
    console.log(err)
    console.log(data)
  })
}

module.exports.getReplies = function (cb) {
  T.get('statuses/user_timeline', {screen_name: 'pataphysyllabus'}, function (err, datum, response) {
    if (err) {
      throw err
    } else {
      T.get('statuses/mentions_timeline', {since_id: datum[0].id_str}, function (err, data, response){
        if (err) {
          throw err
        } else {
          cb() // we got our mentions by now, so it is safe to toot other things too i guess... the replies will take at least 4 minutes to fire off, so it should be ok...
          if (data.length) {
            data.forEach(function (toot, i) {
              console.log('processing', toot.text)
              songOrDance(toot.text, function (reply) {
                console.log('@' + toot.user.screen_name + ' ' + reply)
                var text = '@' + toot.user.screen_name + ' ' + reply
                var id = toot.id_str
                setTimeout(function () {
                  console.log('firing off:', id, text)
                  T.post('statuses/update', {status: text, in_reply_to_status_id: id}, function (err, data, response) {
                    if (err) {
                      throw err
                    } else {
                      console.log(data)
                    }
                  })
                }, 60 * 1000 * 3 * (i + 1))
              })
            })
          }
        }
      })
    }
  })
}
