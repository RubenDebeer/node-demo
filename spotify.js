//This module will house all of the spotify API Logic

const SpotifyWebApi = require("spotify-web-api-node");

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
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
        let pos = {
            trackName: '',
            artistName:'',
            popularity:''
        }
        console.log(pos)
        console.log('Search tracks by "Alright" in the track name and "Kendrick Lamar" in the artist name', JSON.stringify(data.body));
        }, function(err) {
        console.log('Something went wrong with retreiving the song!', err);
        });

    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );