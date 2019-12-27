import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import forEach from 'lodash/fp/forEach';
import includes from 'lodash/fp/includes';
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

  const nodes = {};

  forEach.convert({ cap: false })(
    (path, pathIndex) => {
      forEach.convert({ cap: false })(
        (hop, index) => {
          const nodeId = `${hop.type}_${hop.imdbId}`;

          if (!includes(nodeId, Object.keys(nodes))) {
            nodes[nodeId] = {
              label: hop.type === 'movie' ? hop.title : hop.name,
              radius: index === 0 || index === hops.data[pathIndex].length - 1 ? 20 : 20,
              fill: hop.type === 'movie' ? 'red' : 'blue',
            };
          }
        },
        path
      );
    },
    hops.data
  );

  console.log('hey', hops);

  return (
    <Paper>
      {!hops.loading && hops.data.length > 0 &&
        <InteractiveForceGraph
          showLabels
          simulationOptions={{
            animate: true,
            height: 1000,
            width: 1000,
            strength: {
              collide: 3,
              charge: -100,
            },
          }}
          labelAttr="label"
          onSelectNode={(node) => console.log(node)}
          highlightDependencies
        >
          {map(
            nodeId => (
              <ForceGraphNode
                key={nodeId}
                node={{
                  id: nodeId,
                  label: nodes[nodeId].label,
                  radius: nodes[nodeId].radius,
                }}
                fill={nodes[nodeId].fill}
              />

            ),
            Object.keys(nodes)
          )}
          {map(link => (
          ),links)}
          <ForceGraphNode
            key="more"
            node={{
              id: 'more',
              label: '45 More...',
              radius: 20,
            }}
            fill="green"
          />
          <ForceGraphLink
            key={`${hops.data[0][0].type}_${hops.data[0][0].imdbId}_more`}
            link={{
              source: `${hops.data[0][0].type}_${hops.data[0][0].imdbId}`,
              target: 'more',
              value: 30,
            }}
          />
          <ForceGraphLink
            key={`${hops.data[0][hops.data[0].length - 1].type}_${hops.data[0][hops.data[0].length - 1].imdbId}_more`}
            link={{
              source: 'more',
              target: `${hops.data[0][hops.data[0].length - 1].type}_${hops.data[0][hops.data[0].length - 1].imdbId}`,
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
