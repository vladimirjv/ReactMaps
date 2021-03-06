/* jshint esversion: 6 */
import React from 'react';
import Map from '../../components/Maps/Map';
class Ruta extends React.Component{
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
    
    render(){
        return(
            /* jshint ignore: start */
            <Map
                height={this.state.height-63}
             />

            /* jshint ignore: end */
        );
    }
}

export default Ruta;