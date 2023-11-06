import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App () {
  return (
    <div className='todo-app'>
      <h1 id = "app-title">Accomplia</h1>
      <TodoList></TodoList>
    </div>
  )
}

export default App
