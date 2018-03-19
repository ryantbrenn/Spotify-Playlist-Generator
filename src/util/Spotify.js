const accessToken;
const clientID:'e6eb4a40bad540e3acdaf6fa6619aa03';
const redirectUri = 'http://localhost:3000/';
const Spotify={
  getAccessToken(){
    if(accessToken)
    {
      return accessToken;
    }
  const accessTokenId = window.location.href.match(/access_token=([^&]*)/);
  const expirationTime = window.location.href.match(/expires_in=([^&]*)/);

  if(accessTokenId&&expirationTime){
    accessToken = accessTokenId[1];
    let expiresIn= Number(expirationTime[1]);

    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
    return accessToken;
  }
  else{
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  }



  }


};












export default Spotify;
