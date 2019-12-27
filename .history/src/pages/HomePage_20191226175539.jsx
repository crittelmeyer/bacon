import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import TextField from '@material-ui/core/TextField';

const styles = () => ({
  root: {
    padding: 0,
  },

  graph: {
    marginTop: 60,
  },
});

const HopsGraphPage = ({ classes, history }) => {
  console.log('foo', history);
  return (
    <div className={classes.root}>
      <TextField />
    </div>
  );
};

HopsGraphPage.propTypes = {
  classes: PropTypes.object,

};

export default withStyles(styles)(HopsGraphPage);
