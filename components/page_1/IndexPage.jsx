import React from 'react';
import SharedStyle from '../../public/Styles/SharedStyle.css';
import Appbar from '../particles/Appbar.jsx';
import Appbody from '../particles/Appbody.jsx';

class IndexPage extends React.Component{
  constructor(){
    super();
    this.state = {

      cityInput : "",
      cityName : "Searching...",
      deviceInstalled : "None",
      smokingSeverity : "None",
      goodState : "None",
      badState : "None",
      disconnectedState : "None",
      defaultZoom : 8,
      defaultCenter : {lat : 37.541 , lng : 126.986},
      eventZoom : null,
      eventCenter : null,
      isResponsed : false,
      markerPos : null,

    }
    this.handleContryInput = this.handleContryInput.bind(this);
  }
  componentDidMount(){
    
    let CONTRY_INPUT = document.querySelector('#CONTRY-INPUT');
    CONTRY_INPUT.addEventListener('keyup',this.handleContryInput);
    CONTRY_INPUT.addEventListener('touchend',this.handleContryInput);
     
  }

  handleContryInput(event){
    
    // fetch() -> Get respose -> lists info by state changing
    if(event.keyCode != 13){
      this.setState({
        cityInput : event.target.value,
        cityName : "Searching...",
        deviceInstalled : "None",
        smokingSeverity : "None",
        goodState : "None",
        badState : "None",
        disconnectedState : "None",
        eventZoom : null,
        eventCenter : null,
        isResponsed : false,
        markerPos : null,
      })
    }
    else if(event.keyCode == 13){

      fetch('http://18.191.27.239:9999?city='+this.state.cityInput).then((response)=>{
      let Jres = response.json();
      return Jres;
    }).then((Jres)=>{
      if(Jres.status == 200){

        const resCityName = Jres.result2[0].city
        const resInstalled = parseInt(Jres.result2[0].num)
        const resGood = parseInt(Jres.result2[0].good_status)
        const resBad = parseInt(Jres.result2[0].bad_status)
        const resDiscon = parseInt(Jres.result2[0].disconnect)
        const resLat = parseFloat(Jres.result2[0].lat)
        const resLng = parseFloat(Jres.result2[0].long)

        let Severity;
        if((resBad / resInstalled <= 0.2)){
          Severity = "Very Good" 
        }
        else if(0.2 < (resBad / resInstalled) <= 0.4){
          Severity = "Good" 
        }
        else if(0.4 < (resBad / resInstalled) <= 0.6){
          Severity = "Normal" 
        }
        else if(0.6 < (resBad / resInstalled) <= 0.8){
          Severity = "Bad" 
        }
        else if(0.8 < (resBad / resInstalled) <= 1){
          Severity = "Very Bad" 
        }
         
        this.setState({
          cityName : resCityName,
          deviceInstalled : resInstalled,
          smokingSeverity : Severity,
          goodState : resGood,
          badState : resBad,
          disconnectedState : resDiscon,
          defaultZoom : null,
          defaultCenter : null,
          eventZoom : 13,
          eventCenter : {lat : resLat , lng : resLng},
          isResponsed : false,
          markerPos : Jres.result1
        })
      }
    }) 
    }
    
  }

  render(){

      return(

        <div className="Wrapper">
          <Appbar brand="SMOKY" />
          <Appbody
          defaultCenter={this.state.defaultCenter}
          defaultZoom={this.state.defaultZoom}
          eventCenter={this.state.eventCenter}
          eventZoom={this.state.eventZoom}
          cityName={this.state.cityName}
          deviceInstalled={this.state.deviceInstalled}
          smokingSeverity={this.state.smokingSeverity}
          goodState={this.state.goodState}
          badState={this.state.badState}
          disconnectedState={this.state.disconnectedState}
          isResponsed={this.state.isResponsed}
          markerObj={this.state.markerPos}
          />
        </div>
        
      )
  

  }
}


export default IndexPage;
