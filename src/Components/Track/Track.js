import React from 'react';

class Track extends React.Component{

  renderAction(){
    if(isRemoval){
      return '-';
    }
    else {
      return '+'
    }
}

  render(){
    return (
      <div class="Track">
        <div class="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        <a class="Track-action">{renderAction}</a>
     </div>

    );
  }
}
