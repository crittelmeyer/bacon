import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';

import ForwardIcon from '@material-ui/icons/Forward';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary,
  },
  toolbar: {
    justifyContent: 'center',
  },
  search: {
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  arrow: {
    margin: theme.spacing(2),
  },
});

/* eslint-disable no-shadow */
const HopsSearch = ({ classes }) => (
  <AppBar className={classes.root} position="fixed">
    <Toolbar classes={{ root: classes.toolbar }}>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className={classes.arrow}>
        <ForwardIcon />
      </div>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button
    </Toolbar>
  </AppBar>
);

HopsSearch.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HopsSearch);
