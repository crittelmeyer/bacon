import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { fade, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import HopsGraphPage from '../pages/HopsGraphPage';
import ReposPage from '../pages/ReposPage';

const theme = createMuiTheme({
  palette: {
    background: { default: '#ffaaaa' }, // bg
    primary: { main: '#642c2c' }, // search background color & (faded) search textbox
    secondary: { main: '#d46a6a', light: '#aa3939' }, // node color 1 & (faded) 2
    text: { primary: '#fff' },
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
