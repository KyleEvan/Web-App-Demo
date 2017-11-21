import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Body from './Body/Body';
import css from './global.css';

import ScrollToTop from './Components/ScrollToTop';

class App extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       asideExpanded: false
     }
     this.handleToggleAside = this.handleToggleAside.bind(this);
  }
  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    // Fetch Data and set setState
    // Data will be passed down to <Body />
    // from <Body /> data is passed down to each View Component

  }
  handleToggleAside(){
     this.setState({
       asideExpanded: !this.state.asideExpanded
     })
  }
  render(){
    return (

      <Router>

          <div className={css.router}>
            <ScrollToTop />
            <Header onClick={this.handleToggleAside}/>
            <Body data="data" expanded={this.state.asideExpanded} toggleAside={this.handleToggleAside}/>

          </div>

      </Router>

    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
