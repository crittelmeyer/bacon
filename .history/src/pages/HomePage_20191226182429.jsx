import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ForwardIcon from '@material-ui/icons/Forward';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    padding: 0,
  },

  content: {
    alignItems: 'center',
    color: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 600,
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
        <Typography variant="h3">Six Degrees of...</Typography>
        <TextField
          classes={{
            root: classes.search,
          }}
          color="secondary"
          fullWidth
          placeholder="Kevin Bacon"
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
          placeholder={sample(suggestions)}
          variant="outlined"
        />
        <Button variant="outlined" size="large">Go</Button>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  classes: PropTypes.object,

};

export default withStyles(styles)(HomePage);
