import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import forEach from 'lodash/fp/forEach';
import isNil from 'lodash/fp/isNil';
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
    alignItems: 'center',
    height: GRAPH_HEIGHT / levelCount,
    justifyContent: 'center',
  }),
  node: {
    borderRadius: '100%',
  },
};

const BaconGraph = ({ classes, levelCount, links, nodes }) => {
  const nodesGrouped = new Array(levelCount);

  forEach(
    node => {
      console.log('adding', node, 'to nodesGrouped at index', node.level);
      if (isNil(nodesGrouped[node.level])) {
        nodesGrouped[node.level] = [];
      }
      nodesGrouped[node.level].push(node);
      console.log('now', nodesGrouped);
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
                  node => <div className={classes.node}>{node.label}</div>,
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
