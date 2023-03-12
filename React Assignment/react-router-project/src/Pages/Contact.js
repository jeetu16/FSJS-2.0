import React from 'react';
import FormCard from '../Components/FormCard';
import './Contact.css';


export default function Contact() {
  const form_data = [
    {
      heading: "Course Enquiry" ,
      des: "Feel free to reach out to us if you have a query related to any course or product that we offer, our associates are available on chat 24/7.",
      element : false 
    },
    {
      heading: "Corporate Enquiry" ,
      des: "For any Corporate training/College training requirement please reach out to us on support@pwskills.com",
      element : true
    }
  ]
  return (
    <div>
      <div className='contact-bg-img'>
        <h1>Contact Us</h1>
      </div>
      <h1 className='sub-mainHeading'>Let's get in touch!</h1>
      <div className='contact'>
          <FormCard form_data = { form_data[0] }/>
          <FormCard form_data = { form_data[1] }/>
      </div>
    </div>
  )
}
