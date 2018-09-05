import React from 'react';
import SharedStyle from '../SharedStyles/SharedStyle.css'
import Appbar from '../particles/Appbar.jsx'
import Appbody from '../particles/Appbody.jsx'

class IndexPage extends React.Component{
  constructor(){
    super();
    this.state = {
      pos : Object,
      contryInput : "",
      contryName : "",
      deviceInstalled : Number,
      smokingSeverity : "",
      goodState : Number,
      badState : Number,
      disconnectedState : Number
    }
    this.handleContryInput = this.handleContryInput.bind(this);
  }
  componentDidMount(){
    
    let CONTRY_INPUT = document.querySelector('#CONTRY-INPUT');
    CONTRY_INPUT.addEventListener('keyup',this.handleContryInput);
    
  }

  handleContryInput(event){

    // fetch() -> Get respose -> lists info by state changing
    if(event.target.value == 'korea'){
      this.setState({
        pos : {
          lat : 37.56667,
          lng : 126.97806
        },
        contryInput : "",
        contryName : "korea",
        deviceInstalled : 1,
        smokingSeverity : "bad",
        goodState : 1,
        badState : 0,
        disconnectedState : 0
      })
    }
   
  }

  render(){
    return(
      <div className="Wrapper">
        <Appbar />
        <Appbody 
        pos={this.state.pos}
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
