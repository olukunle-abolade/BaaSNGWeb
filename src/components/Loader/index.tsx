'use client'

import "./Loader.css"

const Loader = ({text}:{text:string}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]  ">
      <svg className="svg">
        <circle cx = "70" cy= "70" r="70"></circle>
      </svg>

      <p className="mt-6 text-lg text-kblackCom font-normal">{text}</p>
    </div>
  )
}

export default Loader