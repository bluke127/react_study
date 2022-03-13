import logo from './logo.svg';
import './App.css';
import React from 'react';
function MinutesToHours() {
  const [amounts, setAmounts] = React.useState(0);
  const [inverted, setInverted] = React.useState(false);
  const onChange = event => {
    setAmounts(event.target.value);
  };
  const reset = () => setAmounts(amounts * 0);

  const onFlip = () => {
    reset();
    setInverted(current => !current);
  };
  return (
    <div>
      <label htmlFor="minutes">Minutes</label>
      <input
        onChange={onChange}
        disabled={inverted}
        id="minutes"
        value={inverted ? amounts * 60 : amounts}
        placeholer="Minutes"
        type="number"
      />
      <h4>You want to convert {amounts}</h4>
      <label htmlFor="hours">Hours</label>
      <input
        onChange={onChange}
        id="hours"
        disabled={!inverted}
        value={inverted ? amounts : Math.round(amounts / 60)}
        placeholer="Hours"
        type="number"
      />
      <button onClick={reset}>리셋</button>
      <button onClick={onFlip}>{inverted ? 'turn off' : 'inverted'}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Super Converter</h1>
      <MinutesToHours></MinutesToHours>
    </div>
  );
}

export default App;
