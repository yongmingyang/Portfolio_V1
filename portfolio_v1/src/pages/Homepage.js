import React, { Component } from 'react';
import Header from "../components/Header";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Card from "../components/Card"

export default class Homepage extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <Navbar/>
                {/* <Card content="Hi, my name is Ming Yang"/> */}
                <Header title = "Hi, my name is Ming Yang." size = "1"/>
                <hr className = 'my-4'/>
                <Body content = "test"/>

            </div>
        )
    }
}
