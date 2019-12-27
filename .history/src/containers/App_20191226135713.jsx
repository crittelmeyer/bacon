import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import HopsGraphPage from '../pages/HopsGraphPage';
import ReposPage from '../pages/ReposPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HopsGraphPage} />
        <Route exact path="/repos" component={ReposPage} />
      </Switch>
    </ThemeProvider theme={theme}>
  );
}
