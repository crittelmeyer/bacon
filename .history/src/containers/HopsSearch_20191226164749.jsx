import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ForwardIcon from '@material-ui/icons/Forward';

const styles = theme => {
  console.log('theme', theme.palette.text.secondary);
  return ({
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
      borderColor: 'red',
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(1),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
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
      margin: theme.spacing(1),
    },
  });
};

const options = [{ title: 'cool' }];

/* eslint-disable no-shadow */
const HopsSearch = ({ classes, sourcePlaceholder, targetPlaceholder }) => (
  <AppBar className={classes.root} position="fixed">
    <Toolbar classes={{ root: classes.toolbar }}>

      <Autocomplete
        options={options}
        renderInput={params => (
          <TextField
            {...params}
            placeholder={sourcePlaceholder}
            classes={{
              root: classes.search,
              input: classes.inputInput,
            }}
            margin="dense"
            variant="outlined"
          />
        )}
        renderOption={option => <Typography noWrap>{option.title}</Typography>}
      />

      <div className={classes.arrow}>
        <ForwardIcon />
      </div>
      <div className={classes.search}>
        <InputBase
          placeholder={targetPlaceholder}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Button variant="contained">Go</Button>
    </Toolbar>
  </AppBar>
);

HopsSearch.propTypes = {
  classes: PropTypes.object,
  sourcePlaceholder: PropTypes.string,
  targetPlaceholder: PropTypes.string,
};

HopsSearch.defaultProps = {
  sourcePlaceholder: 'Robert De Niro',
  targetPlaceholder: 'Dan Aykroyd',
};

export default withStyles(styles)(HopsSearch);
