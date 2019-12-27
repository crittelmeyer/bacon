import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import AppBar from '@material-ui/core/AppBar';

const styles = {
  root: {
    backgroundColor: '#aa3939',
  },
};

/* eslint-disable no-shadow */
const HopsSearch = ({ classes }) => (
  <AppBar className={classes.root} position="static">fop</AppBar>
);

HopsSearch.propTypes = {
  classes: PropTypes.object,
};

export default injectSheet(styles)(HopsSearch);
