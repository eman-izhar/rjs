import React from 'react'
import Rightcard from './Rightcard'
const Rightcontent = (props) => {
  console.log(props);
  
  return (
    <div className='h-full w-2/3 flex flex-nowrap gap-3 overflow-x-auto p-6' >
   {props.users.map(function(elem){

    return <Rightcard img={elem.img}/>
   })}
    </div>
  )
}

export default Rightcontent
