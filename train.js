var bayes = require('bayes')
var jsonfile = require('jsonfile')
var classifier_path = 'bayes_data/song_poem.json'

module.exports = function(lines, classification){
  var classifier = bayes.fromJson(jsonfile.readFileSync(classifier_path))

  lines.forEach(function(line){
    classifier.learn(line, classification)
  })

  jsonfile.writeFileSync(classifier_path, classifier.toJson())
}