import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const GRAPH_HEIGHT = 500;
const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    border: 'solid black 1px',
    height: GRAPH_HEIGHT,
    width: GRAPH_WIDTH,
  },
};

const BaconGraph = ({ classes, links, nodes }) => (
  <div className={classes.root}>
    test
  </div>
);

BaconGraph.propTypes = {
  classes: PropTypes.object,
  loadHops: PropTypes.func,
};

export default withStyles(styles)(BaconGraph);
