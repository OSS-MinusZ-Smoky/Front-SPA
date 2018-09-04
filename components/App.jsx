import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Route , Link} from 'react-router-dom';
import IndexPage from './page_1/IndexPage.jsx'
import MainPage from './page_2/MainPage.jsx'

class App extends React.Component{
  render(){

    return(
      
        <Router>
          <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/page" component={MainPage} />
          </div>
        </Router>
      
    )

  }
}

ReactDOM.render(<App />,document.getElementById('root'))