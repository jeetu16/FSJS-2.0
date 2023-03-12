import React from 'react';
import mainImg from '../Assests/main_logo/PWSkills-white.png'
import iso from '../Assests/icons/iso-9001-2015.svg'
import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className='footer-start'>
                <div className='footer-logo'>
                    <img src={mainImg} alt="footer-logo" />
                </div>
                <div className='footer-email'>
                    <i className="fa-solid fa-envelope"> </i><span className='email'>Email Us:</span> <br />
                    support@pwskills.com
                </div>
                <div className='social-media-icons'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
                <div className='iso-img'>
                    <img src={iso} alt="" />
                    <p>ISO 9001</p>
                </div>
            </div>
            <div className='footer-middle'>
                <h2>PW Skills</h2>
                <div className='line'></div>
                <div className='navigation'>
                    <ul>
                        <li>About Us</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <ul>
                        <li>Contact Us</li>
                        <li>Job Assistant</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
            </div>
            <div className='footer-end'>
                <h2>Products</h2>
                <div className='line'></div>
                <ul>
                    <li>PW Skills Lab</li>
                    <li>Job Portal</li>
                    <li>Experiece Portal</li>
                    <li>Become an Affiliate</li>
                    <li>Hall of fame</li>
                </ul>
            </div>
        </footer>
    )
}
