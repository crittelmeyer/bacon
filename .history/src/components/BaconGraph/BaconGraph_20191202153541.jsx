import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import forEach from 'lodash/fp/forEach';
import map from 'lodash/fp/map';

const GRAPH_HEIGHT = 500;
const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    border: 'solid black 1px',
    display: 'flex',
    flexDirection: 'column',
    height: GRAPH_HEIGHT,
    width: GRAPH_WIDTH,
  },
  nodeLevel: ({ levelCount }) => ({
    display: 'flex',
    flexDirection: 'row',
    height: GRAPH_HEIGHT / levelCount,
  }),
};

const BaconGraph = ({ classes, levelCount, links, nodes }) => {
  const nodesGrouped = new Array(levelCount);
  nodesGrouped.fill([]);

  forEach(
    node => {
      console.log('adding', node, `to nodesGrouped at index${  node.level}`);
      nodesGrouped[node.level].push(node);
    },
    nodes
  );

  console.log(nodesGrouped);


  return (
    <div className={classes.root}>
      {
        map.convert({ cap: false })(
          (nodeLevel, index) =>
            (<div className={classes.nodeLevel}>
              {
                map.convert({ cap: false })(
                  node => <div>{node.label}</div>,
                  nodeLevel
                )
              }
            </div>),
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

export default injectSheet(styles)(BaconGraph);
