
var action = process.argv[2]
var input;

for (i = 3; i < process.argv.length; i++) { 
input =    process.argv[i]
}























var twitterFile = require("./keys.js")
var twitterKeys = twitterFile.twitterKeys

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'EZyMVlN9RlprvaxgjFiEJ4DTG',
  consumer_secret: 'W0XkRbk04nPjyNuV1ecMFkUAIRd1odXPNI91iDHKawZGPclSpD',
  access_token_key: '1491917300-EmlHVl71VZt7Pe8MTtkflnQCurFAuqdRQkkAN1T',
  access_token_secret: 'SOFsvQVHCht2GDAYoq4MV2E6uRRBoqk7Kj4wdyQCFwTvF',
});

var params = { screen_name: 'gmgargantuan', count: '20' };

function viewTweets(err, tweets, response) {

  if (err) {
    console.log(err)
  }

  else {

    for (var i = 0; i < 20; i++) {

      console.log("\n" + tweets[i].user.screen_name);
      console.log(tweets[i].text);
      console.log(tweets[i].created_at)

    }
  }

};
function pullTweets() {
  client.get('https://api.twitter.com/1.1/statuses/home_timeline.json', viewTweets);
}


var spotify = require('spotify');


function spotifyLookup(err, data) {
  if (err) {
    console.log(err)
  }
  else {
    console.log("\n" + data.tracks.items[0].album.artists[0].name)
    console.log(data.tracks.items[0].name)
     console.log(data.tracks.items[0].album.external_urls.spotify)
    console.log(data.tracks.items[0].album.name)
  }
}
 function searchSpotify() {
  spotify.search({ type: 'track', query: input }, spotifyLookup)
 }
  

var request = require("request"); 


var queryUrl = 'http://www.omdbapi.com/?t=' + input +'&y=&plot=short&tomatoes=true&r=json';

function omdbLookup(err, resp, body) {
console.log(queryUrl);

if (!err && resp.statusCode === 200) {

console.log("\n" + JSON.parse(body).Title);
console.log("Rated: " + JSON.parse(body).Rated);
console.log("Released: " + JSON.parse(body).Released);
console.log("IMdb rating: " + JSON.parse(body).imdbRating)
console.log("Country: " + JSON.parse(body).Country)
console.log("Plot: " + JSON.parse(body).Plot)
console.log("Starring: " + JSON.parse(body).Actors)
console.log("Rotten Tomatoes: " + JSON.parse(body).tomatoRating)
console.log(JSON.parse(body).tomatoURL)

}
}


function searchMovies() {
request(queryUrl, omdbLookup)
}




switch (action) {
  case 'my-tweets':
 pullTweets()
    break;

  case 'spotify-this-song':
  searchSpotify()
    break;

    case 'movie-this': 
    searchMovies()
    break;

    default:
    console.log("Invalid Request")
}


