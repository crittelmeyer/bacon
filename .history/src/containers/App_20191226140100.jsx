import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import HopsGraphPage from '../pages/HopsGraphPage';
import ReposPage from '../pages/ReposPage';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff0000' },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HopsGraphPage} />
        <Route exact path="/repos" component={ReposPage} />
      </Switch>
    </ThemeProvider>
  );
}
