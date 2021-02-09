import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
}
