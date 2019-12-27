import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';

const styles = {
  root: {
    backgroundColor: '#aa3939',
  },
};

/* eslint-disable no-shadow */
const HopsSearch = ({ classes }) => (
  <AppBar className={classes.root} position="static">
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
  </AppBar>
);

HopsSearch.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(HopsSearch);
