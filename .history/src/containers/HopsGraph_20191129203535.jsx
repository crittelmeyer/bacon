import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import map from 'lodash/fp/map';

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
          {
            map.convert({ cap: false })((hop, index) => (
              <React.Fragment key={`${hop.type}_${hop.imbdId}`}>
                <ForceGraphNode node={{ id: hop.imbdId, label: hop.type === 'movie' ? hop.title : hop.name }} fill="red" />
                {index > 0 && <ForceGraphLink link={{ source: hops.data[index - 1].imdbId, target: hop.imdbId }} />}
              </React.Fragment>
            ), hops.data)
          }
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
