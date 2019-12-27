import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import forEach from 'lodash/fp/forEach';
import map from 'lodash/fp/map';

const GRAPH_HEIGHT = 500;
const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    border: 'solid black 1px',
    height: GRAPH_HEIGHT,
    width: GRAPH_WIDTH,
  },
};

const BaconGraph = ({ classes, levelCount, links, nodes }) => {
  const nodesGrouped = new Array(levelCount);
  nodesGrouped.fill([]);

  forEach(
    node => {
      nodesGrouped[node.level].push(node);
    },
    nodes
  );


  return (
    <div className={classes.root}>
      {
        map(
          nodeLevel =>
            <div>{nodeLevel.label}</div>,
          nodesGrouped
        )
      }
    </div>
  );
};

BaconGraph.propTypes = {
  classes: PropTypes.object,
  links: PropTypes.object,
  nodes: PropTypes.object,
};

export default withStyles(styles)(BaconGraph);
