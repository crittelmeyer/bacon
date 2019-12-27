import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary,
  },
  search: {
    backgroundColor: fade(theme.palette.primary, 0.15),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 7),
    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: 200,
    // },
  },
});

/* eslint-disable no-shadow */
const HopsSearch = ({ classes }) => (
  <AppBar className={classes.root} position="fixed">
    <Toolbar>
      <div
        className={classes.search}
      >

        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </Toolbar>
  </AppBar>
);

HopsSearch.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HopsSearch);
