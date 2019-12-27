import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import forEach from 'lodash/fp/forEach';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';

import BaconNode from './BaconNode';

export const GRAPH_HEIGHT = 1200;
export const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    backgroundColor: 'transparent',
    position: 'relative',
  },
  nodes: {
    display: 'flex',
    flexDirection: 'column',
    height: GRAPH_HEIGHT,
    margin: '0 auto',
    position: 'absolute',
    width: GRAPH_WIDTH,
  },
  nodeLevel: ({ levelCount }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: GRAPH_HEIGHT / levelCount,
    justifyContent: 'space-evenly',
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

  return (
    <div className={classes.root}>
      <div className={classes.nodes}>
        {
          map.convert({ cap: false })(
            nodeLevel => (
              <div className={classes.nodeLevel}>
                {map.convert({ cap: false })(
                  node => <BaconNode node={node} size={GRAPH_HEIGHT / (levelCount * 1.5)} />,
                  nodeLevel
                )}
              </div>
            ),
            nodesGrouped
          )
        }
      </div>
      <svg width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="black" /></svg>
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
