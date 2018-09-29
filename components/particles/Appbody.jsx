import React from 'react';
import Map from 'react-js-google-maps';
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

const Get_Marker_Content = (props) =>{

  let Content_String = "<div style='text-align:center'><h3>"+props.busid+"</h3><hr/><h4>"+props.busname+"</h4></div>";

  return Content_String;
   
}

  let dps = []
  let xLength = 0;
  let xVal = 0;
  
class Appbody extends React.Component{

  constructor(props){

    super(props);

    this.onMapLoad = this.onMapLoad.bind(this);
    this.handleMapOps = this.handleMapOps.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onCardClick = this.onCardClick.bind(this);

    this.state = {
      isChartShowing : false
    }

  }

  onMapLoad(){
    let googlemap = window.gmaps['GOOGLE-MAP'];
    
    if(this.props.eventCenter == null){
      
      let pos = new window.google.maps.LatLng(this.props.defaultCenter);
      let marker = new window.google.maps.Marker({
        position: pos,
        map: googlemap.gmap
      });
      googlemap.gmap.setCenter(pos);

      
    }
    else{

      console.log(this.props.markerObj)

      let pos = new window.google.maps.LatLng(this.props.eventCenter);
      let marker = new window.google.maps.Marker({
        position: pos,
        map: googlemap.gmap
      });

      googlemap.gmap.setCenter(pos); 

      this.props.markerObj.forEach((element,index,array)=>{

        let LatLng = new window.google.maps.LatLng({lat : parseFloat(element.lat) , lng : parseFloat(element.long)});

        let google_map_marker = new window.google.maps.Marker({

          position : LatLng,
          draggable : false,
          animation: google.maps.Animation.DROP,
          map: googlemap.gmap

        });

        google_map_marker.id = element.busid
        google_map_marker.name = element.busname
       
        let infoWindow = new window.google.maps.InfoWindow({
          content : Get_Marker_Content(element)
        })

        google_map_marker.addListener('click',()=>{

          infoWindow.open(googlemap.gmap,google_map_marker)

        })

        google_map_marker.setAnimation(window.google.maps.Animation.BOUNCE);

        google_map_marker.setMap(googlemap.gmap);

        
        
      })

    }
  }
  
  handleMapOps(){
    
    let answer = {};
    if(this.props.eventCenter == null){
      answer = {
        zoom : this.props.defaultZoom,
        center : this.props.defaultCenter
      }
    }
    else{
      answer = {
        zoom : this.props.eventZoom,
        center : this.props.eventCenter
      }
    }  
    return answer;
  }
  
  onMarkerClick(flipflop){
    console.log("flipflop : " + flipflop)
    this.setState({
      isChartShowing : flipflop
    },()=>{
      this.onMapLoad()
    })
    
  }

  onCardClick(statusVal,ID){
    console.log("값 : " + statusVal + "ID : " + ID)
    console.log(typeof(statusVal));

    if(xLength <= 15){
      let dataPoint = { x: ++xVal , y:parseInt(statusVal)}
      dps.push(dataPoint)
      xLength++;
    }
    else{
      xLength = xLength - 1;
      dps.shift();
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
            {this.state.isChartShowing ?
            ( 
              <div style={{ width: '100%', height: '100%'}}>
                <CanvasJSChart  options = {options} 
                  onRef={ref => this.chart = ref}
                />
              </div>
            )
            :
            (
              
              <Map 
              id="GOOGLE-MAP"
              apiKey="AIzaSyDcAQgq7DgPXctWtzdbEcpZJU28iEAE8_A"
              mapOptions={
                this.handleMapOps()
              }
              style={{ width: '100%', height: '100%'}}
              onLoad={this.onMapLoad}
              />

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
                <CardBox ChartDrawer={this.onCardClick} markerCardClick={this.onMarkerClick} markers={this.props.markerObj} />
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

export default Appbody;