import React from 'react';
import Gmap from './Gmap.jsx';
import './Appbody.css';
import CardBox from './CardBox.jsx';
import Mycard from "./MyCard.jsx"

let CanvasJSReact = require('../canvasjs.react.js');
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const canvasContainerStyle = {
  width : "100%",
  height : "100%"
}

let dps = []
let xLength = 20
let xVal = 0

class Appbody extends React.Component{

  constructor(props){

    super(props);

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onCardClick = this.onCardClick.bind(this);

    this.state = {

      isChartShowing : 0,
      showingCardId : "none",
      TimerID : 0,

    }
    
  }
  
  onMarkerClick(sign,TID){

    let showingNumber;

    if(sign === true){
      showingNumber = this.state.isChartShowing
      this.setState({
        isChartShowing : showingNumber + 1,
        TimerID : TID
      })
    }
    else{
      showingNumber = this.state.isChartShowing
      this.setState({
        isChartShowing : showingNumber - 1,
        
      },()=>{
        clearInterval(this.state.TimerID)
        dps = Object.assign([]);
        xVal = 0;
        this.setState({
          TimerID : 'none'
        })
      })
    }

  }

  onCardClick(sign,statusVal,ID){
    console.log("값 : " + statusVal + "ID : " + ID)
    console.log(typeof(statusVal));
    
    if(sign == true){
      if(this.state.showingCardId == 'none'){
        this.setState({
          showingCardId : ID
        })
        STACK_LOGIC(statusVal)
      }
      else if(this.state.showingCardId == ID){
        STACK_LOGIC(statusVal)
      }
      else if(this.state.showingCardId != ID){
        STACK_LOGIC(statusVal)
      }
    }

    this.chart.render()

  }

  render(){
    console.log(this.state.isChartShowing)
      const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title:{
          text: "Live Smoking Chart"
        },
        axisX: {						
      		title: "데이터 통신 횟수"
      	},
      	axisY: {						
      		title: "매 통신당 인식 데이터"
      	},
        data: [{

          type: "line", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: dps

        }]
      }

      return(
        <div className="Appbody-Grid-Container">

          <div className="Appbody-Grid-Container__Item">

            <div id="SWITCH_DIV" style={{ width: '100%', height: '100%'}}>
            {(this.state.isChartShowing > 0) ?
            ( 
              <div style={{ width: '100%', height: '100%'}}>
                <CanvasJSChart  options = {options} 
                  onRef={ref => this.chart = ref}
                />
              </div>
            )
            :
            (
              
                <Gmap center={this.props.center} zoom={this.props.zoom} markers={this.props.isSearched? this.props.markerObj:[]} />
              
            )
            }
			{/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
		         
            </div>
          </div>

          <div className="Appbody-Grid-Container__Item Half-Grid">
            
              <Details 
                cityName={this.props.cityName}
                deviceInstalled={this.props.deviceInstalled}
                smokingSeverity={this.props.smokingSeverity}
                goodState={this.props.goodState}
                badState={this.props.badState}
                disconnectedState={this.props.disconnectedState}
              />
            {this.props.isSearched ?
              (
                <CardBox ChartDrawer={this.onCardClick} markerCardClick={this.onMarkerClick} markers={this.props.markerObj} cityName={this.props.cityName} isChartShowing={this.state.isChartShowing}/>
              )
              :
              (
                <div></div>
              )
            }
          </div>
        </div>
      )
  }
}

const Details = (props) => {
  return(
    <div className="Half-Grid-Item Contry-Detail-Grid-Container">

      <div className="Box-Header Inline-Centered">
        <span>{props.cityName}</span>
      </div>

      <div className="Contry-Detail-Grid-Container__Item">
        <div className="Contry-Detail-Category"><span>Devices Installed</span></div>
        <div className="Contry-Detail-Category"><span>{props.deviceInstalled}</span></div>
      </div>

      <div className="Contry-Detail-Grid-Container__Item">
        <div className="Contry-Detail-Category"><span>Smoking Severity</span></div>
        <div className="Contry-Detail-Category"><span>{props.smokingSeverity}</span></div>
      </div>

      <div className="Contry-Detail-Grid-Container__Item">
        <div className="Contry-Detail-Category"><span>Good State</span></div>
        <div className="Contry-Detail-Category"><span>{props.goodState}</span></div>
      </div>

      <div className="Contry-Detail-Grid-Container__Item">
        <div className="Contry-Detail-Category"><span>Bad State</span></div>
        <div className="Contry-Detail-Category"><span>{props.badState}</span></div>
      </div>

      <div className="Contry-Detail-Grid-Container__Item">
        <div className="Contry-Detail-Category"><span>Disconnected</span></div>
        <div className="Contry-Detail-Category"><span>{props.disconnectedState}</span></div>
      </div>

    </div>
  )
}

function STACK_LOGIC(statusVal) {
  if(xVal <= xLength){
    dps.push({x:xVal , y:parseInt(statusVal)})
    xVal++
    
  }
  else{
    dps.shift()
    dps.push({x:xVal , y:parseInt(statusVal)})
    xVal++
  }
}
export default Appbody;