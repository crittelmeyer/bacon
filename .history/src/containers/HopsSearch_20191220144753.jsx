import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';

const styles = theme => ({
  root: {
    backgroundColor: 's',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
});

/* eslint-disable no-shadow */
const HopsSearch = ({ classes }) => (
  <AppBar className={classes.root} position="static">
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />
  </AppBar>
);

HopsSearch.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HopsSearch);
