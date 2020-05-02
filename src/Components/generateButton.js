import React from 'react';
import App from '../App.js';

class GeneratorButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			title: ''
		}
	}

	handleClick() {
		this.props.changeColorMethod();

		var adjectives = ["Modern", "Boho", "Simple", "Quaint", "Quirky", "Medieval", "Rustic", "Classic", "90's", "80's", "70's", "2000's", "Retro", "Chic", "Spacey", "Urban", "Rural", "Oaky", "Surfy", "Carnival", "Ugly", "Vegan", "Apocalyptic", "Family-Friendly", "Healthy", "Hipster", "Royal", "Greek", "Hippie", "Arabian", "Western", "Outdoor", "Caribbean", "Futuristic", "Parisian", "Co-working", "Student", "Eco-Friendly", "Expensive", "High-Class", "5 Star", "Budget", "Not-For-Profit", "Homey", "Tiny", "Artisanal"];

		var nouns = ["Safari", "Beach", "Garden", "Neon", "Rooftop", "Cat", "Boatshed", "Country", "Oktoberfest", "Chocolate", "Disney", "Health", "Vegan", "Family-Friendly", "Children's", "Playground", "Disco", "Turkish", "Pirate", "Star-Wars", "Apres-Ski", "BBQ", "Festival", "Student", "Co-working", "Sidewalk", "Takeaway", "Fitness", "Juice", "Backpacker", "Volunteer", "Charity", "Donut", "Amsterdam", "Robot", "Retail", "Plant", "Pay-it-forward", "Yoga", "Greenhouse", "Bookshop", "Office", "Fast-Food"];

		var result = this.randomValue(adjectives) + " " + this.randomValue(nouns) + " " + 'Cafe';
		this.setState({ title: result });
	}

	randomValue(array) {
		return array[Math.floor(Math.random() * array.length)];
	}
	render() {
		return (<div className="centerBlock">
			<button className="generateButton"
				onClick={this.handleClick}
				style={{ color: this.props.textColor, border: '1px solid ' + this.props.textColor }}>Generate Ideas</button>
			<h2 className="resultsText"
				style={{ color: this.props.textColor }}>{this.state.title}</h2>
		</div >);
	}
}

export default GeneratorButton