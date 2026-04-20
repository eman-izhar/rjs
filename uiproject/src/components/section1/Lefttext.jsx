import React from 'react'

const Lefttext = () => {
  return (
       <div className="w-[300px] px-18 py-8 bg-white">
      
      {/* Heading */}
      <h1 className="text-4xl font-semibold leading-tight text-gray-900">
        Prospective <br />
        customer <br />
        segmentation
      </h1>

      {/* Description */}
      <p className="text-xl text-gray-500 leading-relaxed">
        Depending on customer satisfaction and access to banking products, 
        potential target audience can be divided into three groups
      </p>

      {/* Arrow */}
      <div className="pt-10">
        <span className="text-2xl">↗</span>
      </div>

    </div>
  )
}

export default Lefttext
