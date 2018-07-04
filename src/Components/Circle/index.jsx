import React, { Component } from 'react'
import './Circle.css'

export default class extends Component {
    render () {
        return (
            <div className="circle" onClick={this.props.handleCircleClick(this.props.image)} style={{background: `url(${this.props.image})`}}>{this.props.children}</div>
        )
    }
}