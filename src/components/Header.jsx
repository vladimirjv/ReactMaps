/* jshint esversion:6  */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.onClickMethod = this.onClickMethod.bind(this);
  }
  onClickMethod(){
    console.log('Hello');
  }
  render(){
    return(
      /* jshint ignore: start */
      <AppBar
        color="primary"
        position="sticky"
      >
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <h3
            onClick={this.onClickMethod}
          >
            Header Maps
          </h3>
        </Toolbar>
      </AppBar>
      /* jshint ignore: end */
    );
  }
}

export default Header;