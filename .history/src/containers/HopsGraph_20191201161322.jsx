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
            node => (

              <ForceGraphNode
                key={`${hop.type}_${hop.imdbId}`}
                node={{
                  id: `${hop.type}_${hop.imdbId}`,
                  label: hop.type === 'movie' ? hop.title : hop.name,
                  radius: index === 0 || index === hops.data[pathIndex].length - 1 ? 20 : 20,
                }}
                fill={hop.type === 'movie' ? 'red' : 'blue'}
              />

            ),
            nodes
          )}
          {map.convert({ cap: false })(
            (path, pathIndex) => (
              map.convert({ cap: false })(
                (hop, index) => (
                  <ForceGraphLink
                    key={`${hops.data[pathIndex][index].type}_${hops.data[pathIndex][index].imdbId}_${hop.type}_${hop.imdbId}`}
                    link={{
                      source: `${hops.data[pathIndex][index].type}_${hops.data[pathIndex][index].imdbId}`,
                      target: `${hop.type}_${hop.imdbId}`,
                      value: 20,
                    }}
                  />
                ), path
              )
            ),
            slice(1, hops.data.length, hops.data)
          )}
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
