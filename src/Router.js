import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

import App from './App'
import PersonsForm from './Components/PersonsForm';
import EditCamper from './Components/EditCamper';

const Router = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/add-camper" component={PersonsForm}/>
            <Route path="/edit-camper/:id" component={EditCamper}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Router;
