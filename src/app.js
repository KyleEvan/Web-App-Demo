import css from './global.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return <h1>This is my app yay</h1>;
  }  
}


ReactDOM.render(
  <App />,
  document.getElementById('app')
)
console.log("Fuck yea this is my app");
