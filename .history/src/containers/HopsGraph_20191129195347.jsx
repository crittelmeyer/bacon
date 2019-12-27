import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadHops } from '../modules/hops/hopsActions';

import Paper from '@material-ui/core/Paper';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

/* eslint-disable no-shadow */
const HopsitoryList = ({ hops, loadHops }) => {
  useEffect(() => {
    loadHops();
    // {!hops.loading &&
    //   (hops.data).length !== 0 &&
  }, []);
  return (
    <Paper>
      <InteractiveForceGraph
        simulationOptions={{ height: 300, width: 300 }}
        labelAttr="label"
        onSelectNode={(node) => console.log(node)}
        highlightDependencies
      >
        <ForceGraphNode node={{ id: 'first-node', label: 'First node' }} fill="red" />
        <ForceGraphNode node={{ id: 'second-node', label: 'Second node' }} fill="blue" />
        <ForceGraphLink link={{ source: 'first-node', target: 'second-node' }} />
      </InteractiveForceGraph>
    </Paper>
  );
};

const mapStateToProps = state => ({
  hops: state.hops,
});

const mapDispatchToProps = {
  loadHops,
};

HopsitoryList.propTypes = {
  hops: PropTypes.object,
  loadHops: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HopsitoryList);
