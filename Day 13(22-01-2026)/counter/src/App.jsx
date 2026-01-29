import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      
      <div className="card">

        <h1>COUNT: {count}</h1>

        <br />

        <button mouseup={() => setCount((count) => count + 1)}>
          Increase 
        </button>

        <button onClick={() => setCount((count) => {if(count>0){ return count - 1} else {return count = 0}} )}>
          Decrease 
        </button>

        <button onClick={() => setCount((count) => 0)}>
          Reset
        </button>
        
      </div>
      
    </>
  )
}

export default App
