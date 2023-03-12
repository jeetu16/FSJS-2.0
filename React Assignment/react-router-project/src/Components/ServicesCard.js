import React from 'react';
import './ServicesCard.css';

export default function ServicesCard(props) {
    const img = props.our_services.img;
    const title = props.our_services.title;
    const des = props.our_services.des;

  return (
    <div className='service'>
        <div className='service-img'>
            <img src = { img } alt="" />
        </div>
        <div className='service-txt'>
            <h2 className='service-title'>{ title }</h2>
            <p className='service-des'>{ des }</p>
        </div>
    </div>
  )
}
