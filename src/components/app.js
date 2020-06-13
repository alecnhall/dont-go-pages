import React, { Component } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} render={(props) => <Home {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
