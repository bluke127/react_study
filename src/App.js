import { useState, useEffect } from 'react';
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time');
  const iRunOnlyOnce = () => {
    console.log('i run only once');
  };
  useEffect(() => {
    console.log('call the api');
  }, []);
  useEffect(() => {
    console.log('i run when change keyword', keyword), [keyword];
  });
  useEffect(() => {
    console.log('i run when change keyword or counter', keyword),
      [keyword, counter];
  });
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
