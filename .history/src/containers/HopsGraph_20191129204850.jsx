import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/fp/map';
import slice from 'lodash/fp/slice';

import { loadHops } from '../modules/hops/hopsActions';

import Paper from '@material-ui/core/Paper';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

/* eslint-disable no-shadow */
const HopsGraph = ({ hops, loadHops }) => {
  useEffect(() => {
    loadHops();
  }, []);
  console.log('hey', hops);
  return (
    <Paper>
      {!hops.loading && (hops.data).length !== 0 &&
        <InteractiveForceGraph
          simulationOptions={{ height: 300, width: 300 }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
          {map(
            hop => (
              <ForceGraphNode
                key={`${hop.type}_${hop.imdbId}`}
                node={{ id: hop.imbdId, label: hop.type === 'movie' ? hop.title : hop.name }}
                fill="red"
              />
            ),
            hops.data
          )}
          {map.convert({ cap: false })(
            (hop, index) => index > 0 && (
              <ForceGraphLink
                key={`${hops.data[index].type}_${hops.data[index].imdbId}_${hop.type}_${hop.imdbId}`}
                link={{ source: hops.data[index].imdbId, target: hop.imdbId }}
              />
            ),
            slice(1, hops.data)
          )}
        </InteractiveForceGraph>
      }
    </Paper>
  );
};

const mapStateToProps = state => ({
  hops: state.hops,
});

const mapDispatchToProps = {
  loadHops,
};

HopsGraph.propTypes = {
  hops: PropTypes.object,
  loadHops: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HopsGraph);
