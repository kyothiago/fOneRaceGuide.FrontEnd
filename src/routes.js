import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Logon from './pages/Logon';
import Register from './pages/Register';
import UploadCircuito from './pages/Upload';
import RegisterCircuit from './pages/NewCircuit';
import UpdateProfile from './pages/UpdateProfile';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/newCircuit" component={RegisterCircuit} />
                <Route path="/circuitUpload" component={UploadCircuito} />
                <Route path="/UpdateProfile" component={UpdateProfile} />
            </Switch>
        </BrowserRouter>
    );
}