import React from 'react';
import './About.css';
import ourMission from '../Assests/cards_img/ourmisison-bg.png';

import img1 from '../Assests/services_images/service-1.png';
import img2 from '../Assests/services_images/service-2.png';
import img3 from '../Assests/services_images/service-3.png';
import img4 from '../Assests/services_images/service-4.png';
import img5 from '../Assests/services_images/service-5.png';
import img6 from '../Assests/services_images/service-6.png';
import ServicesCard from '../Components/ServicesCard';

export default function About() {

  const our_services = [
    {
      img: img1,
      title: "Affordable online courses",
      des: "Affordable online courses along with learning communities."
    },
    {
      img: img2,
      title: "Best in Class/Industry Mentors",
      des: "Mentors are Youtubers, digital entrepreneurs and content creators."
    },
    {
      img: img3,
      title: "Experience Portal",
      des: "A revolutionary self-paced experience portal."
    },
    {
      img: img4,
      title: "Job Portal",
      des: "An unparalleled job portal that rewards both recruiters and applicants."
    },
    {
      img: img5,
      title: "On-Demand Courses",
      des: "Provide on-demand courses across technologies like data science, machine learning, and AI."
    },
    {
      img: img6,
      title: "Innovation Lab for Tech products",
      des: "Product development at R&D lab with respect to robotics, drones, and customised products like electronic devices, AI on edge devices."
    }
  ] 

  return (
    <div>
      <div className='aboutUs-bg'>
        <h1>About Us</h1>
        <p>PW Skills is the result of a continual effort to exponentially increase the employability of every Indian, irrespective of their socioeconomic status. With accessibility and affordability being the support structure of high-quality, industry-relevant courses, PW Skills aims to empower professionals and students alike to either jumpstart their careers or leverage existing skills with new, future-driven upgrades that will help them realise their full potential.</p>
      </div>
      <div className='our-mission'>
        <h1 className='sub-mainHeading'>Our Misson</h1>
        <p>PW Skills' mission is to permeate through every student/professional's outlook towards jobs and change their attitude and perspective from “How Can I Do It?” to “Of Course I Can Do It”. We aim to do this by providing exceptional upskilling courses at affordable rates, while being tech-forward so anyone, anywhere can access and improve their ability to be successful in life.</p>

        <div className='ourmission-img'>
          <img src={ourMission} alt="" />
        </div>
      </div>
      <div className='our-services'>
        <h1 className='sub-mainHeading'>Our Services</h1>
        <div className='services'>
            <ServicesCard our_services = {our_services[0]} />
            <ServicesCard our_services = {our_services[1]} />
            <ServicesCard our_services = {our_services[2]} />
            <ServicesCard our_services = {our_services[3]} />
            <ServicesCard our_services = {our_services[4]} />
            <ServicesCard our_services = {our_services[5]} />
        </div>
      </div>
    </div>
  )
}
