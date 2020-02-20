import React, { Component } from 'react'
import { Navigation, Header,} from "react-mdl";
// import { Route } from "react-router-dom";
// import Homepage from "../pages/Homepage"
import {Link} from "react-router-dom"
// import {Link, animateScroll as scroll } from "react-scroll";


export default class Navbar extends Component {
    render() {
        return (
            <Header className="header-color" title="MY" scroll>
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/photos">Photos</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
        )
    }
}
