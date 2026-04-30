import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
console.log("form sumitted");

  }
  return (
    <div>
      <form onSubmit={(e)=>submitHandler( 
e

      )}>
        <input type="text" name="name" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
