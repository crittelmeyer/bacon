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
  console.log('theme', theme);
  return ({
    toolbar: {
      justifyContent: 'center',
    },
    search: {
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(1),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    arrow: {
      margin: theme.spacing(1),
    },
    popupIndicator: {
      color: theme.palette.common.white,
    },
    option: {
      backgroundColor: 'red',
    },
    paper: {
      backgroundColor: 'green',
    },
  });
};

const options = [{ title: 'cool' }];

/* eslint-disable no-shadow */
const HopsSearch = ({ classes, sourcePlaceholder, targetPlaceholder }) => (
  <AppBar position="fixed">
    <Toolbar classes={{ root: classes.toolbar }}>
      <Autocomplete
        classes={{
          option: classes.option,
          paper: classes.paper,
          popupIndicator: classes.popupIndicator,
        }}
        options={options}
        renderInput={params => (
          <TextField
            {...params}
            classes={{
              root: classes.search,

            }}
            color="secondary"
            margin="dense"
            placeholder={sourcePlaceholder}
            variant="outlined"
          />
        )}
        renderOption={option => <Typography noWrap>{option.title}</Typography>}
      />
      <div className={classes.arrow}>
        <ForwardIcon />
      </div>
      <Autocomplete
        classes={{ popupIndicator: classes.popupIndicator }}
        options={options}
        renderInput={params => (
          <TextField
            {...params}
            classes={{
              root: classes.search,
            }}
            color="secondary"
            margin="dense"
            placeholder={targetPlaceholder}
            variant="outlined"
          />
        )}
        renderOption={option => <Typography noWrap>{option.title}</Typography>}
      />
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
