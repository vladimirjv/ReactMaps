/* jshint esversion: 6 */
import React, {
  Component
} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main/Main';
import Ruta  from './views/Ruta/Ruta';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  
  render() {
    /* jshint ignore:start */
    return (
      
      <div>
        <Header / >
        < BrowserRouter >
          <Switch>
            <Route path='/' exact component={Main}/>
            <Route path='/ruta' component={Ruta}/>
          </Switch>
        </BrowserRouter>
      </div>
      
    );
    /* jshint ignore:end */
  }
}

export default App;