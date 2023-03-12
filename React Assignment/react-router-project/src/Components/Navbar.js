import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import mainImg from '../Assests/main_logo/PWSkills-main.png'

export default function Navbar() {
    const list_items = document.getElementsByClassName('list-items');
    const UnderlineElement = (e) => {
        list_items[0].classList.remove('underline')   
        list_items[1].classList.remove('underline')    
        list_items[2].classList.remove('underline')
        e.target.parentElement.classList.toggle('underline')
    }


    return (
        <nav>
            <div className='nav-img'>
                <img src={mainImg} alt="nav-img" />
            </div>
            <ul className='list'>
                <li className='list-items underline' onClick={UnderlineElement}>
                    <Link className='nav-links' to="/" >Home</Link>
                </li>
                <li className='list-items ' onClick={UnderlineElement}>
                    <Link className='nav-links' to="/about" >About Us</Link>
                </li>
                <li className='list-items ' onClick={UnderlineElement}>
                    <Link className='nav-links' to="/contact" >Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}
