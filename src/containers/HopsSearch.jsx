import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';

import ForwardIcon from '@material-ui/icons/Forward';

const styles = theme => ({
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
  popupIndicatorOpen: {
    color: fade(theme.palette.common.white, 0.85),
  },
  paper: {
    backgroundColor: fade(theme.palette.primary.main, 0.65),
  },
  option: {
    backgroundColor: fade(theme.palette.primary.main, 0.85),
  },
});

const options = [{ name: 'Robert De Niro' }, { name: 'Dan Aykroyd' }];

/* eslint-disable no-shadow */
const HopsSearch = ({ classes, sourcePlaceholder, targetPlaceholder }) => (
  <AppBar position="fixed">
    <Toolbar classes={{ root: classes.toolbar }}>
      <Autocomplete
        classes={{
          option: classes.option,
          paper: classes.paper,
          popupIndicator: classes.popupIndicator,
          popupIndicatorOpen: classes.popupIndicatorOpen,
        }}
        getOptionLabel={option => option.name}
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
      />
      <div className={classes.arrow}>
        <ForwardIcon />
      </div>
      <Autocomplete
        classes={{
          option: classes.option,
          paper: classes.paper,
          popupIndicator: classes.popupIndicator,
          popupIndicatorOpen: classes.popupIndicatorOpen,
        }}
        getOptionLabel={option => option.name}
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
