import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

export const GRAPH_HEIGHT = 1200;
export const GRAPH_WIDTH = 1000;

const styles = {
  root: ({ levelCount }) => ({
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
    backgroundColor: '#d46a6a',
  },
  actor: {
    backgroundColor: '#ffaaaa',
  },
};

const BaconNode = ({ classes, node }) => (
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
);

BaconNode.propTypes = {
  classes: PropTypes.object,
  node: PropTypes.object,
};

export default injectSheet(styles)(BaconNode);