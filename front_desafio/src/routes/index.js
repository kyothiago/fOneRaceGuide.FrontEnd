import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Route from "./Route";
import Home from "../pages/Home";

import Logon from "../pages/Logon";
import Register from "../pages/Register";
import UpdateCircuito from "../pages/UpdateCircuito";
import RegisterCircuit from "../pages/NewCircuit";
import UpdateProfile from "../pages/UpdateProfile";
import Relatorio from "../pages/Relatorio";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} isPrivate />
        <Route path="/newCircuit" component={RegisterCircuit} isPrivate />
        <Route
          path="/UpdateCircuito/:id"
          component={UpdateCircuito}
          isPrivate
        />
        <Route path="/updateProfile/:id" component={UpdateProfile} isPrivate />
        <Route path="/relatorio" component={Relatorio} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
