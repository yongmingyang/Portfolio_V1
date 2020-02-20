import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default class Experience extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <Navbar/>
                <Header content="This is the experience page!"/>
            </div>
        )
    }
}
