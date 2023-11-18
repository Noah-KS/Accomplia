import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    const[todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
          return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        //console.log(todo, ...todos);
    }

const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
}

const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
    if (todo.id === id) {
      todo.isComplete = !todo.isComplete
    }
    return todo;
  })
  setTodos(updatedTodos);
}

const [completedCount, setCompletedCount] = useState(0);

const markComplete = id => {
  const updatedTodos = todos.filter(todo => todo.id !== id);
  setTodos(updatedTodos);

  const newCompletedCount = completedCount + 1;
  setCompletedCount(newCompletedCount);
};

const totalTasks = todos.length + completedCount;
const completionRatio = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0;


const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }

      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
      );
}
  return (
    <div>
      <div className="loading-bar-container">
  <div className="loading-bar" style={{ width: `${completionRatio}%` }}></div>
</div>
    <div className = 'hover-area'>
        <TodoForm onSubmit = {addTodo}></TodoForm>
        </div>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} markComplete={markComplete} />
        
    </div>
  )
}

export default TodoList