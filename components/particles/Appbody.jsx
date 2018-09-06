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

          <div className="Appbody-Grid-Container__Item">

            <div className="Contry-Detail-Grid-Container">

              <div className="Contry-Detail-Grid-Container__Header Inline-Centered">
                <span>{this.props.contryName}</span>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div>Devices Installed</div>
                <div>{this.props.deviceInstalled}</div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div>Smoking Severity</div>
                <div>{this.props.smokingSeverity}</div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div>Good State</div>
                <div>{this.props.goodState}</div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div>Bad State</div>
                <div>{this.props.badState}</div>
              </div>

              <div className="Contry-Detail-Grid-Container__Item">
                <div>Disconnected</div>
                <div>{this.props.disconnectedState}</div>
              </div>
            </div>

          </div>
        </div>
      )
  }
}

export default Appbody;