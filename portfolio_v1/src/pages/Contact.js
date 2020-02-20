import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default class Contact extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <Navbar/>
                <Header content="This is the contact page!"/>
            </div>
        )
    }
}
