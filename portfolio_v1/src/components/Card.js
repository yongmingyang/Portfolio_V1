import React, { Component } from 'react'
import Header from "./Header"
import Body from "./Body"

export class Card extends Component {
    render() {
        return (
            <div className="card text-white bg-dark mb-2" style = {{ width: '30rem', align: "center"}}>
                <img className="card-img-right" src="C:\\Users\\Ming Yang\\Desktop\\Work\\Photos\\Philippines 2020\\edits\\SARDINE"/>
                <Header title={this.props.content} size="card"/>
                <div className="card-body">
                    <h4 className="card-title">Dark card title</h4>
                    <Body style="card-text" content="this is the card text body"/>
               </div>
            </div>
        )
    }
}

export default Card
