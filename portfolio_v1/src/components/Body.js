import React, { Component } from 'react'
import Background from "../images/sardine.jpg"

export class Body extends Component {
    render() {

        var liStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: "url(" + Background + ")",
            backgroundImageopacity: 0.5
        };


        return (
            // <div className="container">
            <ul className="slides">
                <li style={ liStyle } ><p className={this.props.style}>{this.props.content}</p></li>
            </ul>
            // </div>
        )
    }
}

export default Body
