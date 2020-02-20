import React, { Component } from 'react';
// import Header from "../components/Header";
// import Body from "../components/Body";
// import Navbar from "../components/Navbar";
import {Grid, Cell } from 'react-mdl';
import Me from "../images/Me.jpg"
// import { Header, Layout, Content } from "react-mdl";

export default class Homepage extends Component {
    render() {
        return (
            // <Navbar/>
            <div className="Homepage-div">
                <Grid className="Homepage-grid">
                    <Cell col={12}>
                        <img 
                        src={Me}
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Fullstack Web Developer</h1>
                            <h1>X</h1>
                            <h1>Photographer</h1>
                            
                            <hr/>
                            <p>HTML/CSS | Javascript | ReactJS | Lightroom | Photoshop</p>
                        

                            <div className="social-links">
                                
                                {/* Instagram */}
                                <a href="https://instagram.com/yongmingyang"  rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-instagram"aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://github.com/yongmingyang"  rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square"aria-hidden="true"/>
                                </a>

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/yong-ming-yang-158379165/"  rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin"aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
