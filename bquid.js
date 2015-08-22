var quidprofollow = require('quidprofollow')
module.exports =  function () {
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
