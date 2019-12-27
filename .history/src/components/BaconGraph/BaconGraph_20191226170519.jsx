import React from 'react';
import PropTypes from 'prop-types';
import { compose, withHandlers, withProps, withState } from 'recompose';
import { fade, withStyles } from '@material-ui/core/styles';
import { getRefs, setRef } from './refs';
import forEach from 'lodash/fp/forEach';
import isEmpty from 'lodash/fp/isEmpty';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';

import Drawer from '@material-ui/core/Drawer';

import BaconNode from './BaconNode';

export const GRAPH_HEIGHT = 1200;
export const GRAPH_WIDTH = 1000;

const styles = theme => ({
  root: {
    height: GRAPH_HEIGHT,
    margin: '0 auto',
    position: 'relative',
    width: GRAPH_WIDTH,
  },
  drawerContent: {
    width: 300,
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
  movie: {
    backgroundColor: '#0000ff',
    color: theme.palette.text.secondary,
    fontWeight: 600,
  },
  actor: {
    backgroundColor: '#ff0000',
    color: fade(theme.palette.text.secondary, 0.85),
    fontWeight: 600,
  },
});

const BaconGraph = ({
  classes,
  hover,
  levelCount,
  links,
  nodeRefs,
  nodesGrouped,
  nodesReady,
  onCloseDrawer,
  onGotNodeRef,
  onNodeClick,
  onNodeMouseEnter,
  onNodeMouseLeave,
  openDrawer,
}) => (
  <div className={classes.root}>
    <Drawer anchor="right" open={!isEmpty(openDrawer) && openDrawer.substring(0, 6) !== 'closed'} onClose={onCloseDrawer}>
      <div className={classes.drawerContent}>hello foo</div>
    </Drawer>
    <div className={classes.nodes}>
      {
        map.convert({ cap: false })(
          (nodeLevel, index) => (
            <div key={`level_${index}`} className={classes.nodeLevel}>
              {map.convert({ cap: false })(
                (node, nodeIndex) => (
                  <BaconNode
                    classes={{ actor: classes.actor, movie: classes.movie }}
                    hover={hover === node.id}
                    key={node.id}
                    node={node}
                    selected={openDrawer === node.id}
                    size={GRAPH_HEIGHT / (levelCount * 1.5)}
                    tabIndex={(index * 10) + nodeIndex + 1}
                    onClick={onNodeClick}
                    onMouseEnter={onNodeMouseEnter}
                    onMouseLeave={onNodeMouseLeave}
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
    {nodesReady && (
      <svg width="1000" height="1200">
        {map(link => {
          const source = nodeRefs[link.source].getBoundingClientRect();
          const target = nodeRefs[link.target].getBoundingClientRect();

          const leftOffset = 275;
          const topScrollOffset = document.body.getBoundingClientRect().top;
          const topOffset = (GRAPH_HEIGHT / (levelCount * 1.5)) / 2;

          return (
            <line
              key={`${source.left}_${source.top}_${target.left}_${target.top}`}
              x1={source.left - leftOffset}
              y1={(source.top - topScrollOffset) + topOffset}
              x2={target.left - leftOffset}
              y2={(target.top - topScrollOffset) + topOffset}
              stroke="black"
            />
          );
        }, links)}

      </svg>)}
  </div>
);

BaconGraph.propTypes = {
  classes: PropTypes.object,
  hover: PropTypes.string,
  levelCount: PropTypes.number,
  links: PropTypes.object,
  nodeRefs: PropTypes.object,
  nodesGrouped: PropTypes.array,
  nodesReady: PropTypes.bool,
  onCloseDrawer: PropTypes.func,
  onGotNodeRef: PropTypes.func,
  onNodeClick: PropTypes.func,
  onNodeMouseEnter: PropTypes.func,
  onNodeMouseLeave: PropTypes.func,
  openDrawer: PropTypes.string,
};

const enhance = compose(
  withState('hover', 'setHover', ''),
  withState('nodesReady', 'setNodesReady', false),
  withState('openDrawer', 'setOpenDrawer', ''),
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
    onCloseDrawer: ({ openDrawer, setHover, setOpenDrawer }) => () => {
      setOpenDrawer(`closed:${openDrawer}`);
      setHover('');
    },
    onGotNodeRef: ({ nodes, setNodesReady }) => (nodeId, nodeRef) => {
      setRef(nodeId, nodeRef);
      if (Object.keys(nodes).length === Object.keys(getRefs()).length) {
        setNodesReady(true);
      }
    },
    onNodeClick: ({ setOpenDrawer }) => node => {
      setOpenDrawer(node.id);
    },
    onNodeMouseEnter: ({ openDrawer, setHover, setOpenDrawer }) => node => {
      if (openDrawer === `closed:${node.id}`) {
        setOpenDrawer('');
      } else {
        setHover(node.id);
      }
    },
    onNodeMouseLeave: ({ setHover }) => () => {
      setHover('');
    },
  }),
  withStyles(styles),
);

export default enhance(BaconGraph);
