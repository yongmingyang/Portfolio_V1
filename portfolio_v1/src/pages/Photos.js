import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Header from "../components/Header";

export default class Photos extends Component {
    render() {
        return (
            <div className="container-fluid bg-light">
                <Navbar/>
                <Header content="These are some of the photos taken"/>
            </div>
        )
    }
}
