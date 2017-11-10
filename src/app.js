import css from './global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';

import Home from './Views/Home';
import Sleep from './Views/Sleep';
import SleepLog from './Views/SleepLog';

class App extends React.Component {
  render(){
    return (


      <Router>
        <div>
          <Header/>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/sleep" component={Sleep}/>
              <Route path="/sleep-log" component={SleepLog}/>
              <Route path="*" component={Home}/>
            </Switch>
          </div>
        </div>
      </Router>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
