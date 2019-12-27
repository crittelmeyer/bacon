import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadResults } from '../modules/results/resultsActions';

import Paper from '@material-ui/core/Paper';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';

/* eslint-disable no-shadow */
const ResultsitoryList = ({ results, loadResults }) => {
  useEffect(() => {
    loadResults();
    // {!results.loading &&
    //   (results.data).length !== 0 &&
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
  results: state.results,
});

const mapDispatchToProps = {
  loadResults,
};

ResultsitoryList.propTypes = {
  results: PropTypes.object,
  loadResults: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsitoryList);
