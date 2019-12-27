import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import forEach from 'lodash/fp/forEach';
import includes from 'lodash/fp/includes';
import slice from 'lodash/fp/slice';

import { loadHops } from '../modules/hops/hopsActions';

import Paper from '@material-ui/core/Paper';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

import BaconGraph from '../components/BaconGraph/BaconGraph';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },

  movie: {
    backgroundColor: theme.palette.secondary.main,
  },
  actor: {
    backgroundColor: theme.palette.secondary.light,
  },
});

/* eslint-disable no-shadow */
const HopsGraph = ({ classes, className, hops, loadHops }) => {
  useEffect(() => {
    loadHops();
  }, []);

  const nodes = {};
  const links = {};

  forEach.convert({ cap: false })(
    (path, pathIndex) => {
      forEach.convert({ cap: false })(
        (hop, index) => {
          const nodeId = `${hop.type}_${hop.imdbId}_${index}`;

          if (!includes(nodeId, Object.keys(nodes))) {
            nodes[nodeId] = {
              level: index,
              label: hop.type === 'movie' ? hop.title : hop.name,
              radius: index === 0 || index === hops.data[pathIndex].length - 1 ? 20 : 20,
              img: hop.type === 'movie' ? hop.poster : hop.headshot,
              type: hop.type,
            };
          }
        },
        path
      );
    },
    hops.data
  );

  forEach.convert({ cap: false })(
    (_, pathIndex) => {
      forEach.convert({ cap: false })(
        (hop, index) => {
          const source = `${hops.data[pathIndex][index].type}_${hops.data[pathIndex][index].imdbId}_${index}`;
          const target = `${hop.type}_${hop.imdbId}_${index + 1}`;
          const linkId = `${source};${target}`;

          if (!includes(linkId, Object.keys(links))) {
            links[linkId] = {
              source,
              target,
              value: 20,
            };
          }
        },
        slice(1, hops.data[pathIndex].length, hops.data[pathIndex])
      );
    },
    hops.data
  );

  // return (
  //   <Paper className={classNames(className, classes.root)}>
  //     {!hops.loading && hops.data.length > 0 &&
  //       <BaconGraph classes={{ actor: classes.actor, movie: classes.movie }} levelCount={hops.data[0].length} links={links} nodes={nodes} />
  //     }
  //   </Paper>
  // );

  // re/
};

const mapStateToProps = state => ({
  hops: state.hops,
});

const mapDispatchToProps = {
  loadHops,
};

HopsGraph.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  hops: PropTypes.object,
  loadHops: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(HopsGraph));
