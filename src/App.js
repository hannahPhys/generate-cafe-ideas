import React from 'react';
import Toggle from './Components/testButton.js';
import FooterPage from './Components/FooterPage.js';

import './Styles/App.scss';

function App() {
  return (
    <div className="App ">
      <div className="center">
        <h3>
          Cafe Idea Generator
        </h3>
        <Toggle />
      </div>
      <><FooterPage /></>
    </div>
  );
}

export default App;


