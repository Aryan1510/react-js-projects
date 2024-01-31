import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(15)

 //let counter = 15
  const addValue = ()  => {
    console.log("clicked", counter);
    //counter = counter + 1
    if (counter < 20){
      setCounter(counter => counter + 1)
    }
  }
  const removeValue = ()  => {
    console.log("clicked", counter);
    //counter = counter - 1
    if (counter > 0){
      setCounter(counter => counter - 1)
    }
  }
  return (
    <>
      <h1>code with  aryan</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}>add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
