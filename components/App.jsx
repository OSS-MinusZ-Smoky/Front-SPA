import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './page_1/IndexPage.jsx'

class App extends React.Component{
  
  render(){

    return(
     <IndexPage />  
    )

  }
}

ReactDOM.render(<App />,document.getElementById('root'))