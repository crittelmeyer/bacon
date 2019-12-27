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
      {!hops.loading && hops.data.length > 0 &&
        <InteractiveForceGraph
          simulationOptions={{
            animate: true,
            height: 1000,
            width: 1000,
            strength: {
              collide: 8,
            },
          }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
          {map.convert({ cap: false })(
            (hop, index) => (
              <ForceGraphNode
                key={`${hop.type}_${hop.imdbId}`}
                node={{
                  id: `${hop.type}_${hop.imdbId}`,
                  label: hop.type === 'movie' ? hop.title : hop.name,
                  radius: index === 0 || index === hops.data.length - 1 ? 50 : 30,
                }}
                fill={hop.type === 'movie' ? 'red' : 'blue'}
              />
            ),
            hops.data
          )}
          {map.convert({ cap: false })(
            (hop, index) => (
              <ForceGraphLink
                key={`${hops.data[index].type}_${hops.data[index].imdbId}_${hop.type}_${hop.imdbId}`}
                link={{
                  source: `${hops.data[index].type}_${hops.data[index].imdbId}`,
                  target: `${hop.type}_${hop.imdbId}`,
                  value: 20,
                }}
              />
            ),
            slice(1, hops.data.length, hops.data)
          )}
          <ForceGraphNode
            key="more"
            node={{
              id: 'more',
              label: '45 More...',
              radius: 60,
            }}
            fill="green"
          />
          <ForceGraphLink
            key={`${hops.data[0].type}_${hops.data[0].imdbId}_more`}
            link={{
              source: `${hops.data[0].type}_${hops.data[0].imdbId}`,
              target: `${hops.data[hops.data.length - 1].type}_${hops.data[hops.data.length - 1].imdbId}`,
              value: 30,
            }}
          />
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
