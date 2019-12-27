import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import forEach from 'lodash/fp/forEach';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';

const GRAPH_HEIGHT = 1200;
const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    border: 'solid black 1px',
    display: 'flex',
    flexDirection: 'column',
    height: GRAPH_HEIGHT,
    // width: GRAPH_WIDTH,
  },
  nodeLevel: ({ levelCount }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: GRAPH_HEIGHT / levelCount,
    justifyContent: 'center',
  }),
  node: ({ levelCount }) => ({
    alignItems: 'center',
    border: 'solid black 1px',
    borderRadius: '100%',
    display: 'flex',
    fontFamily: 'Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace',
    height: GRAPH_HEIGHT / (levelCount * 1.5),
    justifyContent: 'center',
    textAlign: 'center',
    width: GRAPH_HEIGHT / (levelCount * 1.5),
  }),
};

const BaconGraph = ({ classes, levelCount, links, nodes }) => {
  const nodesGrouped = new Array(levelCount);

  forEach(
    node => {
      if (isNil(nodesGrouped[node.level])) {
        nodesGrouped[node.level] = [];
      }
      nodesGrouped[node.level].push(node);
    },
    nodes
  );

  console.log(nodesGrouped);


  return (
    <div className={classes.root}>
      {
        map.convert({ cap: false })(
          nodeLevel => (
            <div className={classes.nodeLevel}>
              {
                map.convert({ cap: false })(
                  node => <div className={classes.node}>{node.label}</div>,
                  nodeLevel
                )
              }
            </div>
          ),
          nodesGrouped
        )
      }
    </div>
  );
};

BaconGraph.propTypes = {
  classes: PropTypes.object,
  levelCount: PropTypes.number,
  links: PropTypes.object,
  nodes: PropTypes.object,
};

export default injectSheet(styles)(BaconGraph);
