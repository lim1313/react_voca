import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Days from "./components/days";
import Words from "./components/words";
import Header from "./components/header";
import Emptypage from "./components/emptypage";
import AddWords from "./components/addWord";
import AddDay from "./components/addDay";
import "./app.css";

const App = props => {
  return (
    <div className="appBody">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Days />
          </Route>
          <Route exact path="/words/:day">
            <Words />
          </Route>
          <Route exact path="/addWord">
            <AddWords />
          </Route>
          <Route exact path="/addDay">
            <AddDay />
          </Route>
          <Route>
            <Emptypage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
