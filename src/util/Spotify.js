let accessToken='';
const clientID='e6eb4a40bad540e3acdaf6fa6619aa03';
// const redirectUri = 'http://SpotPlayGen.surge.sh';
const redirectUri = 'http://localhost:3000';
const Spotify={
  getAccessToken(){
    if(accessToken)
    {
      return accessToken;
    }
  const accessTokenId = window.location.href.match(/access_token=([^&]*)/);
  const expirationTime = window.location.href.match(/expires_in=([^&]*)/);

  if(accessTokenId && expirationTime){
    accessToken = accessTokenId[1];
    let expiresIn= Number(expirationTime[1]);

    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
    return accessToken;
  }
  else{
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  },

  search(term) {
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    Spotify.getAccessToken();
    return fetch(searchUrl, {
        headers: {
        Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        return response.json()}).then(jsonResponse => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }
        })
      });
  },


savePlaylist(playlistName, trackURIs) {
    if(!playlistName || !trackURIs) {
      return;
    }
    accessToken = Spotify.getAccessToken();
    let headers = {
       'Authorization': `Bearer ${accessToken}`,
    };

    let userID;
    return fetch('https://api.spotify.com/v1/me', { headers: headers }
  ).then(response => response.json()
  ).then(jsonResponse => {
    userID = jsonResponse.id;
    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({ name: playlistName })
    }).then(response => response.json()
    ).then(jsonResponse => {
      let playlistID = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackURIs })
      });
    })
  });
  }
};


export default Spotify;
