import React from 'react';

class Track extends React.Component{

  constructor(props)
  {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction(isRemoval){
    if(!isRemoval){
      return <a class="Track-action" onClick={this.removeTrack}>-</a>
    }
    else {
      return <a class="Track-action" onClick={this.addTrack}>+</a>
    }
}

addTrack() {
   this.props.onAdd(this.props.track);
 }

 removeTrack() {
   this.props.onRemove(this.props.track);
 }

  render(){
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction(true)}
     </div>

    );
  }
}

export default Track;
