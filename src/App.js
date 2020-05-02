import React, { Component } from 'react';
import Footer from './Components/footer.js';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import './sass/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: '',
      textColor: '#ffffff'
    }
    this.changeColorMethod = this.changeColorMethod.bind(this)
  }

  changeColorMethod(col, textCol) {
    this.setState({ bgColor: col, textColor: textCol });
  }

  render() {

    return (
      <HashRouter>
        <div className="App" style={{ backgroundColor: this.state.bgColor }}>
          <Header textColor={this.state.textColor} />
          <Route exact path="/" render={(props) => {
            return (<Home changeColorMethod={this.changeColorMethod} textColor={this.state.textColor} />);
          }} />
          <Route path="/About" render={(props) => {
            return (<About textColor={this.state.textColor} />);
          }} />
          <Footer textColor={this.state.textColor} />
        </div>
      </HashRouter>
    );
  }

}

export default App;

/**style={{ backgroundColor: this.state.bgColor }} */
