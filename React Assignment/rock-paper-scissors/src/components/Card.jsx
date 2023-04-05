import React from 'react'

const Card = ({imgSrc,altTxt,handleCheck}) => {
  return (
      <div className="flex flex-col items-center gap-4">
          <img onClick={(e) => handleCheck(e)} className="transform transition-all hover:scale-110 hover:cursor-pointer w-20 h-20 sm:w-28 sm:h-28" src={imgSrc} alt={altTxt} />
          <p className="text-white text-2xl sm:text-3xl">{altTxt.slice(0,1).toUpperCase()+altTxt.slice(1)}</p>
      </div>
  )
}

export default Card