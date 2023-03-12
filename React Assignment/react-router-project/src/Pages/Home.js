import React from 'react';

import mainImg from '../Assests/front_web.jpg';
import './Home.css';

import bookIcon  from '../Assests/icons/books-icon.svg';
import studentIcon from '../Assests/icons/student-icon.svg';
import creditCardIcon from '../Assests/icons/credit-card-icon.svg';
import Card from '../Components/Card';

import amazon from '../Assests/partners_logo/amazon.png'
import wipro from '../Assests/partners_logo/wipro.png'
import geekyants from '../Assests/partners_logo/geekyants.png'
import super6 from '../Assests/partners_logo/super6.png';
import Achiever from '../Components/Achiever';

import student1 from '../Assests/student_img/student1.jpeg'
import student2 from '../Assests/student_img/student2.jpeg'
import student3 from '../Assests/student_img/student3.jpeg'
import HallofFameCard from '../Components/HallofFameCard';

import fsjs from '../Assests/cards_img/fsjs.jpg';
import dataScience from '../Assests/cards_img/dataScience.jpg';
import javaDSA from '../Assests/cards_img/javaDSA.jpg';
import CourseCard from '../Components/CourseCard';
import OurProducts from '../Components/OurProducts';


export default function Home() {

  const card_data = [
    { 
      img:  bookIcon , 
      number: "600+",
      text: "Different Courses" 
    }, 
    { 
      img: studentIcon ,
      number: "700000+",
      text: "Students Enrolled"
    },
    { 
      img:  creditCardIcon ,
      number: "10000+",
      text:"Successful Transition"
    }
  ];

  const achiever_data = [amazon, wipro, geekyants, super6];


  const hall_of_fame = [
    {
      img: student1, 
      name: "sai krishna gorantla",
      job_des: "Data Analyst, Tredence Analytics", 
      msg: "I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts." 
    }, 
    { 
      img: student2, 
      name:"SUNIL RAMESH DODDAMANI", 
      job_des: "Statistician 2, Epsilon",
      msg: "I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts."
    },
    {
      img: student3,
      name: "Dharmendra kumar Yadav",
      job_des: "Data Scientist Associate, Cognizant",
      msg: "I have studied from krish YouTube videos and ineuron, which helped me to understand the thorough concepts."
    }
  ];

  const courses_card = [
    {
      img: fsjs,
      courseName: "Full Stack Web Development",
      instructor: "Anurag Tiwari",
      c_price: "₹2975.00"
    },
    {
      img: dataScience,
      courseName: " Data Science Masters",
      instructor: "Krish Naik",
      c_price: "₹2975.00"
    },
    {
      img: javaDSA,
      courseName: "Java with DSA & System Design",
      instructor: "Priya Bhatia",
      c_price: "₹2975.00"
    }

  ]

  return (
    <main>
      <div className='carousel'>
        <img src={mainImg} alt="" />
      </div>
      <div className="intro">
        <h1 className='intro-heading'>“Pure Hardwork, No Shortcuts!”</h1>
        <div className='intro-underline'></div>
        <div className='cards-arr'>
            <Card card_data = {card_data[0]}/>
            <Card card_data = {card_data[1]}/>
            <Card card_data = {card_data[2]}/>
        </div>
      </div>
      <Achiever achiever_data = {achiever_data}/>
      <div className="hall-of-fame">
        <h1>Hall of Fame</h1>
        <div className='person-reviews'>
            <HallofFameCard hall_of_fame = {hall_of_fame[0]}/>
            <HallofFameCard hall_of_fame = {hall_of_fame[1]}/>
            <HallofFameCard hall_of_fame = {hall_of_fame[2]}/>
        </div>
      </div>
      <div className='affordable-price-con'>
        <h1 className='affordable-h1'>Affordable Programs</h1>
        <p className='affordable-p'>Find your favourite courses in pocket-friendly ways.</p>
        <div className='coursces-cards'>
          <CourseCard  courses_card = { courses_card[0] }/>
          <CourseCard  courses_card = { courses_card[1] }/>
          <CourseCard  courses_card = { courses_card[2] }/>
        </div>
      </div>
      <OurProducts />
    </main>
  )
}
