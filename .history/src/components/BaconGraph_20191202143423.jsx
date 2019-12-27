import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const GRAPH_HEIGHT = 400;
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

export default withStyles(styles)(BaconGraph);
