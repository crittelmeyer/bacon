import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose, lifecycle, withProps } from 'recompose';
import isEmpty from 'lodash/fp/isEmpty';

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

const BaconNode = ({ classes, node, rootRef }) => (
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

BaconNode.propTypes = {
  classes: PropTypes.object,
  node: PropTypes.object,
  rootRef: PropTypes.object,
};

const enhance = compose(
  withProps({
    rootRef: React.createRef(),
  }),
  lifecycle({
    componentDidMount() {
      if (!isEmpty(this.props.rootRef.current)) {
        console.log(this.props);
        this.props.onGotRef(this.props.node.id, this.props.rootRef.current);
      }
    },
  }),
  injectSheet(styles)
);

export default enhance(BaconNode);