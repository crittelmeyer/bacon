import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Paper from '@material-ui/core/Paper';


const styles = {
  root: {
    backgroundColor: '#aa3939',
  },
};

/* eslint-disable no-shadow */
const HopsSearch = ({ classes, hops, loadHops }) => {

};

HopsSearch.propTypes = {
  classes: PropTypes.object,
  hops: PropTypes.object,
  loadHops: PropTypes.func,
};

export default injectSheet(styles)(HopsSearch);
