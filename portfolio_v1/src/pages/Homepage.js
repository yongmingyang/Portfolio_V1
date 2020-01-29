import React, { Component } from 'react';
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default class Homepage extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <Navbar/>
                <Header/>
            </div>
        )
    }
}
