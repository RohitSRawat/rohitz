import React from 'react';
import Header from './Header'
import VideoList from './VideoList'
import {Route,Router,Switch } from 'react-router-dom';
import history from './history'
import VideoPlayer from './Videoplayer'
class App extends React.Component {
 
  render() {
    return (
      <div>
        <Router history={history}>
        <div>
        <div style={{textAlign: 'center'}}>
    <Header/>
    </div>
<Switch>
  
<Route  path='/' exact component={VideoList}/>
<Route  path='/watch/:id' exact component={VideoPlayer}/>

  </Switch>

          </div>
          </Router>
  
      </div>
      



    )
  }
}

export default App;
