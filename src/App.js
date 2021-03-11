import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home";

import Purchased from "./components/purchased/Purchased";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/purchased" component={Purchased} />
      </Switch>
    </Router>
  );
}

export default App;
