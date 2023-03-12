import React from 'react';
import './OurProducts.css';
import neurolab from '../Assests/icons/neurolab-icon.svg';
import jobPortalIcon from '../Assests/icons/jobPortal-icon.svg';
import InternshipIcon from '../Assests/icons/Internship-icon.svg';
import affilitatePortalIcon from '../Assests/icons/affilitatePortal-icon.svg';
import halloffameIcon from '../Assests/icons/halloffame-icon.svg';
import OurProductCard from './OurProductCard';

export default function OurProducts() {

    const products_data = [
        {
            img: neurolab,
            title: 'PW Skills Lab',
            des: "Supercharge your project development with our robust lab."
        },
        {
            img: jobPortalIcon,
            title: 'Job Portal',
            des: "Use exceptional templates for a stand-out resume minus the sign up process."
        },
        {
            img: InternshipIcon,
            title: 'Experience portal',
            des: "PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects."
        },
        {
            img: affilitatePortalIcon,
            title: 'Become an affiliate',
            des: "Explore affiliate marketing opportunities with PW Skills and attain financial freedom."
        },
        {
            img: halloffameIcon,
            title: 'Hall of fame',
            des: "Our student placements and 100K+ career transitions speak volumes about our courses."
        }
    ]

    return (
        <div className='our-products'>
            <h1>Our Products</h1>
            <div className='products'>
                <OurProductCard products_data={products_data[0]} />
                <OurProductCard products_data={products_data[1]} />
                <OurProductCard products_data={products_data[2]} />
                <OurProductCard products_data={products_data[3]} />
                <OurProductCard products_data={products_data[4]} />
            </div>
        </div>
    )
}
