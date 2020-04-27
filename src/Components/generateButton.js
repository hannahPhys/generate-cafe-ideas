import React from 'react';
import App from '../App.js';

class GeneratorButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			title: '',
			textColor: ''
		}
	}

	handleClick() {
		this.props.parentMethod();

		var adjectives = ["Modern", "Boho", "Simple", "Quiet", "Quirky", "Rustic", "Classic", "90's", "80's", "70's", "2000's", "Retro", "Chic", "Spacey", "Urban", "Rural", "Oaky", "Surfy", "Carnival", "Ugly", "Vegan", "Apocalyptic", "Family-Friendly", "Healthy", "Hipster", "Royal", "Greek", "Hippie", "Arabian", "Western", "Outdoor", "Caribbean", "Futuristic", "Parisian", "Co-working", "Student", "Eco-Friendly", "Expensive", "High Class", "5 Star", "Budget"];

		var nouns = ["Safari", "Beach", "Garden", "Neon", "Rooftop", "Cat", "Boatshed", "Country", "Oktoberfest", "Chocolate", "Disney", "Health", "Vegan", "Family-Friendly", "Children's", "Playground", "Disco", "Turkish", "Pirate", "Star-Wars", "Apres-Ski", "BBQ", "Festival", "Student", "Co-working", "Sidewalk", "Takeaway", "Fitness", "Juice", "Backpacker"];

		//var cafeTypes = ["Bakery", "Restaurant", "Shop", "Cafeteria", "Buffet", "Tea Rooms", "Tea Shop", "Bistro", "Wine Bar", "Bar", "Pub", "Eatery", "Caf", "Coffee House", "Tavern"];

		var result = this.randomValue(adjectives) + " " + this.randomValue(nouns) + " " + 'Cafe';
		this.setState({ title: result, textColor: '#2d3e37' });
	}

	randomValue(array) {
		return array[Math.floor(Math.random() * array.length)];
	}
	render() {
		return (<div className="centerBlock">
			<button className="generateButton"
				onClick={this.handleClick}
				style={{ color: this.state.textColor, border: '1px solid ' + this.state.textColor }}>Generate Ideas</button>
			<h2 className="resultsText"
				style={{ color: this.state.textColor }}>{this.state.title}</h2>
		</div >);
	}
}

export default GeneratorButton