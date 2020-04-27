import React, { Component } from 'react';
import GeneratorButton from './Components/generateButton.js';
import Footer from './Components/footer.js';

import './sass/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }

  boxClick = (e) => {
    var colors = ["#2d3e37",
      "#7c7563",
      "#a7947a",
      "#d1bfa5",
      "#e1ccai",
      "#b3ac91",
      "#ccc5b8",
      "#cdc4ad",
      "#d3c0a4",
      "#b8b78a",
      "#ece6d0",
      "#ddd3c4",
      "#ddd1b5",
      "#dad1ba"]
    var result = this.randomValue(colors);

    this.setState({
      bgColor: result
    })
  }

  randomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  render() {
    return (<div className="App" style={{ backgroundColor: this.state.bgColor }} >
      <div className="HeaderTopLeft">
        <h1>
          Cafe Idea Generator
        </h1>
      </div>
      <GeneratorButton parentMethod={this.boxClick} />
      <><Footer /></>
    </div>
    );
  }
}

export default App;


