import React, { Component } from 'react'
import MainCircle from './Components/MainCircle'
import circles from './circles'
import Circle from './Components/Circle'
import './App.css'

export default class extends Component {
	state = {
		mainCircleIsOpened: false,
		image: "https://www.planwallpaper.com/static/images/198690-texture.jpg"
	}

	handleCircleClick = (newImage) => {
		this.setState({
			mainCircleIsOpened: false,
			image: newImage
		})
	}

  	render() {
    	return (
			<div className="container">
				{circles.map(function(circle){
					return <Circle key={circle.title} image={circle.image} onClick={this.handleCircleClick.bind(this)}>{circle.title}</Circle>
				})}
				<MainCircle isOpened={this.state.mainCircleIsOpened} image={this.state.image}/>
			</div>
    	)
  	}
}