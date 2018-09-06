import React from 'react';
import { Redirect } from 'react-router-dom';
import SharedStyle from '../SharedStyles/SharedStyle.css';
import Appbar from '../particles/Appbar.jsx';
import Appbody from '../particles/Appbody.jsx';

class MainPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      selectedContry : this.props.location.state.contry
    }
    
  }
  render(){
    return(
      <div className="Wrapper">
        <Appbar usedIn="main" contry={this.state.selectedContry}/>
        <Appbody usedIn="main" />
      </div>
    )
  }
}

export default MainPage;