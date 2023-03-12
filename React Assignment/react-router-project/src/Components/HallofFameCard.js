import React from 'react';
import './HallofFameCard.css';

export default function HallofFameCard(props) {
    const img = props.hall_of_fame.img;
    const name = props.hall_of_fame.name;
    const job_des = props.hall_of_fame.job_des;
    const msg = props.hall_of_fame.msg;

    return (
        <div className='review'>
            <div className='person-img'>
                <img src={img} alt="" />
            </div>
            <div className='person-name'>
                {name}
            </div>
            <div className="person-job-des">
                {job_des}
            </div>
            <div className='person-msg'>
                {msg}
            </div>
            <div className='icon-con'>
                <i className="fa-brands fa-linkedin"></i>
            </div>
        </div>
    )
}
