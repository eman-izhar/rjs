import React from 'react'
import Navbar from './Navbar'
import Page1content from './Page1content'

const Section1 = (props) => {
  console.log(props.users);
  
  return (
    <div>
      <Navbar/>
      <Page1content users={props.users}/>

      <div className="h-screen w-full"></div>
    </div>
  )
}

export default Section1
