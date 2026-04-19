import React from 'react'
import {Bookmark} from "lucide-react"
const Card = (props) => {
    console.log(props.company);
    

  return (
    <div>
         <div className="card">

        <div className="top">
          <img src="https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg" alt="" />
          <button>Save <Bookmark /> </button>
        </div>
        <div className="center">
<h3>{props.company} <span>5 days ago</span></h3>
<h2>{props.post}</h2>
<div>
  <h4>Part Time</h4>
  <h4>Senior Level</h4>
</div>
        </div>
        <div className="bottom">
          <div className="tag">
           <h3>$120/hour</h3>
            <p>Faisalabad, Pakistan</p>
          </div>

            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
