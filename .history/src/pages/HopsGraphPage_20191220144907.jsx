import React from 'react';
import HopsGraph from '../containers/HopsGraph';
import HopsSearch from '../containers/HopsSearch';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
  },
});

const HopsGraphPage = ({ classes }) => (
  <div className={classes.root}>
    <HopsSearch />
    <HopsGraph />
  </div>
);

export default HopsGraphPage;
