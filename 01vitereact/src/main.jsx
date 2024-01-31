import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function App(){
  
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}

//const reactElement = {
  //type: 'a',
  //props: {
      //href: 'https:/google.com',
      //target: '_blank',

 // },
  //children:'click me to visit google'
// }


const AnotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)
const anotherUser = "mewada"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target:'_blank'},
  "click me visit google",
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
