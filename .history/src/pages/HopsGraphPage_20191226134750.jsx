import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import HopsGraph from '../containers/HopsGraph';
import HopsSearch from '../containers/HopsSearch';


const styles = () => ({
  root: {
    padding: 0,
  },
});

const HopsGraphPage = ({ classes }) => (
  <div className={classes.root}>
    <HopsSearch />
    <HopsGraph />
  </div>
);

HopsGraphPage.propTypes = {
  classes: PropTypes.object,

};

export default withStyles(styles)(HopsGraphPage);
