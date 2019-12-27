import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import HomePage from '../pages/HomePage';
import HopsGraphPage from '../pages/HopsGraphPage';
import ReposPage from '../pages/ReposPage';

const theme = createMuiTheme({
  palette: {
    // background: { default: '#642c2c' }, // bg
    primary: { main: '#aa3939' }, // search background color & (faded) search textbox
    secondary: { main: '#d46a6a', light: '#ffaaaa' }, // node color 1 & (faded) 2
    text: { primary: '#fff' },
  },
});

export default function App() {
  return (
    <ThemeProvider style={{ height: '100%' }} theme={theme}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={HopsGraphPage} />
        <Route exact path="/repos" component={ReposPage} />
      </Switch>
    </ThemeProvider>
  );
}
