import React from 'react';
import './FormCard.css';

export default function FormCard( props ) {
    const heading = props.form_data.heading;
    const des = props.form_data.des;
    const element = props.form_data.element;
  return (
    <div className='fomrs'>
        <h2 className='form-heading'>{ heading }</h2>
        <p className='form-des'>{ des }</p>
        <form>
            <input type="text" placeholder='Full Name'/>
            {element && <input type="text" placeholder='Organization Name' />}
            <input type="email" placeholder='Email Addrees' />
            <input type="tel" placeholder='Enter Your Mobile Number' />
            <textarea rows='5' placeholder='Your Message'></textarea>
            <button className='submit-btn'>Submit</button>
        </form>

    </div>
  )
}
