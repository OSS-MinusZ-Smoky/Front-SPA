import React from 'react';
import GoogleMapReact from 'google-maps-react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const mapStyle = {
  width : '100%',
  height : '500px',
  position : 'relative'
}

const mapStyle2 ={
  width : '100%',
  height : '100%',
  position : 'relative'
}
class MapContainer extends React.Component {

  constructor(props){

    super(props)

    this.state = {

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

    }

    this.onMapClicked = this.onMapClicked.bind(this)
    this.onMarkerClick = this.onMarkerClick.bind(this)

  }
  onMapClicked(props){
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  onMarkerClick(props,marker,e){
    console.log(marker)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  render() {
    return (
      <div style={mapStyle}>
        <Map style={mapStyle2} google={this.props.google} center={this.props.center} zoom={this.props.zoom}
        initialCenter={this.props.center}
        onClick={this.onMapClicked}
         >
  
          {this.props.markers.map((element)=>{
            return(
              <Marker key={element.busid} title={element.busid}
              name={element.busname}
              position={{lat: element.lat, lng: element.long}}
              onClick={this.onMarkerClick}
              />
            )
          })}

          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.title}</h3>
              <hr/>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
        </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDcAQgq7DgPXctWtzdbEcpZJU28iEAE8_A",
  language: "ko-kr",
})(MapContainer)