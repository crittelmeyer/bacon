import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import forEach from 'lodash/fp/forEach';
import isNil from 'lodash/fp/isNil';
import map from 'lodash/fp/map';

const GRAPH_HEIGHT = 1200;
const GRAPH_WIDTH = 1000;

const styles = {
  root: {
    backgroundColor: '#aa3939',
    display: 'flex',
    flexDirection: 'column',
    height: GRAPH_HEIGHT,
    margin: '0 auto',
    width: GRAPH_WIDTH,
  },
  nodeLevel: ({ levelCount }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: GRAPH_HEIGHT / levelCount,
    justifyContent: 'space-evenly',
  }),
  node: ({ levelCount }) => ({
    alignItems: 'center',
    border: 'solid black 1px',
    borderRadius: '100%',
    display: 'flex',
    fontFamily: 'Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace',
    height: GRAPH_HEIGHT / (levelCount * 1.5),
    justifyContent: 'center',
    padding: 8,
    textAlign: 'center',
    width: GRAPH_HEIGHT / (levelCount * 1.5),
  }),
  movie: {
    backgroundColor: 'green',
  },
  actor: {
    backgroundColor: 'blue',
  },
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
                  node => (
                    <div
                      className={classNames(
                        classes.node,
                        {
                          [classes.movie]: node.type === 'movie',
                          [classes.actor]: node.type === 'actor',
                        }
                      )}
                    >
                      {node.label}
                    </div>
                  ),
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
