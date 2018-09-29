import React from 'react';
import Map from 'react-js-google-maps';
import './Appbody.css';

let CanvasJSReact = require('../canvasjs.react.js');
let CanvasJS = CanvasJSReact.CanvasJS;
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

let dataPoints =[];

const Get_Marker_Content = (props) =>{

  let Content_String = "<div style='text-align:center'><h3>"+props.busid+"</h3><hr/><h4>"+props.busname+"</h4></div>";

  return Content_String;
   
}
  
class Appbody extends React.Component{
  constructor(props){

    super(props);
    this.onMapLoad = this.onMapLoad.bind(this);
    this.handleMapOps = this.handleMapOps.bind(this);
    this.state = {
      Markers : null
    }
  }

  onMapLoad(){

    let googlemap =  window.gmaps['GOOGLE-MAP'];

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

          let ID = google_map_marker.id;
          let NAME = google_map_marker.name;

          MAKE_CARD(ID , NAME);

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

  render(){

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
          dataPoints: [
            { x: 10, y: 71 },
            { x: 20, y: 55 },
            { x: 30, y: 50 },
            { x: 40, y: 65 },
            { x: 50, y: 71 },
            { x: 60, y: 68 },
            { x: 70, y: 38 },
            { x: 80, y: 92, indexLabel: "Highest" },
            { x: 90, y: 54 },
            { x: 100, y: 60 },
            { x: 110, y: 21 },
            { x: 120, y: 49 },
            { x: 130, y: 36 }
          ]
        }]
      }

      return(
        <div className="Appbody-Grid-Container">

          <div className="Appbody-Grid-Container__Item">

            <div id="SWITCH_DIV" style={{ width: '100%', height: '100%'}}>
            {this.props.isResponsed ?
            ( 
              <CanvasJSChart options = {options} 
              // onRef={ref => this.chart = ref}
              />
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
        
            <div className="Half-Grid-Item Contry-Detail-Grid-Container">

              <div className="Box-Header Inline-Centered">
                <span>{this.props.cityName}</span>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div className="Contry-Detail-Category"><span>Devices Installed</span></div>
                <div className="Contry-Detail-Category"><span>{this.props.deviceInstalled}</span></div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div className="Contry-Detail-Category"><span>Smoking Severity</span></div>
                <div className="Contry-Detail-Category"><span>{this.props.smokingSeverity}</span></div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div className="Contry-Detail-Category"><span>Good State</span></div>
                <div className="Contry-Detail-Category"><span>{this.props.goodState}</span></div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div className="Contry-Detail-Category"><span>Bad State</span></div>
                <div className="Contry-Detail-Category"><span>{this.props.badState}</span></div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div className="Contry-Detail-Category"><span>Disconnected</span></div>
                <div className="Contry-Detail-Category"><span>{this.props.disconnectedState}</span></div>
              </div>
            </div>

            <div id="CARD_LISTS" className="Half-Grid-Item Usage-Box">
              
            </div>

          </div>
        </div>
      )
  }
}

function MAKE_CARD(ID,NAME) {
  
  let $CARD_BOX = document.body.querySelector('#CARD_LISTS');
 
  let $CONTAINER = document.createElement('div');
  $CONTAINER.classList.add("Card-Box");

  let $ID_DIV = document.createElement('div');
  $ID_DIV.classList.add('Card-Row');

  let $ID_TEXT = document.createElement('span');
  $ID_TEXT.classList.add('Card-Text');

  let $NAME_DIV = document.createElement('div');
  $NAME_DIV.classList.add('Card-Row');

  let $NAME_TEXT = document.createElement('span');
  $NAME_TEXT.classList.add('Card-Text');

  $ID_TEXT.textContent = ID;
  $NAME_TEXT.textContent = NAME;

  $ID_DIV.appendChild($ID_TEXT);
  $NAME_DIV.appendChild($NAME_TEXT);

  $CONTAINER.appendChild($ID_DIV);
  $CONTAINER.appendChild($NAME_DIV);

  $CARD_BOX.appendChild($CONTAINER);  

}

export default Appbody;