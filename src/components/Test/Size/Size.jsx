/* jshint esversion: 6 */
import React from 'react';

// function Ruta(props) {
//     return(
//         /* jshint ignore: start */
//         <p>Hello World</p>
//         /* jshint ignore: end */
//     );
// }
class Ruta extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        return (
            /* jshint ignore: start */
            <div>
                <p>{this.state.height}</p>
                <p> {this.state.width} </p>
            </div>
            /* jshint ignore: end */
        );
    }
}

export default Ruta;