/* jshint esversion:6  */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";

function header(params) {
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
          <h3>Header Maps</h3>
        </Toolbar>
      </AppBar>
      /* jshint ignore: end */
    );
}

export default header;