import React, {useState} from 'react'

const App = () => {
  const [num, setCount] = useState(10)

  const btnClick = () => {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>Click me</button>
    </div>
  )
}

export default App
