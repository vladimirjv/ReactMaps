/* jshint esversion: 6 */
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    /* jshint ignore:start */
    // return (
    //   <div className="App">
    //     <p>
    //       Hello from my react component
    //     </p>
    //   </div>
    // );
    /* jshint ignore:end */
    // JSX
    return React.createElement('div', {className:"App"}, 
              React.createElement('p',null, 'Hello from my react component')
            );
  }
}

export default App;
