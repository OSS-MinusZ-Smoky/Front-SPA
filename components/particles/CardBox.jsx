import React from 'react'
import './CardBox.css'
import MyCard from './MyCard.jsx'

class CardBox extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <div className="Half-Grid-Item Usage-Box">

        <div className="Card_Search_Box">
          <input id="CARD_SEARCH" type="text" placeholder="Type Marker ID ..."/>
        </div>

        <div id="CARD_LISTS">
          {this.props.Markers.map((element)=>{
            return(
              <MyCard key={element.busid} id={element.busid} name={element.busname} />
            )
          })}    
          
        </div>

      </div>
    )
  }
}

export default CardBox