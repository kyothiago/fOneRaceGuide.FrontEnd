import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Logon from './pages/Logon';
import Register from './pages/Register';
//import UploadCircuito from './pages/Upload';
//import NewCircuit from './pages/NewCircuit';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
               {/*  //<Route path="/newCircuit" component={NewCircuit} /> */}
                {/* <Route path="/circuit/upload" component={UploadCircuito} /> */}
            </Switch>
        </BrowserRouter>
    );
}