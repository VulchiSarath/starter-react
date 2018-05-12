import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";


import LayoutComponent from './components/LayoutComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import ContactComponent from './components/ContactComponent';
import NotFoundComponent from './components/NotFoundComponent';


const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LayoutComponent}/>
            <Route exact path="/home" name="about" component={HomeComponent}/>
            <Route exact path="/about" name="about" component={AboutComponent}/>
            <Route exact path="/contact" name="contact" component={ContactComponent}/>
            <Route path="*" component={NotFoundComponent}/>
        </Switch>
    </BrowserRouter>
);

export default routes;