import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction } from './actions/TodoActions';
import './App.css';

function App() {

  const [todo, setTodo] = useState();
  const dispatch = useDispatch()
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))

  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>TodoList App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Enter a Todo'
            style={{
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20

            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type='submit' style={{
            borderRadius: 25,
            padding: 10,
            border: "1px solid white",

          }}>Go</button>
        </form>

        <ul className='allTodos'>
          {
            todos && todos.map((t) => (
              <li className='singleTodo' key={t.id}>
                <span className='todoText'>{t.todo}</span>
                <button style={{
                  borderRadius: 25,
                  padding: 10,
                  border: "1px solid white",
                  color: "white",
                  backgroundColor: "orangered"
                }}>
                  Delete
                </button>
              </li>
            ))
          }

        </ul>
      </header>

    </div>
  );
}

export default App;
