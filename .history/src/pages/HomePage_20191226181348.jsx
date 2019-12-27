import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import ForwardIcon from '@material-ui/icons/Forward';

const styles = theme => ({
  root: {
    alignItems: 'center',
    display: 'flex',

    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    padding: 0,
  },

  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 400,
  },

  search: {
    margin: theme.spacing(2),
  },

  icon: {
    transform: 'rotate(90deg)',
  },
});

const HomePage = ({ classes, history }) => {
  console.log('foo', history);
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <TextField
          classes={{
            root: classes.search,
          }}
          color="secondary"
          fullWidth
          variant="outlined"
        />
        <div className={classes.icon}>
          <ForwardIcon />
        </div>
        <TextField
          classes={{
            root: classes.search,
          }}
          color="secondary"
          fullWidth
          variant="outlined"
        />
      </div>
    </div>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object,

};

export default withStyles(styles)(HomePage);