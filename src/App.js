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
function KimToMiles() {
  return <h3>KM 2 M</h3>;
}
function App() {
  const [index, setIndex] = React.useState('0');
  const onSelect = event => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select onChange={onSelect} value={index}>
        <option value="x">Please Select</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Kim & Miles</option>
      </select>
      <hr />
      {index === 'x' ? 'Please Select' : null}
      {index === '0' ? <MinutesToHours /> : null}
      {index === '1' ? <KimToMiles /> : null}
    </div>
  );
}

export default App;
