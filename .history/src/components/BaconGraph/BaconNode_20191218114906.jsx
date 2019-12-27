import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose, withProps } from 'recompose';

const styles = {
  root: ({ size }) => ({
    alignItems: 'center',
    border: 'solid black 1px',
    borderRadius: '100%',
    display: 'flex',
    fontFamily: 'Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace',
    height: size,
    justifyContent: 'center',
    padding: 8,
    textAlign: 'center',
    width: size,
  }),
  movie: {
    backgroundColor: '#d46a6a',
  },
  actor: {
    backgroundColor: '#ffaaaa',
  },
};

const BaconNode = ({ classes, node, rootRef }) => {
  console.log('rootref', rootRef);
  return (
    <div
      className={classNames(
        classes.root,
        {
          [classes.movie]: node.type === 'movie',
          [classes.actor]: node.type === 'actor',
        }
      )}
      ref={rootRef}
    >
      {node.label}
    </div>
  );
};

BaconNode.propTypes = {
  classes: PropTypes.object,
  node: PropTypes.object,
  rootRef: PropTypes.func,
};

const enhance = compose(
  withProps(() => ({
    rootRef: React.createRef(),
  })),
  // injectSheet(styles)
);

export default enhance(BaconNode);
