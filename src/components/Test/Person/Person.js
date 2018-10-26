/* jshint esversion: 6 */
import React from 'react';
// import React, { Component } from 'react';

// export default class Person extends Component {
//   render() {
//     return (
//         /* jshint ignore:start */
//         <div>
//             <p>Hi</p>
//         </div>
//         /* jshint ignore:end */
//     );
//   }
// }

const person = (props)=>{
    /* jshint ignore:start */
    // return <p > im a person i 'm { Math.floor(Math.random()*30) } years old</p>
    return(
        <div>
            <p> im {props.name} and im {props.age} years old </p>
            <p>{props.children} </p>
        </div>
    )
    /* jshint ignore:end */
};
export default person;