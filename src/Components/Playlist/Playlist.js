import React from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component{
  render(){
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        <!-- tracklist component -->
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
