/* jshint esversion:6 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import withWidth from "@material-ui/core/withWidth";

// xs: 0;
// sm: 600;
// md: 960;
// lg: 1280;
// xl: 1920;
const styles = theme => ({
  demo: {
    [theme.breakpoints.down('sm')]: {
      height: 360
    },
    [theme.breakpoints.between('sm','md')]: {
      height: 460
    },
    [theme.breakpoints.up('md')]: {
      height: 600
    },  
    [theme.breakpoints.up('lg')]: {
      height: 800
    },
    [theme.breakpoints.between('lg','xl')]: {
      height: 1024
    },
  },
  root: {
    flexGrow: 1,
    marginTop: "5%"
  },
  button: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 10,
    paddingRight: theme.spacing.unit * 10,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});
function Main(props) {
    const { classes } = props;
    // console.log(wd);
    
    return (
        /* jshint ignore: start */
        <Grid 
        className={classes.root}
            container
            justify="center"
        >
            <Grid 
                item
                xs={10}
                lg={8}
            >
                <Grid
                    container
                    className={classes.demo}
                    alignItems="center"
                    direction="column"
                    justify="flex-end"
                >
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="secondary"
                        fullWidth
                    >
                        Rutas
                    </Button>
                    {/* <p>{`Current width: ${props.width}`}</p> */}
                    <Button
                        variant="contained"
                        className={classes.button}
                        color="secondary"
                        fullWidth
                    >
                        Rutas
                    </Button>
                </Grid>
            </Grid>
        </Grid>
        /* jshint ignore: end */
    );
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(Main));