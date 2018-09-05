import React from 'react';
import Map from 'react-js-google-maps';
import './Appbody.css';

const mapOption = {
  zoom: 2,
  center: { lat: 40.463667, lng: -3.74922   }
}

class Appbody extends React.Component{
 
  constructor(props){

    super(props);
    this.onMapLoad = this.onMapLoad.bind(this);
    
  }

  onMapLoad(){

    let googlemap =  window.gmaps['GOOGLE-MAP'];

    let pos = new window.google.maps.LatLng(this.props.pos);
    let marker = new window.google.maps.Marker({
      position: pos,
      map: googlemap.gmap
    });
    googlemap.gmap.setCenter(this.props.pos)
    

  };
  
  render(){
    return(
      <div className="Appbody-Grid-Container">

        <div className="Appbody-Grid-Container__Item">
          <div style={{ width: '100%', height: '100%'}}>
            <Map 
            id="GOOGLE-MAP"
            apiKey="AIzaSyDcAQgq7DgPXctWtzdbEcpZJU28iEAE8_A"
            mapOptions= {mapOption}
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