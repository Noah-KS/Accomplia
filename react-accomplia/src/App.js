import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className='todo-app'>
      <h1 id="app-title">Accomplia</h1>
      <div className="todo-list-container">
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App
