import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';
import SearchBar from '../SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
              <div className="App-playlist">
                <!-- Add a SearchResults component -->
                <!-- Add a Playlist component -->
              </div>
          </div>
      </div>
    );
  }
}

export default App;
