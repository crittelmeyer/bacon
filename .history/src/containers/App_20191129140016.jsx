import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HopsGraphPage from '../pages/HopsGraphPage';
import ReposPage from '../pages/ReposPage';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HopsGraphPage} />
        <Route exact path="/repos" component={ReposPage} />
      </Switch>
    </Fragment>
  );
}
