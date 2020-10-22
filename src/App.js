import React , {useState} from 'react'
import "./App.css"
const App = ()=>{
  const [count , setCount] = useState(0);
  return (
    <div className="App">
       <header>
       <h1>Counter React Application using functional state </h1>
       </header>
       <h2>Currrent value of count is {count}</h2>
       <button onClick={()=> setCount(0)}>Reset Counter</button>
       <button onClick={()=> setCount(count + 1)}>Increment Counter</button>
       <button onClick={()=> setCount(count - 1)}>Decrement Counter</button>
    </div>
  )
}


export default App