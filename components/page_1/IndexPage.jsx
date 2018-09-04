import React from 'react';
import SharedStyle from '../SharedStyles/SharedStyle.css'
import Appbar from '../particles/Appbar.jsx'


class IndexPage extends React.Component{
  render(){
    return(
      <div className="Wrapper">
        <Appbar />
      </div>
      
    )
  }
}

export default IndexPage;