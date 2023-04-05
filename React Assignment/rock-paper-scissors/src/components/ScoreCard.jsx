import React from 'react';

const ScoreCard = ({score,user}) => {
  return (
      <div className="flex flex-col items-center w-full gap-4 sm:w-1/4 ">
          <h2 className="font-bold text-4xl text-yellow-600 font-serif">{user}</h2>
          <p className="font-semibold text-3xl text-[whitesmoke]">{score}</p>
      </div>
  )
}

export default ScoreCard