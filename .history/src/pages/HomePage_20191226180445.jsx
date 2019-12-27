import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: 0,
  },

  graph: {
    marginTop: 60,
  },
});

const HomePage = ({ classes, history }) => {
  console.log('foo', history);
  return (
    <div className={classes.root}>
      <TextField />
      <TextField />
    </div>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object,

};

export default withStyles(styles)(HomePage);
