import React from 'react';
import GeneratorButton from './Components/generateButton.js';
import Footer from './Components/footer.js';

import './sass/App.scss';

function App() {
  return (
    <div className="App ">
      <div className="HeaderTopLeft">
        <h1>
          Cafe Idea Generator
        </h1>
      </div>
      <GeneratorButton />
      <><Footer /></>
    </div>
  );
}

export default App;


