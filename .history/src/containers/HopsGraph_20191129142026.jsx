import React from 'react';

import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink } from 'react-vis-force';


/* eslint-disable no-shadow */
const RepositoryList = ({}) => (
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
);


RepositoryList.propTypes = {

};

export default RepositoryList;
