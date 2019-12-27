import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    padding: 0,
  },

  search: {
    margin: theme.spacing(2),
  },
});

const HomePage = ({ classes, history }) => {
  console.log('foo', history);
  return (
    <div className={classes.root}>
      <TextField
        classes={{
          root: classes.search,
        }}
        fullWidth
        variant="outlined"
      />
      <TextField
        classes={{
          root: classes.search,
        }}
        variant="outlined"
      />
    </div>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object,

};

export default withStyles(styles)(HomePage);
