import { useState } from 'react'

import './App.css'
import HelloWorld from './HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelloWorld/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
    </>
  ) 
}

export default App
