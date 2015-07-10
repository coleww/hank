module.exports = function(a, b){
  var connections = []
  a.forEach(function(aline){
    aline.split(" ").forEach(function(word){
      word = word.toLowerCase()
      b.forEach(function(bline){
        var match
        if((match = bline.toLowerCase().indexOf(word)) !== -1){
          console.log(word, aline, bline)
          var mash = aline.slice(0, aline.toLowerCase().indexOf(word)) + bline.slice(match)
          connections.push(mash)
        }
      })
    })
  })
  return connections
}
