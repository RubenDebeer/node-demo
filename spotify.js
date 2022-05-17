//This module will house all of the spotify API Logic

const SpotifyWebApi = require("spotify-web-api-node");

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId: '4ff906ba735d4b0d87a81cd82c98f431',
  clientSecret: '53b500431122496c8dd1b07d3c93a662',
});


spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);

     
        // Search tracks whose artist's name contains 'Kendrick Lamar', and track name contains 'Alright'
        spotifyApi.searchTracks('artist:Jack Harlow track:First Class ')
        .then(function(data) {
      
        console.log(JSON.stringify(data.body.tracks.items[0].name));
        }, function(err) {
        console.log('Something went wrong with retreiving the song!', err);
        });

    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );