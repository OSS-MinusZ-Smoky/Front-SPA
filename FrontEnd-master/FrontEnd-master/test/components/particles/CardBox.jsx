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
        <div className="Box-Header Inline-Centered">
          <span className="Box-Header__Text">장치 시각화</span>
        </div>
        </div>

        <div id="CARD_LISTS">

          {this.props.markers.map((element)=>{

            return(

              <MyCard key={element.busid} id={element.busid} name={element.busname} doh={element.Doh} city={element.city} clickHandler={this.props.markerCardClick}
              ChartDrawer={this.props.ChartDrawer} isChartShowing={this.props.isChartShowing} />

            )

          })}    
          
        </div>

      </div>
    )
  }
}

export default CardBox