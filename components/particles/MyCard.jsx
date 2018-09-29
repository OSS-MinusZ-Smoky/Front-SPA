import React from 'react';
import './MyCard.css'

class MyCard extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="Card-Box">
        <div className="Card-Row">
          <span className="Card-Text">{this.props.id}</span>
        </div>
        <div className="Card-Row">
          <span className="Card-Text">{this.props.name}</span>
        </div>
      </div>
    )
  }
}

export default MyCard