/* jshint esversion: 6 */
import React, {
  Component
} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main/Main';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  
  render() {
    /* jshint ignore:start */
    return (
      
      <div>
        <Header / >
        < BrowserRouter >
          <Route path='/' component={Main}/>
          {/* <Route path='/ruta' component={component}/> */}
        </BrowserRouter>
      </div>
      
    );
    /* jshint ignore:end */
  }
}

export default App;