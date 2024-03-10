import { useState } from 'react'
import './App.css'
import AddTodo from './componets/AddTodo'
import Todo from './componets/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Learn about redux toolkit</h1>
     <AddTodo/>
     <Todo />
    </>
  )
}

export default App
