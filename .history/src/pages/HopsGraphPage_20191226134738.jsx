import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import HopsGraph from '../containers/HopsGraph';
import HopsSearch from '../containers/HopsSearch';


const styles = theme => ({
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
