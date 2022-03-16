import { useState, useEffect } from 'react';
function Hello() {
  useEffect(() => {
    console.log('created');
    return () => console.log('destory');
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  console.log(toDo);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === ' ') {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setTodo('');
  };
  console.log(toDos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="toDolist"
        />
        <button>Add to Do</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
