import React from 'react';
import Map from 'react-js-google-maps';
import './Appbody.css';

class Appbody extends React.Component{
  constructor(props){

    super(props);
    this.onMapLoad = this.onMapLoad.bind(this);
    this.handleMapOps = this.handleMapOps.bind(this);

  }

  onMapLoad(){

    if(this.props.eventCenter != null){

    let googlemap =  window.gmaps['GOOGLE-MAP'];

      let pos = new window.google.maps.LatLng(this.props.eventCenter);
      let marker = new window.google.maps.Marker({
        position: pos,
        map: googlemap.gmap
      });

      googlemap.gmap.setCenter(pos);
    
    }
}
  
  handleMapOps(){
    let answer = {};
    if(this.props.eventZoom == null){
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
    console.log(answer);
    return answer;
  }

  render(){
    
      return(
        <div className="Appbody-Grid-Container">

          <div className="Appbody-Grid-Container__Item">
            <div style={{ width: '100%', height: '100%'}}>
              <Map 
              id="GOOGLE-MAP"
              apiKey="AIzaSyDcAQgq7DgPXctWtzdbEcpZJU28iEAE8_A"
              mapOptions={
                this.handleMapOps()
              }
              style={{ width: '100%', height: '100%'}}
              onLoad={this.onMapLoad}
              />
            </div>
          </div>

          <div className="Appbody-Grid-Container__Item Half-Grid">
        
            <div className="Half-Grid-Item Contry-Detail-Grid-Container">

              <div className="Box-Header Inline-Centered">
                <span>{this.props.contryName}</span>
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

            <div className="Half-Grid-Item Usage-Box">
              <div className="Box-Header Inline-Centered">
                <span>Usage</span>  
              </div>
              <div className="Usage-Box-Item">
                <p><span>Click The Search Input.</span></p>
              </div>
              <div className="Usage-Box-Item">
                <p>Type Contry Name in English.</p>
              </div>
              <div className="Usage-Box-Item">
                <p>Press 'Enter' key </p>
              </div>
            </div>

          </div>
        </div>
      )
  }
}

export default Appbody;