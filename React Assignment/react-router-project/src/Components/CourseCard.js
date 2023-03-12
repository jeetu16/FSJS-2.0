import React from 'react';
import './CourseCard.css';

export default function CourseCard(props) {
    const img = props.courses_card.img;
    const courseName = props.courses_card.courseName;
    const instructor = props.courses_card.instructor;
    const c_price = props.courses_card.c_price;

  return (
    <div className='course-card'>
        <div className="course-img">
            <img src={img} alt="course" />
        </div>
        <div className='course-name'> {courseName} </div>
        <div className='instructor'> {instructor} </div>
        <div className='c-price'> {c_price} </div>
    </div>
  )
}
