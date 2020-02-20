import React, { Component } from 'react';
import Navbar from './Navbar';


export default class Header extends Component {

    render() {
        // var toDisplay;
        // if(this.props.size === "1"){
        //     toDisplay = <h1 className="display-3 text-center">{this.props.title}</h1>
        // }else if(this.props.size === "card"){
        //     toDisplay = 
        //     <div className="card-header">
        //         <p className="lead text-dark">{this.props.title}</p>
        //     </div>
        // }
        // else{
        //     toDisplay = <h4 className="text-center">{this.props.title}</h4>
        // }
        return (
            // <div className="jumbotron">
            //     <div className="container">
            //         {toDisplay}
            //     </div>
            // </div>
            <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                <Navbar/>
            </Header>
        )
    }
}
