import React, { Component } from "react";

class About extends Component {
	render() {
		return (
			<div className="centerBlock" style={{ color: this.props.textColor }}>
				<p style={{ color: this.props.textColor }}>I decided to learn React one night during the quarantine so span up this wee app. <br /><br />
				I was thinking about going in with a friend to start up a cafe in Australia. When I was doing some quick research on it one night, I came across an article about ensuring your cafe had a point of difference. There wasn’t much out there in the scope of some kind of idea or theme generator (to spark some creativity). <br /><br />So, decide to see how quick I could pick up a new language that’s been on the list for some time now. I have no patience for a tutorial so just started working on it straight away, working piece by piece to incorporate all the components I needed. Hardest part was having to google "GoDaddy" way too often during this process. <br /><br />
				The site picks out some random Adjective then a Noun and adds cafe at the end. Easy as. <br /><br />
				Here's hoping someone out there makes an apocalyptic vegan cafe.</p>
			</div>
		);
	}
}

export default About;