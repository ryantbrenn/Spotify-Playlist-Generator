import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={search:""};
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

handleTermChange(e)
  {
    this.setState({search:e.target.value});
  }

search(){
  this.props.onSearch(this.state.search);
}


render(){
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
          <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
