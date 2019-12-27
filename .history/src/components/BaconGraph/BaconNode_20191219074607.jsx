import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { compose, lifecycle, withProps } from 'recompose';
import isEmpty from 'lodash/fp/isEmpty';

const styles = {
  root: ({ size }) => ({
    fontFamily: 'Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace',
    height: size,
    width: size,
  }),
  content: {
    border: 'solid black 1px',
    borderRadius: '100%',
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.4s cubic-bezier(0.75, 0, 0.85, 1)',
    transformStyle: 'preserve-3d',
    '&:hover': {
      cursor: 'pointer',
      transform: 'rotate3d(1, 1, 0, 180deg)',
    },
  },
  side: {
    alignItems: 'center',
    borderRadius: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
  },
  frontMovie: {
    backgroundColor: '#d46a6a',
  },
  frontActor: {
    backgroundColor: '#ffaaaa',
  },
  backMovie: {
    backgroundColor: '#e57b7b',
  },
  backActor: {
    backgroundColor: '#ffbbbb',
  },
  back: {
    transform: 'rotateY(180deg) rotateZ(90deg)',
  },
  inner: {
    textAlign: 'center',
    transform: 'translateZ(20px) scale(0.94)',
  },
  img: {
    borderRadius: '100%',
  },
};

const BaconNode = ({ classes, node, onClick, rootRef }) => (
  <div
    className={classes.root}
    ref={rootRef}
    role="button"
    onClick={onClick}
    onKeyUp={onClick}
    tabIndex={tabIndex}
  >
    <div className={classes.content}>
      <div
        className={classNames(
          classes.side,
          {
            [classes.frontMovie]: node.type === 'movie',
            [classes.frontActor]: node.type === 'actor',
          }
        )}
      >
        <div className={classes.inner}>
          {node.label}
        </div>
      </div>
      <div
        className={classNames(
          classes.side,
          classes.back,
          {
            [classes.backMovie]: node.type === 'movie',
            [classes.backActor]: node.type === 'actor',
          }
        )}
      >
        <div className={classes.inner}>
          <img className={classes.img} src={node.img} alt={`Poster for ${node.label}`} />
        </div>
      </div>
    </div>
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
        this.props.onGotRef(this.props.node.id, this.props.rootRef.current);
      }
    },
  }),
  injectSheet(styles)
);

export default enhance(BaconNode);
