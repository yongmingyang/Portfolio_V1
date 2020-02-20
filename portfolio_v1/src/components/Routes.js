import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Photos from "../pages/Photos";
// import { Switch } from 'react-mdl';

const Routes = () => (
        <Switch>
            <Route exact path="/" component = {Homepage}/>
            <Route path="/about" component = {About}/>
            <Route path="/experience" component = {Experience}/>
            <Route path="/contact" component = {Contact}/>
            <Route path="/photos" component = {Photos}/>
        </Switch>
    )
    


export default Routes
