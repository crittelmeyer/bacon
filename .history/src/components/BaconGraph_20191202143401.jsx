import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const GRAPH_HEIGHT = 600;
const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    height: GRAPH_HEIGHT,
    width: GRAPH_WIDTH,
  },
};

const BaconGraph = ({ classes, links, nodes }) => (
  <div className={classes.root}>
test
  </div>
);

export default withStyles(styles)(BaconGraph);
