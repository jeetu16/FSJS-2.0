import React from 'react'
import { Link } from 'react-router-dom'

const ButtonSeeMore = ({ value, movieCategory }) => {
  return (
    <Link
      className='bg-indigo-700 py-2 font-semibold px-3 rounded-3xl text-white hover:opacity-80 shadow shadow-slate-700 cursor-pointer'
      to={`/${movieCategory.id}/1`}
    >
      {value}
    </Link>
  )
}

export default ButtonSeeMore