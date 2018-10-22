/* jshint esversion: 6 */
import React, {
    Component
} from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [{
            name: 'max',
            age: 22
        }]
    }
    render() {
        /* jshint ignore:start */
        return ( < div className = "App" >
            <
            h1 > Hello from my react component < /h1>  <
            Person name = {
                this.state.persons[0].name
            }
            age = {
                this.state.persons[0].age
            }
            /> <
            Person name = "Pedro"
            age = "19" > My hobby is swim < /Person> <
            Person name = "sandra"
            age = "27" / >
            <
            /div>
        );
        /* jshint ignore:end */
        // JSX
        // return React.createElement('div', {className:"App"}, 
        //           React.createElement('p',null, 'Hello from my react component')
        //         );
    }
}

export default App;