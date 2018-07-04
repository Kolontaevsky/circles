import React, { Component } from 'react'
import './MainCircle.css'

export default class extends Component {
    render () {
        const visibility = (this.props.isOpened === true) ? ' visible' : ''
        const image = this.props.image

        return (
            <div className={`main${visibility}`} style={{background: `url(${image})`}}></div>
        )
    }
}