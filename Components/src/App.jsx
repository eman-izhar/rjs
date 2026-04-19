import React from "react";
import Card from './components/card'
import Nav from './components/nav'
const App = () => {
const user = 'Me'
  return (
 
    <div>
      <Nav/> 
      <h1>Hi! {user}</h1>
      <Card user={user} />
      <Card/>
    </div>
  )
};

export default App;
