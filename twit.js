var twitterPackage = require('twitter')
var fs = require('fs')

var secret = {
   consumer_key: '',
   consumer_secret: '',
   access_token_key: '',
   access_token_secret: ''
}

var Twitter = new twitterPackage(secret)
var re = /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/g

Twitter.stream('statuses/filter', {track: '#ethereum'}, function(stream) {
  stream.on('data', function(tweet) {
    //fs.appendFileSync("./url.js", tweet.text+"\n"+tweet.text.match(re)+"\n\n")
    console.log(data)
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});




