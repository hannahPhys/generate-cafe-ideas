import React, { Component } from "react";
import Home from "./Home";
import {
	NavLink,
	HashRouter
} from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<HashRouter>
				<div className="HeaderTopLeft">
					<NavLink to="/"> <h1 style={{ color: this.props.textColor }}>Cafe Idea Generator </h1></NavLink>
				</div>
			</HashRouter >
		);
	}
}

export default Header;