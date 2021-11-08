import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { Home } from "components/pages";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="*" element={<Home />} />
      </Switch>
    </Router>
  );
};
