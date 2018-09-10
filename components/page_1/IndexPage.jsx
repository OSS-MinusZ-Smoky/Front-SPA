import React from 'react';
import SharedStyle from '../../public/Styles/SharedStyle.css';
import Appbar from '../particles/Appbar.jsx';
import Appbody from '../particles/Appbody.jsx';

let myHeaders = new Headers();
let fetchUrl = 'http://18.191.27.239:8888/country=';

const myInit =
 { 
    method: 'GET',        
    headers: myHeaders,                        
    cache: 'default'              
 };

class IndexPage extends React.Component{
  constructor(){
    super();
    this.state = {
      contryInput : "",
      contryName : "Searching...",
      deviceInstalled : "None",
      smokingSeverity : "None",
      goodState : "None",
      badState : "None",
      disconnectedState : "None",
      defaultZoom : 2,
      defaultCenter : {lat : 40.463667 , lng : -3.74922},
      eventZoom : null,
      eventCenter : null,
      
    }
    this.handleContryInput = this.handleContryInput.bind(this);
  }
  componentDidMount(){
    
    let CONTRY_INPUT = document.querySelector('#CONTRY-INPUT');
    CONTRY_INPUT.addEventListener('keyup',this.handleContryInput);
    
  }

  handleContryInput(event){
    
    // fetch() -> Get respose -> lists info by state changing
    if(event.keyCode == 13 && this.state.eventZoom){
      
      let HTTP_REQUEST = new XMLHttpRequest();
      HTTP_REQUEST.open('GET','/go/?contry='+this.state.contryName,true);
      HTTP_REQUEST.send(null);
      window.location.href = './go/?contry='+this.state.contryName
      
    }

    if(event.target.value.length >= 3 && event.keyCode != 13){

      fetch(fetchUrl+event.target.value,myInit).then((response)=>{
        let Jres = response.json();
        return Jres;
        }).then((Jres) => {
          const responsePos = {
            lat : parseFloat(Jres[0].lat),
            lng : parseFloat(Jres[0].long)
          }
          this.setState({
            eventZoom : 6,
            eventCenter : responsePos,
            contryName : Jres[0].name,
            deviceInstalled : Jres[0].num,
            smokingSeverity : Jres[0].status,
            defaultZoom : null,
            defaultCenter : null,
          })
          console.log(this.state.pos)
        });

    }
    else if(event.target.value.length == 0 && event.keyCode != 13){

      this.setState({

        defaultZoom : 2,
        defaultCenter : {lat : 40.463667 , lng : -3.74922},
        eventZoom : null,
        eventCenter : null,
        contryName : "Searching...",
        deviceInstalled : "None",
        smokingSeverity : "None"

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
          eventZoom={this.state.eventZoom}
          eventCenter={this.state.eventCenter}
          contryName={this.state.contryName}
          deviceInstalled={this.state.deviceInstalled}
          smokingSeverity={this.state.smokingSeverity}
          goodState={this.state.goodState}
          badState={this.state.badState}
          disconnectedState={this.state.disconnectedState}
          />
        </div>
        
      )
  

  }
}


export default IndexPage;
