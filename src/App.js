import React, { Component } from 'react';
import GeneratorButton from './Components/generateButton.js';
import Footer from './Components/footer.js';

import './sass/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      textColor: ""
    }
  }

  changeBG = (e) => {
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
      textColor: '#303d37'
    })

    this.setState({
      bgColor: this.randomValue(colors)
    })
  }

  randomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  render() {
    return (<div className="App" style={{ backgroundColor: this.state.bgColor }} >
      <div className="HeaderTopLeft">
        <h1 style={{ color: this.state.textColor }}>
          Cafe Idea Generator
        </h1>
      </div>
      <GeneratorButton
        parentMethod={this.changeBG}
        textColor={this.state.textColor} />
      <><Footer textColor={this.state.textColor} /></>
    </div>
    );
  }
}

export default App;


