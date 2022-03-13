import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(current => current + 1);
  };
  return (
    <div>
      <h3>Total click : {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
