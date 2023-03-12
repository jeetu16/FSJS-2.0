import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='feature-card'>
        <img src={props.card_data.img} alt="img" />
        <p className='numbers'>{props.card_data.number}</p>
        <p className='card-text'>{props.card_data.text}</p>
    </div>
  )
}
