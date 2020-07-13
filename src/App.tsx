import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Money from './pages/Money';
import Labels from './pages/Labels';
import Statistics from './pages/Statistics';
import NoMatch from './pages/NoMatch';





const APP =   ()=> {
  return (
    <Router>
          <Switch>
            <Route path="/labels">
              <Labels/>
            </Route>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
    </Router>
  );
}


export default APP;