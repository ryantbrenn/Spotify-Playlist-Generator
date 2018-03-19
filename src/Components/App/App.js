import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {searchResults:[],
                  playlistName:'shravan',
                  playlistTracks:[{name:'hosadondu hesaridu',
                                   artist: 'karthik',
                                   album:'gaanabajana',
                                   id:0},
                                  {name:'hosadondu hesaridu',
                                   artist: 'karthik',
                                   album:'gaanabajana',
                                   id:1
                                  }]
                 };
   this.addTrack = this.addTrack.bind(this);
   this.removeTrack = this.removeTrack.bind(this);
   this.updatePlaylistName = this.updatePlaylistName.bind(this);
   this.savePlaylist = this.savePlaylist.bind(this);
   this.search = this.search.bind(this);
  }

addTrack(track){
  let trackStore = false;
  for(let i = 0; i < this.state.playlistTracks.length ; i++)
  {
    if(track.id===this.state.playlistTracks[i].id)
    {
      trackStore = true;
    }
  }

  if(!trackStore)
  {
    this.setState({
      playlistTracks:this.state.playlistTracks.push({
        name:track.name,
        artist: track.artist,
        album:track.album,
        id:track.id
      }
    )
  });

  }
}

removeTrack(track){

  for(let i = 0; i < this.state.playlistTracks.length ; i++)
  {
    if(track.id===this.state.playlistTracks[i].id)
    {
      let index = this.state.playlistTracks.indexOf(track.id);
      if(index>-1)
        this.setState({
          playlistTracks:this.state.playlistTracks.splice(index,1)
        });

    }
  }
}

updatePlaylistName(name){
  this.setState({
      playlistName:name
  });
}

savePlaylist(){
  let trackURIs=[];

  for(let i = 0; i < this.state.playlistTracks.length ; i++)
  {
    trackURIs.push(this.state.playlistTracks[i].uri);
  }
}

search(search){
  console.log(search);
}


render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
              <div className="App-playlist">
                <SearchResults
                 searchResults={this.state.searchResults}
                 onAdd={this.addTrack}
                 onSearch={this.search}/>
                <Playlist
                 playlistName={this.state.playlistName}
                 playlistTracks={this.state.playlistTracks}
                 onRemove={this.removeTrack}
                 onNameChange={this.updatePlaylistName}
                 onSave={this.savePlaylist}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
