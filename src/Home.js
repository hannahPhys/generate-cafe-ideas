import React, { Component } from "react";
import GeneratorButton from './Components/generateButton.js';
import About from "./About";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bgColor: "",
			textColor: ""
		}
		this.changeBG = this.changeBG.bind(this)
	}

	changeBG = (e) => {
		console.log('changeBG');
		var colors = [
			"#7c7563",
			"#a7947a",
			"#d1bfa5",
			"#e1ccai",
			"#b3ac91",
			"#d3c0a4",
			"#b8b78a",
			"#ece6d0",
			"#ddd3c4",
			"#ccc5b8",
			"#ddd1b5",
			"#cdc4ad",
			"#dad1ba"
		];

		this.setState({
			textColor: '#2d3e37'
		})
		var col = this.randomValue(colors)
		this.setState({
			bgColor: col
		})
		console.log(this.state.textColor)
		this.props.changeColorMethod(col, '#2d3e37')
	}
	randomValue(array) {
		return array[Math.floor(Math.random() * array.length)];
	}
	render() {
		return (
			<GeneratorButton
				changeColorMethod={this.changeBG}
				textColor={this.props.textColor} />
		);
	}
}

export default Home;