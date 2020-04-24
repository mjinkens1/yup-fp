import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Y from 'yup-fp';

const { validate } = Y.object({
  inputs: Y.array('one', 'two', Y.length(4), Y.required()),
  maxText: {
    top: Y.number(),
    value: Y.number(Y.integer(), Y.max(Y.ref('top'))),
    displayName: Y.string(Y.max(10), Y.required()),
  },
});

console.log(validate({ inputs: [1, 2, 3, 6] }));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
