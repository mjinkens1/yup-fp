import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Y from 'yval';

const arrayTypeMsg = (fieldName, value, type) =>
  `Field ${fieldName} must be ${type}, received ${typeof value}`;

const { validate } = Y.object({
  inputs: Y.array(arrayTypeMsg, Y.required()),
  maxText: {
    displayName: Y.string(Y.required('display name required')),
    top: Y.number(Y.required()),
    value: Y.number(Y.integer(), Y.min(2), Y.max(Y.ref('maxText.top'))),
  },
});

function App() {
  const [text, setText] = React.useState('');
  const [validation, setValidation] = React.useState({});

  React.useEffect(() => {
    const timer = setTimeout(() => {
      console.log('validate');
      setValidation(
        validate({
          inputs: [1, 2, 3],
          maxText: { top: 3, value: 6, displayName: 'MAX VALUE' },
        })
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  console.log(validation);

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
        <input onChange={text => setText(text)} />
      </header>
    </div>
  );
}

export default App;
