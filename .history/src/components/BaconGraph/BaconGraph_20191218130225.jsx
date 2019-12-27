import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, withProps, withState } from 'recompose';
import injectSheet from 'react-jss';
import { getRefs, setRef } from './refs';
import forEach from 'lodash/fp/forEach';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';

import BaconNode from './BaconNode';

export const GRAPH_HEIGHT = 1200;
export const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    height: GRAPH_HEIGHT,
    margin: '0 auto',
    position: 'relative',
    width: GRAPH_WIDTH,
  },
  nodes: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
  },
  nodeLevel: ({ levelCount }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: GRAPH_HEIGHT / levelCount,
    justifyContent: 'space-evenly',
  }),
};

const BaconGraph = ({ classes, levelCount, links, nodeRefs, nodesGrouped, nodesReady, onGotNodeRef }) => (
  <div className={classes.root}>
    <div className={classes.nodes}>
      {
        map.convert({ cap: false })(
          (nodeLevel, index) => (
            <div key={`level_${index}`} className={classes.nodeLevel}>
              {map(
                node => (
                  <BaconNode
                    key={node.id}
                    node={node}
                    size={GRAPH_HEIGHT / (levelCount * 1.5)}
                    onGotRef={onGotNodeRef}
                  />
                ),
                nodeLevel
              )}
            </div>
          ),
          nodesGrouped
        )
      }
    </div>
    {nodesReady && map.convert({ cap: false })((nodeRef, key) => {
      const rect = nodeRef.getBoundingClientRect();

      console.log('got it', rect);
      return <svg key={key} width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="black" /></svg>;
    }, nodeRefs)}

  </div>
);

BaconGraph.propTypes = {
  classes: PropTypes.object,
  levelCount: PropTypes.number,
  links: PropTypes.object,
  nodeRefs: PropTypes.object,
  nodesGrouped: PropTypes.array,
  nodesReady: PropTypes.bool,
  onGotNodeRef: PropTypes.func,
};

const enhance = compose(
  withState('nodesReady', 'setNodesReady', false),
  withProps(({ levelCount, nodes, nodesReady }) => {
    const nodesGrouped = new Array(levelCount);

    forEach.convert({ cap: false })(
      (node, key) => {
        if (isNil(nodesGrouped[node.level])) {
          nodesGrouped[node.level] = [];
        }
        nodesGrouped[node.level].push({ ...node, id: key });
      },
      nodes
    );

    let nodeRefs = {};

    if (nodesReady) {
      nodeRefs = getRefs();
    }

    return {
      nodeRefs,
      nodesGrouped,
    };
  }),
  withHandlers({
    onGotNodeRef: ({ nodes, setNodesReady }) => (nodeId, nodeRef) => {
      setRef(nodeId, nodeRef);
      if (Object.keys(nodes).length === Object.keys(getRefs()).length) {
        setNodesReady(true);
      }
    },
  }),
  injectSheet(styles),
);

export default enhance(BaconGraph);
