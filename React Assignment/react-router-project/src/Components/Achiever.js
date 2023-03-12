import React from 'react';
import './Achiever.css'

export default function Achiever(props) {
  return (
      <div className='our-achiever'>
        <h1>Our Achiever's Work with</h1>
        <div className='achiever-img'>
              <img src={props.achiever_data[0]} alt="" />
              <img src={props.achiever_data[1]} alt="" />
              <img src={props.achiever_data[2]} alt="" />
              <img src={props.achiever_data[3]} alt="" />
        </div>
    </div>
  )
}
