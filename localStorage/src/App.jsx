import React from 'react'

const App = () => {
  //data save in local storage
  // localStorage.setItem('user', 'me')

  //get data from local storage
  // const user = localStorage.getItem('user')
  // console.log(user);
  
  //remove item from user
  // localStorage.removeItem('user')

//data save in local storage with object
  // const user ={
  //   username: 'me',
  //   age:"20",
  //   email:"me@example.com"
  // }

  //jason.parse() method is used to convert a JSON string into a JavaScript object.
const user = localStorage.getItem('user')
console.log(JSON.parse(user));


  //jason.stringify() method is used to convert a JavaScript object into a JSON string.
  // localStorage.setItem('user', JSON.stringify(user))
  return (
    <div>
      
    </div>
  )
}

export default App
